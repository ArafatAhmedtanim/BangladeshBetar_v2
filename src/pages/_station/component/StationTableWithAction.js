import React from 'react'
import StationTable from '../../../component/table';
import StationEditForm from './StationEditForm';
import StationAddForm from './StationAddForm';
import StationModal from './StationModal';
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
            title: "Station",
            dataIndex: "station_id",
            className: "station",
            key: "0",
        },
        {
          title: "Address",
          dataIndex: "address",
          className: "station",
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
                    Add New Station
                </button>
            </div>
            <br/>

            <StationModal 
              visibility={this.state.stationAddModalVisibility}  
              form = {
                <StationAddForm 
                  handleModalCancel={this.handleStationAddModalCancel}
                  update={this.props.update}
                />
              }
              handleModalCancel={this.handleStationAddModalCancel}
              modalTitle="User Add Form"
            />

            <StationTable 
              columns={this.AllStationTableCols} 
              data={this.props.stations} 
            />
  
            <StationModal 
              visibility={this.state.stationEditModalVisibility}  
              form = {
                <StationEditForm 
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