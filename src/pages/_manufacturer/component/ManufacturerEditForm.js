import React from 'react'
import Axios from 'axios'
import Api from './../../../dataProvider/api.json'

class MyForm extends React.Component {
    
    constructor(props){
        super(props)

        this.state={
            name: this.props.data.name,
            address: this.props.data.address,
            country: this.props.data.country
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target)
        const data = new FormData(e.target);
        const user = JSON.parse(localStorage.getItem('user'));
    
        Axios
        .put(Api.HOST+Api.ALLMANUFACTURER+this.props.data.id, {
            name: this.state.name,
            address: this.state.address,
            country: this.state.country
        },{
            headers: { Authorization: 'bearer ' + user.user.token },
        })
        .then(res => {
            console.log(res)
            this.props.update('manufacturers', res.data)
            this.props.handleModalCancel()
        })
        .catch(error => {});
    };

    handleManufacturerChange = e => this.setState({name: e.target.value})
    handleAddressChange = e => this.setState({address: e.target.value})
    handleCountryChange = e => this.setState({country: e.target.value})
    
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Manufacturer"
                        type="text"
                        defaultValue={this.props.data.name}
                        onChange={this.handleManufacturerChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Address"
                        type="text"
                        defaultValue={this.props.data.address}
                        onChange={this.handleAddressChange}
                    />
                </div><div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Country"
                        type="text"
                        defaultValue={this.props.data.country}
                        onChange={this.handleCountryChange}
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