import React from 'react';
// import './style/style.css';
import DataTable from './component/dataTable'
import './style/Indent.css'
import { Form } from 'antd';
import MyModal from './../../component/MyModal';
import MyForms from './component/MyForm';

export default class Indent extends React.Component{

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
            <MyModal modalName="Indent Creation" modalButton="Create Indent"
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
