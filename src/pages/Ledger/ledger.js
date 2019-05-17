import React from 'react';
// import './style/style.css';

import DataTable from './component/dataTable'
import './style/sib.css'
import { Form } from 'antd';
import MyModal from './../../component/MyModal';
import MyForms from './component/myForm';

export default class Ledger extends React.Component{

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
      console.log(this.props.form);
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
            {/* <MyModal modalName="Ledger Creation" modalButton="Create Ledger"
                visibility={this.state.myModalVisibility} 
                createUser={this.showModal} 
                handleCancel={this.handleCancel}
                form={<MyForms onSubmit={this.handleSubmit}  />}  
                /> */}
            <DataTable />
        </div>
    )
  }
}
