import React from 'react';
import {
    Form, Select, Input, Button, Upload, message, Icon
  } from 'antd';
  
  const { Option } = Select;

    // upload signature start
    const props = {
        name: 'file',
        action: '//jsonplaceholder.typicode.com/posts/',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };
      
    // upload signature end
  
class MyForm extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log( values);
        }
      });
    }
  
    handleSelectChange = (value) => {
      console.log(value);
      this.props.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    }
  
    render() {
        console.log(this.props.form)
        console.log('hi')
        const { getFieldDecorator } = this.props.form;
      return (
        <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.props.onSubmit}>
          <Form.Item label="Name" >
            {/* {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              
            )} */}
            <Input placeholder="Enter Name" />
          </Form.Item>
          <Form.Item label="Role" >
            {/* {getFieldDecorator('gender', {
              rules: [{ required: true, message: 'Please select your gender!' }],
            })(
              <Select
                placeholder="Select a option and change input text above"
                onChange={this.handleSelectChange}
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>
            )} */}
            <Select
                placeholder="Select Role"
                onChange={this.handleSelectChange}
              >
                <Option value="male">Store Kepper</Option>
                <Option value="female">DG</Option>
              </Select>
          </Form.Item>
          <Form.Item label="Mobile No" >
            <Input placeholder="Enter Mobile Number" />
          </Form.Item>
          <Form.Item label="Email" >
            <Input placeholder="Enter Email Address" />
          </Form.Item>
          <Form.Item label="Station" >
            <Select
                placeholder="Select Station"
                onChange={this.handleSelectChange}
              >
                <Option value="Khulna">Khulna</Option>
                <Option value="Barishal">Barishal</Option>
              </Select>
          </Form.Item>
          <Form.Item label="Designation" >
            <Input placeholder="Enter Designation" />
          </Form.Item>
          <Form.Item label="Signature" >
            <Upload {...props}>
                <Button>
                <Icon type="upload" /> Click to Upload Signature
                </Button>
            </Upload>
          </Form.Item>
          <Form.Item label="Status" >
            <Select
                placeholder="Select Status"
                onChange={this.handleSelectChange}
              >
                <Option value="active">Active</Option>
                <Option value="inactive">Inactive</Option>
              </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 12, offset: 5 }} >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }
  
  const MyForms = Form.create({ name: 'coordinated' })(MyForm);
  export default MyForms;