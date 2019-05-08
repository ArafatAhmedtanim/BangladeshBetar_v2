import React from 'react';
import { Form, Icon, Input, Button, Layout } from 'antd';
import Auth from './auth/auth.js';

const { Content } = Layout;
class MyForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => (!err ? Auth(values) : ''));
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Content className="login-form-container">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [
                { required: true, message: 'Please Input Your User Name!' },
              ],
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="User Name"
              />,
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please Input Your Password!' },
              ],
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Content>
    );
  }
}

const LoginForm = Form.create({ name: 'normal_login' })(MyForm);
export default LoginForm;
