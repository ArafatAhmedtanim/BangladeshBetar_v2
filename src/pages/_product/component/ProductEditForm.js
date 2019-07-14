import React from 'react'
import Axios from 'axios'
import Api from './../../../dataProvider/api.json'
import { Form, Input, Button, Select, DatePicker } from 'antd';
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


    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            
            if (!err) {
                const user = JSON.parse(localStorage.getItem('user'));
    
                Axios
                .put(Api.HOST+Api.ALLPRODUCT+this.props.data.id, {
                    name : values.name,
                    type_name : values.type_name,
                    specification : values.specification,
                    model : values.model,
                    sr_no : values.sr_no,
                    symbol_no : values.symbol_no,
                    date_installation : values.date_installation,
                    threshold : values.threshold,
                    remarks : values.remarks,
                    attachment : values.attachment,
                    ip : values.ip
                },{
                    headers: { Authorization: 'bearer ' + user.user.token },
                })
                .then(res => {
                    console.log(res)
                    this.props.update('products', res.data)
                    this.props.handleModalCancel()
                })
                .catch(error => {});
            }
        });
    };
    
    render() {
        const { getFieldDecorator } = this.props.form;
        return (

        <Form onSubmit={this.handleSubmit}>
            <Form.Item>{
                getFieldDecorator('name', {
                    initialValue: this.props.data.name, 
                    rules: [
                        {
                            required: true,
                            message: 'Please input product name!',
                        },
                    ],
                })(<Input placeholder="Product Name"/>)}
            </Form.Item>

            <Form.Item>{
                getFieldDecorator('type_name', {
                    initialValue: this.props.data.type_name, 
                    rules: [
                        {
                            required: true,
                            message: 'Please input product type!',
                        },
                    ],
                })(<Input placeholder="Product Type"/>)}
            </Form.Item>
            
            <Form.Item>{
                getFieldDecorator('specification', {
                    initialValue: this.props.data.specification, 
                    rules: [
                        {
                            required: true,
                            message: 'Please input product specification!',
                        },
                    ],
                })(<Input placeholder="Product Specification"/>)}
            </Form.Item>

            <Form.Item>{
                getFieldDecorator('model', {
                    initialValue: this.props.data.model, 
                    rules: [
                        {
                            required: true,
                            message: 'Please input product model!',
                        },
                    ],
                })(<Input placeholder="Product Model"/>)}
            </Form.Item>

            <Form.Item>{
                getFieldDecorator('sr_no', {
                    initialValue: this.props.data.sr_no, 
                    rules: [
                        {
                            required: true,
                            message: 'Please input product sr no!',
                        },
                    ],
                })(<Input placeholder="Product Sr No"/>)}
            </Form.Item>

            <Form.Item>{
                getFieldDecorator('symbol_no', {
                    initialValue: this.props.data.symbol_no, 
                    rules: [
                        {
                            required: true,
                            message: 'Please input product symbol no!',
                        },
                    ],
                })(<Input placeholder="Product Symbol No"/>)}
            </Form.Item>

            <Form.Item>{
                getFieldDecorator('date_installation', {
                    initialValue: moment(this.props.data.date_installation, dateFormat), 
                    rules: [
                        {
                            required: true,
                            message: 'Please input product date of installation!',
                        },
                    ],
                })(<DatePicker placeholder="Product Installation Date"/>)}
            </Form.Item>

            <Form.Item>{
                getFieldDecorator('threshold', {
                    initialValue: this.props.data.threshold, 
                    rules: [
                        {
                            required: true,
                            message: 'Please input product threshold!',
                        },
                    ],
                })(<Input placeholder="Product Threshold"/>)}
            </Form.Item>

            <Form.Item>{
                getFieldDecorator('remarks', {
                    initialValue: this.props.data.remarks,
                    rules: [
                        {
                            required: true,
                            message: 'Please input product remarks!',
                        },
                    ],
                })(<Input placeholder="Product Remarks"/>)}
            </Form.Item>

            <Form.Item>
                {getFieldDecorator('ip', {
                    initialValue: this.props.data.ip,
                    rules: [{ 
                         required: true, 
                         message: 'Please select product behavior' },
                    ],
                })(
                    <Select placeholder="Product Behavior">
                        <Select.Option value="1">Parts</Select.Option>
                        <Select.Option value="2">Instrument</Select.Option>
                    </Select>
                )}
            </Form.Item>
            
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Submit
              </Button>
            </Form.Item>
          </Form>
        );
    }
}
const WrappedMyForm = Form.create({ name: 'my_form' })(MyForm);
export default WrappedMyForm;