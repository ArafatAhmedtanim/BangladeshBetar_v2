import React from 'react'
import ManufacturerTable from '../../../component/table';
import ManufacturerEditForm from './ManufacturerEditForm';
import ManufacturerAddForm from './ManufacturerAddForm';
import ManufacturerModal from './ManufacturerModal';
import Axios from 'axios';
import Api from  './../../../dataProvider/api.json';

export default class UserTableWithAction extends React.Component{
    constructor(props){
        super(props)
    
        this.state={
          manufacturer : [],
          editingRow: '',
          manufacturerAddModalVisibility: false,
          manufacturerEditModalVisibility: false,
        }
      }
      componentDidMount(){
        const user = JSON.parse(localStorage.getItem('user'));
    
        Axios
        .get(Api.HOST+Api.ALLMANUFACTURER, {
          headers: { Authorization: 'bearer ' + user.user.token }
        })
        .then(res => {
          console.log(res.data)
          this.setState({manufacturer: res.data})
          this.props.update('manufacturers', res.data)
        })
        .catch(error => {});
      }
      
      edit = (record) => {
        console.log(record)
        this.setState({ 
          editingRow: record ,
          manufacturerEditModalVisibility: true
        })
      };

      delete = (record) =>{
        const user = JSON.parse(localStorage.getItem('user'));

        Axios
        .delete(Api.HOST+Api.ALLMANUFACTURER+record.id, 
          {headers: { Authorization: 'bearer ' + user.user.token },    
        })
        .then(res => {
            console.log(res)
            this.props.update('manufacturers', res.data)
        })
        .catch(error => {});
          
      }
    
      handleStationEditModalCancel = () =>{
        this.setState({
          manufacturerEditModalVisibility: false,
        });
      }

      handleStationAddModalCancel = () =>{
        this.setState({
          manufacturerAddModalVisibility: false,
        });
      }
    
      AllManufacturerTableCols = [
        {
            title: "Manufacturer",
            dataIndex: "name",
            className: "name",
            key: "0",
        },{
          title: "Address",
          dataIndex: "address",
          className: "address",
          key: "1",
      },{
        title: "Country",
        dataIndex: "country",
        className: "country",
        key: "0",
    },{
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (record) =>
            <div class="btn-group btn-group-toggle">
              <button class="btn btn-warning">
                <a onClick={() => this.edit(record)}>
                  Edit
                </a>
              </button>
              <button class="btn btn-danger">
                <a onClick={() => this.delete(record)}>
                  Delete
                </a>
              </button>
            </div>,
        }
    ];

    render(){
        return(
          <React.Fragment>
            <div>
                <button 
                    type="button" 
                    className="btn btn-success"
                    onClick = { () => this.setState({manufacturerAddModalVisibility: true}) }
                >
                    Add New Manufacturer
                </button>
            </div>
            <br/>

            <ManufacturerModal 
              visibility={this.state.manufacturerAddModalVisibility}  
              form = {
                <ManufacturerAddForm 
                  handleModalCancel={this.handleStationAddModalCancel}
                  update={this.props.update}
                />
              }
              handleModalCancel={this.handleStationAddModalCancel}
              modalTitle="Manufacturer Add Form"
            />

            <ManufacturerTable 
              columns={this.AllManufacturerTableCols} 
              data={this.props.manufacturer} 
            />
  
            <ManufacturerModal 
              visibility={this.state.manufacturerEditModalVisibility}  
              form = {
                <ManufacturerEditForm 
                  data={this.state.editingRow}
                  handleModalCancel={this.handleStationEditModalCancel}
                  update={this.props.update}
                />
              }
              handleModalCancel={this.handleStationEditModalCancel}
              modalTitle="Manufacturer Update Form"
            />
          </React.Fragment>
        )
    }
}