import React from 'react'
import Axios from 'axios'
import Api from './../../../dataProvider/api.json'
import { Form, Input, Button, Select, DatePicker } from 'antd';

class MyForm extends React.Component {
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            
            if (!err) {
                const user = JSON.parse(localStorage.getItem('user'));
    
                Axios
                .post(Api.HOST+Api.ADDPRODUCT, {
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
                    rules: [
                        {
                            required: true,
                            message: 'Please input product remarks!',
                        },
                    ],
                })(<Input placeholder="Product Remarks"/>)}
            </Form.Item>

            <Form.Item>{
                getFieldDecorator('attachment', {
                    rules: [
                        {
                            required: true,
                            message: 'Please input product attachment!',
                        },
                    ],
                })(<Input placeholder="Product Attachment"/>)}
            </Form.Item>

            <Form.Item>
                {getFieldDecorator('ip', {
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