import React from 'react';
// import './style/style.css';
import DataTable from './component/dataTable'
import './style/manufacturer.css'
import { Button } from 'antd';
import MyModal from './../../component/MyModal';
import MyForms from './component/myForm';
export default class Manufacturer extends React.Component{

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
            <MyModal modalName="Manufacturer Creation" modalButton="Create Manufacturer"
                visibility={this.state.myModalVisibility} 
                createUser={this.showModal} 
                handleCancel={this.handleCancel}
                form={<MyForms onSubmit={this.handleSubmit}  />}  
                />
            <DataTable />
        </div>
    )
  }
}
