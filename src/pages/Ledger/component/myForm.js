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
          <Form.Item label="Product Type" >
            {/* {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              
            )} */}
            <Select
                placeholder="Select Product Type"
                onChange={this.handleSelectChange}
              >
                <Option value="Khulna">Instrument</Option>
                <Option value="Barishal">Parts</Option>
              </Select>
          </Form.Item>
          <Form.Item label="Product Name" >
            {/* {getFieldDecorator('note', {
              rules: [{ required: true, message: 'Please input your note!' }],
            })(
              
            )} */}
              <Select
                placeholder="Select Product Name"
                onChange={this.handleSelectChange}
              >
                <Option value="Khulna">transmitter</Option>
                <Option value="Barishal">Registor</Option>
              </Select>
          </Form.Item>
          <Form.Item label="Stock in ledger" >
            <Input placeholder="Autofill" />
          </Form.Item>
          <Form.Item label="Requirements" >
            <Input placeholder="enter requirements" />
          </Form.Item>
          <Form.Item label="Date" >
            <Input placeholder="Autofill" />
          </Form.Item>
          <Form.Item label="Remarks" >
            <Input placeholder="enter Remarks" />
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