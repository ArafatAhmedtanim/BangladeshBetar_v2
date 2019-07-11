import React from 'react'
import Axios from 'axios'
import Api from './../../../dataProvider/api.json'

class MyForm extends React.Component {
    
    constructor(props){
        super(props)

        this.state={
            station_id: this.props.data.station_id,
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target)
        const data = new FormData(e.target);
        const user = JSON.parse(localStorage.getItem('user'));
    
        Axios
        .put(Api.HOST+Api.ALLSTATION+this.props.data.id, {
            station_id: this.state.station_id,
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
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Station"
                        type="text"
                        defaultValue={this.props.data.station_id}
                        onChange={this.handleStationChange}
                    />
                </div> */}
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Product Name"
                        type="text"
                        onChange={this.handleStationChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Product Type"
                        type="text"
                        onChange={this.handleStationChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Specification"
                        type="text"
                        onChange={this.handleStationChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Threshold Value"
                        type="text"
                        onChange={this.handleStationChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Model"
                        type="text"
                        onChange={this.handleStationChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="SR No."
                        type="text"
                        onChange={this.handleStationChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Symbol No."
                        type="text"
                        onChange={this.handleStationChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Manufacturer"
                        type="text"
                        onChange={this.handleStationChange}
                    />
                </div>
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
                        placeholder="Date Of Installation"
                        type="text"
                        onChange={this.handleStationChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Remarks"
                        type="text"
                        onChange={this.handleStationChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Attachment"
                        type="text"
                        onChange={this.handleStationChange}
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