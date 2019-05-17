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
    
    render() {
        console.log(this.props.form)
        console.log('hi')
        const { getFieldDecorator } = this.props.form;
      return (
        <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.props.onSubmit}>
          <Form.Item label="Name" >
            <Select
                placeholder="Select Indent Category"
                onChange={this.handleSelectChange}
              >
                <Option value="Khulna">Yearly</Option>
                <Option value="Barishal">Emergancy</Option>
                <Option value="Barishal">Inter Station</Option>
              </Select>
          </Form.Item>
          <Form.Item label="Choose Product" >
            {/* {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              
            )} */}
            <Input placeholder="Enter Station Address" />
          </Form.Item>
          <Form.Item label="Consumption of last 2 years" >
            {/* {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              
            )} */}
            <Input placeholder="Enter Station Address" />
          </Form.Item>
          <Form.Item label="Requirement during next 2 year" >
            {/* {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              
            )} */}
            <Input placeholder="Enter Station Address" />
          </Form.Item>
          <Form.Item label="Parts Position" >
            {/* {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              
            )} */}
            <Input placeholder="Enter Station Address" />
          </Form.Item>
          <Form.Item label="Prts No." >
            {/* {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              
            )} */}
            <Input placeholder="Enter Station Address" />
          </Form.Item>
          <Form.Item label="Quantity in use" >
            {/* {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              
            )} */}
            <Input placeholder="Enter Station Address" />
          </Form.Item>
          <Form.Item label="Special report No." >
            {/* {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              
            )} */}
            <Input placeholder="Enter Station Address" />
          </Form.Item>
          <Form.Item label="Intent Year" >
            {/* {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              
            )} */}
            <Input placeholder="Enter Station Address" />
          </Form.Item>
          <Form.Item label="Remarks" >
            {/* {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              
            )} */}
            <Input placeholder="Enter Station Address" />
          </Form.Item>
          <Form.Item label="Status" >
            {/* {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              
            )} */}
            <Input placeholder="Enter Station Address" />
          </Form.Item>
          <Form.Item label="Action" >
            {/* {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              
            )} */}
            <Input placeholder="Enter Station Address" />
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