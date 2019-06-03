import React from 'react'
import UserTable from './../../../component/table';
import UserEditForm from './UserEditForm';
import UserAddForm from './UserAddForm';
import UserModal from './UserModal';
import Axios from 'axios';
import Api from  './../../../dataProvider/api.json';

export default class UserTableWithAction extends React.Component{
    constructor(props){
        super(props)
    
        this.state={
          users : [],
          stations:[],
          editingRow: '',
          userAddModalVisibility: false,
          userEditModalVisibility: false,
        }
      }
      componentDidMount(){
        const user = JSON.parse(localStorage.getItem('user'));
    
        Axios
        .get(Api.HOST+Api.ALLUSER, {
          headers: { Authorization: 'bearer ' + user.user.token }
        })
        .then(res => {
          console.log(res.data)
          this.setState({users: res.data})
          this.props.update('users', res.data)
        })
        .catch(error => {});

        Axios
        .get(Api.HOST+Api.ALLSTATION, {
          headers: { Authorization: 'bearer ' + user.user.token }
        })
        .then(res => {
          console.log(res.data)
          this.setState({stations: res.data})
          this.props.update('stations', res.data)
          console.log(res.data)
        })
        .catch(error => {});
      }
      
      edit = (record) => {
        console.log(record)
        this.setState({ 
          editingRow: record ,
          userEditModalVisibility: true
        })
      };

      delete = (record) =>{
        const user = JSON.parse(localStorage.getItem('user'));

        Axios
        .delete(Api.HOST+Api.ALLUSER+record.id, 
          {headers: { Authorization: 'bearer ' + user.user.token },    
        })
        .then(res => {
            console.log(res)
            this.props.update('users', res.data)
        })
        .catch(error => {});
          
      }
    
      handleUserEditModalCancel = () =>{
        this.setState({
          userEditModalVisibility: false,
        });
      }

      handleUserAddModalCancel = () =>{
        this.setState({
          userAddModalVisibility: false,
        });
      }
    
      AllUserTableCols = [
        {
            title: "Email Address",
            dataIndex: "email",
            className: "email",
            key: "0",
            fixed: 'left',
            width: 200,
        },
        {
          title: "Name",
          dataIndex: "username",
          className: "username",
          key: "1"
        },
        {
          title: "Designation",
          dataIndex: "designation",
          className: "designation",
          key: "2"
        },
        {
          title: "Role",
          dataIndex: "role",
          className: "role",
          key: "3"
        },
        {
          title: "Mobile No.",
          dataIndex: "mobile",
          className: "mobile",
          key: "4"
        },
        {
            title: "Signature",
            dataIndex: "signature",
            className: "signature",
            key: "6"
        },
        {
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
                    onClick = { () => this.setState({userAddModalVisibility: true}) }
                >
                    Add New User
                </button>
            </div>
            <br/>

            <UserModal 
              visibility={this.state.userAddModalVisibility}  
              form = {
                <UserAddForm 
                  handleModalCancel={this.handleUserAddModalCancel}
                  stations={this.state.stations}
                  update={this.props.update}
                />
              }
              handleModalCancel={this.handleUserAddModalCancel}
              modalTitle="User Update Form"
            />

            {this.props.stations.map(station=>{
              var _data=this.props.users.filter(x => x.station_id === station._id)
              return(
                _data.length>0?
                <div>
                  <h6>{station.station_id}</h6>
                  <UserTable 
                    columns={this.AllUserTableCols} 
                    data={this.props.users.filter(x => x.station_id === station._id )} 
                  />
                  </div>:''
              )
            }
            )}
            
  
            <UserModal 
              visibility={this.state.userEditModalVisibility}  
              form = {
                <UserEditForm 
                  data={this.state.editingRow}
                  handleModalCancel={this.handleUserEditModalCancel}
                  stations={this.state.stations}
                  update={this.props.update}
                />
              }
              handleModalCancel={this.handleUserEditModalCancel}
              modalTitle="User Update Form"
            />
          </React.Fragment>
        )
    }
}