import React from 'react'
import Axios from 'axios'
import Api from './../../../dataProvider/api.json'

class MyForm extends React.Component {
    
    constructor(props){
        super(props)

        this.state={
            station_id: '',
            address:''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target)
        const data = new FormData(e.target);
        const user = JSON.parse(localStorage.getItem('user'));
    
        Axios
        .post(Api.HOST+Api.ADDSTATION, {
            station_id: this.state.station_id,
            address: this.state.address

        },{
            headers: { Authorization: 'bearer ' + user.user.token },
            
        })
        .then(res => {
            console.log(res)
            this.props.update('stations', res.data)
            this.props.handleModalCancel()
        })
        .catch(error => {});
          
    };

    handleStationChange = e => {
        console.log(this.state.station_id)
        this.setState({station_id: e.target.value})
    }
    handleStationAddressAdd = e => {
        console.log(this.state.address)
        console.log(e.target.value)
        // this.setState({address: e.target.value})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Station"
                        type="text"
                        onChange={this.handleStationChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Address"
                        type="text"
                        onChange={this.handleStationAddressAdd}
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