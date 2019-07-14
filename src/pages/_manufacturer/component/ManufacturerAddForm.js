import React from 'react'
import Axios from 'axios'
import Api from './../../../dataProvider/api.json'
import { Form, Input, Button, Select } from 'antd';

class MyForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const user = JSON.parse(localStorage.getItem('user'));
    
                Axios
                .post(Api.HOST+Api.ADDMANUFACTURER, {
                    name: values.name,
                    address: values.address,
                    country: values.country
                },{
                    headers: { Authorization: 'bearer ' + user.user.token },
                })
                .then(res => {
                    this.props.update('manufacturers', res.data)
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
                            message: 'Please input manufacturer name!',
                        },
                    ],
                })(<Input placeholder="Manufacturer Name"/>)}
            </Form.Item>

            <Form.Item>
                {getFieldDecorator('country', {
                    rules: [{ 
                         required: true, 
                         message: 'Please select manufacturer country!' },
                    ],
                })(
                    <Select placeholder="Manufacturer Country">
                        <Select.Option value="Bangladesh">Bangladesh</Select.Option>
                        <Select.Option value="India">India </Select.Option>
                        <Select.Option value="Pakistan">Pakistan</Select.Option>
                        <Select.Option value="Itally">Itally</Select.Option>
                        <Select.Option value="Germany">Germany</Select.Option>
                        <Select.Option value="USA">USA</Select.Option>
                        <Select.Option value="Switzerland">Switzerland</Select.Option>
                    </Select>
                )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('address', {
                rules: [{ required: true, message: 'Please input manufacturer address!' }],
              })(
                <Input
                  placeholder="Manufacturer Address"
                />,
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