import React from 'react'
import Axios from 'axios'
import Api from './../../../dataProvider/api.json'
import {Select, DatePicker, Input } from 'antd'
import moment from 'moment';
 
const {Option } = Select;
const dateFormat = 'YYYY/MM/DD';
const { TextArea } = Input;

class MyForm extends React.Component {
    
    constructor(props){
        super(props)

        this.state={
            name : this.props.name,
            type_name : this.props.type_name,
            specification : this.props.specification,
            model : this.props.model,
            sr_no : this.props.sr_no,
            symbol_no : this.props.symbol_no,
            manufacturer : this.props.manufacturer,
            date_installation : this.props.date_installation,
            threshold : this.props.threshold,
            remarks : this.props.remarks,
            attachment : this.props.attachment,
            ip : this.props.ip
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target)
        const data = new FormData(e.target);
        const user = JSON.parse(localStorage.getItem('user'));
    
        Axios
        .put(Api.HOST+Api.ALLPRODUCT+this.props.data.id, {
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
    handleDateInstallationChange = (date, dateString) => {
        this.setState({date_installation: dateString})
    }
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
                    defaultValue={this.props.data.name}
                    onChange={this.handleNameChange}
                />
            </div>
            <div className="form-group">
                <Select
                    className="form-control"
                    placeholder="Select Product"
                    onChange={this.handleTypeNameChange}
                    defaultValue={this.props.data.type_name}
                >
                    <Option value="Instrument">Instrument</Option>
                    <Option value="Parts">Parts</Option>
                </Select>
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    placeholder="Specification"
                    type="text"
                    defaultValue={this.props.data.specification}
                    onChange={this.handleSpecificationChange}
                />
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    placeholder="Model"
                    type="text"
                    defaultValue={this.props.data.model}
                    onChange={this.handleModelChange}
                />
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    placeholder="SR No."
                    type="text"
                    defaultValue={this.props.data.sr_no}
                    onChange={this.handleSRNoChange}
                />
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    placeholder="Symbol No."
                    type="text"
                    defaultValue={this.props.data.symbol_no}
                    onChange={this.handleSymbolNoChange}
                />
            </div>
            <div className="form-group">
                <DatePicker 
                    defaultValue={moment(this.props.data.date_installation, dateFormat)}
                    onChange={this.handleDateInstallationChange}
                />
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    placeholder="Threshold"
                    type="text"
                    defaultValue={this.props.data.threshold}
                    onChange={this.handleThresholdChange}
                />
            </div>
            <div className="form-group">
                 <TextArea 
                        className="form-control"
                        placeholder="Remarks"
                        type="text"
                        defaultValue={this.props.data.remarks}
                        onChange={this.handleRemarksChange}
                        rows={4} 
                    />
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    placeholder="Attachment"
                    type="text"
                    defaultValue={this.props.data.attachment}
                    onChange={this.handleAttachmentChange}
                />
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    placeholder="IP"
                    type="text"
                    defaultValue={this.props.data.ip}
                    onChange={this.handleIPChange}
                />
            </div>
            
            <button  
                type="submit" 
                className="btn btn-primary"
            >
                Update
            </button>
        </form>
        );
    }
}

export default MyForm;