import React from 'react'
import StationTable from '../../../component/table';
import ProductEditForm from './ProductEditForm';
import ProductAddForm from './ProductAddForm';
import ProductModal from './ProductModal';
import Axios from 'axios';
import Api from  './../../../dataProvider/api.json';

export default class UserTableWithAction extends React.Component{
    constructor(props){
        super(props)
    
        this.state={
          products : [],
          editingRow: '',
          stationAddModalVisibility: false,
          stationEditModalVisibility: false,
        }
      }
      componentDidMount(){
        const user = JSON.parse(localStorage.getItem('user'));
    
        Axios
        .get(Api.HOST+Api.ALLPRODUCT, {
          headers: { Authorization: 'bearer ' + user.user.token }
        })
        .then(res => {
          console.log(res.data)
          this.setState({stations: res.data})
          this.props.update('products', res.data)
        })
        .catch(error => {});
      }
      
      edit = (record) => {
        console.log(record)
        this.setState({ 
          editingRow: record ,
          stationEditModalVisibility: true
        })
      };

      delete = (record) =>{
        const user = JSON.parse(localStorage.getItem('user'));

        Axios
        .delete(Api.HOST+Api.ALLPRODUCT+record.id, 
          {headers: { Authorization: 'bearer ' + user.user.token },    
        })
        .then(res => {
            console.log(res)
            this.props.update('products', res.data)
        })
        .catch(error => {});
          
      }
    
      handleStationEditModalCancel = () =>{
        this.setState({
          stationEditModalVisibility: false,
        });
      }

      handleStationAddModalCancel = () =>{
        this.setState({
          stationAddModalVisibility: false,
        });
      }
    
      AllStationTableCols = [
        {
            title: "Name",
            dataIndex: "name",
            className: "name",
            key: "0",
        },{
          title: "Type Name",
          dataIndex: "type_name",
          className: "type_name",
          key: "1",
        },{
          title: "Specification",
          dataIndex: "spacification",
          className: "spacification",
          key: "2",
        },{
          title: "Model",
          dataIndex: "model",
          className: "model",
          key: "3",
        },{
          title: "SR No",
          dataIndex: "sr_no",
          className: "sr_no",
          key: "4",
        },{
          title: "Symbol No",
          dataIndex: "symbol_no",
          className: "symbol_no",
          key: "5",
        },{
          title: "Date of Installation",
          dataIndex: "date_installation",
          className: "date_installation",
          key: "6",
        },{
          title: "Threshold",
          dataIndex: "threshold",
          className: "threshold",
          key: "7",
        },{
          title: "Remarks",
          dataIndex: "remarks",
          className: "remarks",
          key: "8",
        },
        {
          title: "Attachments",
          dataIndex: "attachments",
          className: "attachments",
          key: "9",
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
                    onClick = { () => this.setState({stationAddModalVisibility: true}) }
                >
                    Add New Product
                </button>
            </div>
            <br/>

            <ProductModal 
              visibility={this.state.stationAddModalVisibility}  
              form = {
                <ProductAddForm 
                  handleModalCancel={this.handleStationAddModalCancel}
                  update={this.props.update}
                />
              }
              handleModalCancel={this.handleStationAddModalCancel}
              modalTitle="User Update Form"
            />

            <StationTable 
              columns={this.AllStationTableCols} 
              data={this.props.products} 
            />
  
            <ProductModal 
              visibility={this.state.stationEditModalVisibility}  
              form = {
                <ProductEditForm 
                  data={this.state.editingRow}
                  handleModalCancel={this.handleStationEditModalCancel}
                  update={this.props.update}
                />
              }
              handleModalCancel={this.handleStationEditModalCancel}
              modalTitle="User Update Form"
            />
          </React.Fragment>
        )
    }
}