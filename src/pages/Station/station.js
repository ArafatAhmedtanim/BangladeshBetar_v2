import React from 'react';
import DataTable from './component/dataTable';
import MyModal from './../../component/MyModal.js';
import MyForms from './component/MyForm';
import './style/station.css';


export default class Station extends React.Component{
  
  constructor(props){
    super(props)

    this.state = {
        myModalVisibility: false
    }
  }

  showModal = () => {
    this.setState({
        myModalVisibility: true,
    });
  }

  handleSubmit = (e) =>{
    e.preventDefault();
      console.log(e);
      console.log(e.target.value);
      this.setState({myModalVisibility:false})
  }

  handleCancel = (e) => {
      console.log(e);
      this.setState({
          myModalVisibility: false,
      });
  }
  
  render(){
    
    return(
        <div className="main-container">
            <MyModal 
              modalName="Station Creation" modalButton="Create Station"
              visibility={this.state.myModalVisibility} 
              createUser={this.showModal} 
              handleCancel={this.handleCancel}
              form={<MyForms onSubmit={this.handleSubmit}/>}
            />
            <DataTable />
        </div>
    )
  }
}
