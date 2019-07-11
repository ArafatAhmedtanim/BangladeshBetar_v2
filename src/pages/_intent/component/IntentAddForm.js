import React from 'react'
import Axios from 'axios'
import Api from './../../../dataProvider/api.json'

class MyForm extends React.Component {
    
    constructor(props){
        super(props)

        this.state={
            station_id: '',
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
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Intent Type"
                        type="text"
                        onChange={this.handleStationChange}
                    />
                </div>
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
                        placeholder="Consumption of Last 2 Years"
                        type="text"
                        onChange={this.handleStationChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Requirements of Next 2 Years"
                        type="text"
                        onChange={this.handleStationChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Parts Postion"
                        type="text"
                        onChange={this.handleStationChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Product No."
                        type="text"
                        onChange={this.handleStationChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Quantity in Use"
                        type="text"
                        onChange={this.handleStationChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Special Report No."
                        type="text"
                        onChange={this.handleStationChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Intent Year"
                        type="text"
                        onChange={this.handleStationChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Reamrks"
                        type="text"
                        onChange={this.handleStationChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Status"
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