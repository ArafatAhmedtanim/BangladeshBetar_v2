import React from 'react';
import axios from 'axios';
import API from './api.json';

export const DataContext = React.createContext();
export const DataConsumer = DataContext.Consumer;

class DataProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currUser: '',
      
      analyticsData: [],
      filterAnalyticsData: [],

      division: [],
      district: [],
      thana: [],

      selectedDivision: '0',
      selectedDistrict: '0',
      selectedThana: '0',

      update: this.update.bind(this),
      filter: this.filter.bind(this),
      getDivision: this.getDivision.bind(this),
      getDistrict: this.getDistrict.bind(this),
      // getThana: this.getThana.bind(this),

    };
  }

  componentDidMount(){
    const user = JSON.parse(localStorage.getItem('user'));
    axios
      .get(
        API.HOST + API.ANALYTICS,
        { headers: { Authorization: 'bearer ' + user.user.token } },
      )
      .then(res => {
        console.log(res.data);
        this.state.update('analyticsData', res.data);
        this.state.update('filterAnalyticsData', res.data);

        this.state.update('division', this.state.getDivision(res.data))
        this.state.update('district', this.state.getDistrict(res.data))
        // this.state.update('thana', this.state.getThana(res.data))
      })
      .catch(error => {
        console.log(error);
      });
  }

  update(key, value) {
    console.log(key, value);
    this.setState({ [key]: value });
  }

  getDivision(data){
    return [...new Set(data.map(x=>x.Division))]
  }

  getDistrict(data){
    return [...new Set(data.map(x=>x.District))]
  }

  // getThana(data){
  //   return [...new Set(data.map(x=>x.Thana))]
  // }

  filter(data, filterOption, value){
    var _temp = []
    // if(filterOption === 'TimeDiff'){
    //   data.map(item=>
    //     item['Battery_Value']<value?
    //       _temp.push(item):
    //       ''
    //   )
    // }
    if(value!=="0"){
      data.map(item=>
        item[`${filterOption}`].includes(value)?
          _temp.push(item):
          ''
      )
    }else{
        _temp=data 
    }
    if(filterOption==='Division'){
        this.setState({district:this.getDistrict(_temp)})
        // this.setState({thana:this.getThana(_temp)})
    }else if(filterOption==='District'){
        // this.setState({thana:this.getThana(_temp)})
    }
  }

  render() {
    return (
      <DataContext.Provider value={this.state}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataProvider;
