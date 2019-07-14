import React from 'react'
import Axios from 'axios'
import Api from './../../../dataProvider/api.json'
import {Form, Input, Button} from 'antd'

class MyForm extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const user = JSON.parse(localStorage.getItem('user'));
                
                Axios
                .post(Api.HOST+Api.ADDSTATION, {
                    station_id: values.station,
                    address: values.address

                },{
                    headers: { Authorization: 'bearer ' + user.user.token },
                    
                })
                .then(res => {
                    console.log(res)
                    this.props.update('stations', res.data)
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
            <Form.Item>
              {getFieldDecorator('station', {
                rules: [{ required: true, message: 'Please input station name!' }],
              })(
                <Input
                  placeholder="Station Name"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('address', {
                rules: [{ required: true, message: 'Please input station address!' }],
              })(
                <Input
                  placeholder="Station Address"
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