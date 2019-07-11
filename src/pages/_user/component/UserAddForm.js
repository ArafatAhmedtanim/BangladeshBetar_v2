import React from 'react'
import Axios from 'axios'
import Api from './../../../dataProvider/api.json'

class MyForm extends React.Component {
    
    constructor(props){
        super(props)

        this.state={
            email: '',
            username: '',
            designation: '',
            role: '',
            mobile: '',
            station_id: '',
            signature: '',
            status: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target)
        const data = new FormData(e.target);
        const user = JSON.parse(localStorage.getItem('user'));
    
        Axios
        .post(Api.HOST+Api.ADDUSER, {
            email: this.state.email,
            username: this.state.username,
            designation: this.state.designation,
            role: this.state.role,
            mobile: this.state.mobile,
            station_id: this.state.station_id,
            signature: this.state.signature,
            status: this.state.status,
            password: '123456'

        },{
            headers: { Authorization: 'bearer ' + user.user.token },
            
        })
        .then(res => {
            console.log(res)
            this.props.update('users', res.data)
            this.props.handleModalCancel()
        })
        .catch(error => {});
          
    };

    handleEmailChange = e => {
        console.log(this.state.email)
        this.setState({email: e.target.value})
    }
    handleDesignationChange = e => {
        console.log(this.state.designation)
        this.setState({designation: e.target.value})
    }
    handleRoleChange = e => {
        console.log(this.state.role)
        this.setState({role: e.target.value})
    }
    handleMobileChange = e => {
        console.log(this.state.mobile)
        this.setState({mobile: e.target.value})
    }
    handleStationChange = e => {
        console.log(this.state.station_id)
        this.setState({station_id: e.target.value})
    }
    handleUserNameChange = e => {
        console.log(this.state.username)
        this.setState({username: e.target.value})
    }
    handleSignatureChange = e => {
        console.log(this.state.signature)
        this.setState({signature: e.target.value})
    }

    handleStatusChange = e => {
        console.log(this.state.status)
        this.setState({status: e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Email Address"
                        type="email"
                        onChange={this.handleEmailChange}
                    />
                </div>
                <div className="form-group">  
                    <input 
                        className="form-control"
                        placeholder="User Name"
                        type="text"
                        onChange={this.handleUserNameChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                        className="form-control"
                        placeholder="Designation"
                        type="text"
                        onChange={this.handleDesignationChange}    
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control" 
                        placeholder="Role" 
                        type="text" 
                        onChange={this.handleRoleChange}   
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control" 
                        placeholder="Mobile" 
                        type="text"
                        onChange={this.handleMobileChange}
                    />
                </div>
                <div className="form-group">
                    {/* <input
                        className="form-control" 
                        placeholder="Station" 
                        type="text"
                        onChange={this.handleStationChange}    
                    /> */}

                    <select
                        className="custom-select mr-sm-2" 
                        id="inlineFormCustomSelect"
                        onChange={this.handleStationChange} 
                    >
                        <option selected>Choose...</option>
                        {this.props.stations.map(station=><option value={station._id}>{station.station_id}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <input
                        className="form-control" 
                        placeholder="Signature"
                        type="text"
                        onChange={this.handleSignatureChange}    
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control" 
                        placeholder="Status"
                        type="text"
                        onChange={this.handleStatusChange}    
                    />
                </div>
                <button  
                    type="submit" 
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        );
    }
}

export default MyForm;