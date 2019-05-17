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
            {/* {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              
            )} */}
            <Input placeholder="Enter Station Name" />
          </Form.Item>
          <Form.Item label="Address" >
            {/* {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              
            )} */}
            <Input placeholder="Enter Station Address" />
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