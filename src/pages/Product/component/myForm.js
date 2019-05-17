import React from 'react';
import {
    Form, Select, Input, Button, Upload, message, Icon, DatePicker
  } from 'antd';
  
  const { Option } = Select;
  const { TextArea } = Input;

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
            {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(<Input placeholder="Enter Station Name" />)}
            
          </Form.Item>
          <Form.Item label="Product" >
          {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(<Select
              placeholder="Select Product Type"
              onChange={this.handleSelectChange}
            >
              <Option value="instrument">Instrument</Option>
              <Option value="parts">Parts</Option>
            </Select>)}
          </Form.Item>
          <Form.Item label="Type" >
          {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(<Select
              placeholder="Select Type"
              onChange={this.handleSelectChange}
            >
              <Option value="Khulna">Transmitter</Option>
              <Option value="Barishal">Circuit</Option>
            </Select>)}
            
          </Form.Item>
          <Form.Item label="Specification">
          {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(<Input placeholder="Enter Specification" />)}
            
          </Form.Item>
          <Form.Item label="Threshold">
          {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(<Input placeholder="Enter Threshold Value" />)}
            
          </Form.Item>
          <Form.Item label="Model">
          {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(<Input placeholder="Enter Model Number" />)}
            
          </Form.Item>
          <Form.Item label="SR No.">
          {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(<Input placeholder="Enter SR Number" />)}
            
          </Form.Item>
          <Form.Item label="Symbol No.">
          {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(<Input placeholder="Enter Symbol No." />)}
            
          </Form.Item>
          <Form.Item label="Manufacturer" >
          {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(<Select
              placeholder="Select Manufacturer"
              onChange={this.handleSelectChange}
            >
              <Option value="1">SK Corporation, Russia</Option>
              <Option value="2">Lamfo Inc, Uganda</Option>
            </Select>)}
              
          </Form.Item>
          <Form.Item label="Select Date">
          {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(<DatePicker />)}
            
          </Form.Item>
          <Form.Item label="Remarks">
            <TextArea />
          </Form.Item>
          <Form.Item label="Attachment">
            <Upload {...props}>
              <Button>
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload>
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