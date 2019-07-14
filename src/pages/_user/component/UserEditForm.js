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
                .put(Api.HOST+Api.ALLUSER+this.props.data.id, {
                    email: values.email,
                    username: values.username,
                    designation: values.designation,
                    role: values.role,
                    mobile: values.mobile,
                    station_id: values.station_id,
                    signature: values.signature,
                    status: values.status

                },{
                    headers: { Authorization: 'bearer ' + user.user.token },
                    
                })
                .then(res => {
                    console.log(res)
                    this.props.update('users', res.data)
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
                getFieldDecorator('email', {
                    initialValue: this.props.data.email,
                    rules: [
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input E-mail!',
                        },
                    ],
                })(<Input placeholder="Email"/>)}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('username', {
                initialValue: this.props.data.username,
                rules: [{ required: true, message: 'Please input user name!' }],
              })(
                <Input
                  placeholder="User Name"
                />,
              )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('role', {
                initialValue: this.props.data.role,  
                rules: [{ required: true, message: 'Please input user role!' }],
              })(
                <Input
                  placeholder="User Role"
                />,
              )}
            </Form.Item>
            
            <Form.Item>
              {getFieldDecorator('designation', {
                initialValue: this.props.data.designation,  
                rules: [{ required: true, message: 'Please input user designation!' }],
              })(
                <Input
                  placeholder="User Designation"
                />,
              )}
            </Form.Item>

            <Form.Item>
                {getFieldDecorator('mobile', {
                    initialValue: this.props.data.mobile,
                    rules: [{ required: true, message: 'Please input user phone number!' }],
                })(
                <Input 
                    addonBefore={'+88'}
                    placeholder="User Phone Number"  
                />)}
            </Form.Item>

            <Form.Item>
                {getFieldDecorator('station_id', {
                    initialValue: this.props.data.station_id,
                    rules: [{ 
                         required: true, 
                         message: 'Please select user station!' },
                    ],
                })(
                    <Select placeholder="Station">{
                        this.props.stations.length>0?
                            this.props.stations.map(station=>
                                <Select.Option value={station._id}>
                                    {station.station_id}
                                </Select.Option>):
                            <Select.Option disabled>Please Create Station</Select.Option>}
                    </Select>
                )}
            </Form.Item>

            <Form.Item>
              {getFieldDecorator('signature', {
                initialValue: this.props.data.signature,
                rules: [{ required: true, message: 'Please input user signature!' }],
              })(
                <Input
                  placeholder="User Signature"
                />,
              )}
            </Form.Item>

            <Form.Item>
                {getFieldDecorator('status', {
                    initialValue: this.props.data.status,
                    rules: [{ 
                         required: true, 
                         message: 'Please select user status!' },
                    ],
                })(
                    <Select placeholder="User Status">
                        <Select.Option value="1">Active</Select.Option>
                        <Select.Option value="0">Inctive</Select.Option>
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