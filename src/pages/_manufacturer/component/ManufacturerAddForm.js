import React from 'react'
import Axios from 'axios'
import Api from './../../../dataProvider/api.json'

class MyForm extends React.Component {
    
    constructor(props){
        super(props)

        this.state={
            name: '',
            address:'',
            country: '',
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target)
        const data = new FormData(e.target);
        const user = JSON.parse(localStorage.getItem('user'));
    
        Axios
        .post(Api.HOST+Api.ADDMANUFACTURER, {
            name: this.state.name,
            address: this.state.address,
            country: this.state.country
        },{
            headers: { Authorization: 'bearer ' + user.user.token },
        })
        .then(res => {
            this.props.update('manufacturers', res.data)
            this.props.handleModalCancel()
        })
        .catch(error => {});
          
    };

    handleManufacturerChange = e => {
        this.setState({name: e.target.value})
    }

    handleManufacturerAddressAdd = e => {
        this.setState({address: e.target.value})
    }

    handleManufacturerCountryAdd = e => {
        this.setState({country: e.target.value})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Manufacturer"
                        type="text"
                        onChange={this.handleManufacturerChange}
                    />
                </div>
              <div className="form-group">
                <input
                        className="form-control"
                        placeholder="Address"
                        type="text"
                        onChange={this.handleManufacturerAddressAdd}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Country"
                        type="text"
                        onChange={this.handleManufacturerCountryAdd}
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