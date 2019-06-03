import React from 'react';

export const DataContext = React.createContext();
export const DataConsumer = DataContext.Consumer;

class DataProvider extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      users:[],
      stations:[],
      update: this.update.bind(this)
    };
  }

  componentDidMount(){}

  update(key, value) {
    console.log(key, value);
    this.setState({ [key]: value });
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
