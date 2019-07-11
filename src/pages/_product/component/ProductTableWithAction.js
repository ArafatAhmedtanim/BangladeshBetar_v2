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
          stations : [],
          editingRow: '',
          stationAddModalVisibility: false,
          stationEditModalVisibility: false,
        }
      }
      componentDidMount(){
        const user = JSON.parse(localStorage.getItem('user'));
    
        Axios
        .get(Api.HOST+Api.ALLSTATION, {
          headers: { Authorization: 'bearer ' + user.user.token }
        })
        .then(res => {
          console.log(res.data)
          this.setState({stations: res.data})
          this.props.update('stations', res.data)
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
        .delete(Api.HOST+Api.ALLSTATION+record.id, 
          {headers: { Authorization: 'bearer ' + user.user.token },    
        })
        .then(res => {
            console.log(res)
            this.props.update('stations', res.data)
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
            dataIndex: "station_id",
            className: "station",
            key: "0",
        },{
          title: "Product Type",
          dataIndex: "station_id",
          className: "station",
          key: "0",
        },{
          title: "Specification",
          dataIndex: "station_id",
          className: "station",
          key: "0",
        },{
          title: "Threshold",
          dataIndex: "station_id",
          className: "station",
          key: "0",
        },{
          title: "Model",
          dataIndex: "station_id",
          className: "station",
          key: "0",
        },{
          title: "SR No.",
          dataIndex: "station_id",
          className: "station",
          key: "0",
        },{
          title: "Symbol_no",
          dataIndex: "symbol_no",
          className: "symbol_no",
          key: "0",
        },{
          title: "Manufacturer",
          dataIndex: "manufacturer",
          className: "manufacturer",
          key: "0",
        },{
          title: "Date of Installation",
          dataIndex: "date_of_installation",
          className: "date_of_installation",
          key: "0",
        },{
          title: "Remarks",
          dataIndex: "remarks",
          className: "remarks",
          key: "0",
        },
        {
          title: "Attachments",
          dataIndex: "attachments",
          className: "attachments",
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
              data={this.props.stations} 
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