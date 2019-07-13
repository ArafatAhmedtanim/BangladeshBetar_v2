import React from 'react'
import Axios from 'axios'
import Api from './../../../dataProvider/api.json'

class MyForm extends React.Component {
    
    constructor(props){
        super(props)

        this.state={
            name : '',
            type_name : '',
            specification : '',
            model : '',
            sr_no : '',
            symbol_no : '',
            manufacturer : '',
            date_installation : '',
            threshold : '',
            remarks : '',
            attachment : '',
            ip : ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target)
        const data = new FormData(e.target);
        const user = JSON.parse(localStorage.getItem('user'));
    
        Axios
        .post(Api.HOST+Api.ADDPRODUCT, {
            name : this.state.name,
            type_name : this.state.type_name,
            specification : this.state.specification,
            model : this.state.model,
            sr_no : this.state.sr_no,
            symbol_no : this.state.symbol_no,
            date_installation : this.state.date_installation,
            threshold : this.state.threshold,
            remarks : this.state.remarks,
            attachment : this.state.attachment,
            ip : this.state.ip
        },{
            headers: { Authorization: 'bearer ' + user.user.token },
            
        })
        .then(res => {
            console.log(res)
            this.props.update('products', res.data)
            this.props.handleModalCancel()
        })
        .catch(error => {});
          
    };

    handleNameChange = e => this.setState({name: e.target.value})
    handleTypeNameChange = e => this.setState({type_name: e.target.value})
    handleSpecificationChange = e => this.setState({specification: e.target.value})
    handleModelChange = e => this.setState({model: e.target.value})
    handleSRNoChange = e => this.setState({sr_no: e.target.value})
    handleSymbolNoChange = e => this.setState({symbol_no: e.target.value})
    handleDateInstallationChange = e => this.setState({date_installation: e.target.value})
    handleThresholdChange = e => this.setState({threshold: e.target.value})
    handleRemarksChange = e => this.setState({remarks: e.target.value})
    handleAttachmentChange = e => this.setState({attachment: e.target.value})
    handleIPChange = e => this.setState({ip: e.target.value})
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Name"
                        type="text"
                        onChange={this.handleNameChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Type Name"
                        type="text"
                        onChange={this.handleTypeNameChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Specification"
                        type="text"
                        onChange={this.handleSpecificationChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Model"
                        type="text"
                        onChange={this.handleModelChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="SR No."
                        type="text"
                        onChange={this.handleSRNoChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Symbol No."
                        type="text"
                        onChange={this.handleSymbolNoChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Date of Installation"
                        type="text"
                        onChange={this.handleDateInstallationChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Threshold"
                        type="text"
                        onChange={this.handleThresholdChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Remarks"
                        type="text"
                        onChange={this.handleRemarksChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Attachment"
                        type="text"
                        onChange={this.handleAttachmentChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="IP"
                        type="text"
                        onChange={this.handleIPChange}
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