import React from 'react';
import { Form, Input, Button, TimePicker, Row } from 'antd';
import axios from 'axios';
import moment from 'moment';
import API from './../../../dataProvider/api.json';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class AnalyticsForm extends React.Component {
  componentDidMount() {
    this.props.form.validateFields();
  }

  constructor(props) {
    super(props);

    this.state = {
      startTime: moment()
        .toDate()
        .getTime(),
      endTime: moment()
        .toDate()
        .getTime(),
    };
  }

  timeHandle = value => {
    console.log(value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user.user.token);
        axios
          .post(
            API.HOST + API.ANALYTICS,
            {
              division: values.division,
              district: values.district,
              thana: values.thana,
              time: values.time,
            },
            { headers: { Authorization: 'bearer ' + user.user.token } },
          )
          .then(res => {
            console.log(res.data);
            this.props.update('analyticsData', res.data);
          })
          .catch(error => {
            console.log(error);
          });
      }
    });
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form;

    const divisionError =
      isFieldTouched('division') && getFieldError('division');
    const districtError =
      isFieldTouched('district') && getFieldError('district');
    const thanaError = isFieldTouched('thana') && getFieldError('thana');
    const fromTimeError =
      isFieldTouched('fromTime') && getFieldError('fromTime');
    const toTimeError = isFieldTouched('toTime') && getFieldError('toTime');
    return (
      <div className="analytics-form-container">
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Row className="analytics-form-input-group">
            <Row className="analytics-form-input-group-title">
              Time Range
            </Row>
            <Form.Item
              validateStatus={fromTimeError ? 'error' : ''}
              help={fromTimeError || ''}
            >
              {getFieldDecorator('fromTime', {
                rules: [{ required: true, message: 'Please input your time!' }],
              })(
                <TimePicker
                  use12Hours
                  format="h:mm A"
                  onChange={this.timeHandle}
                  placeholder="From"
                  style={{ width: "250px" }}
                />,
              )}
            </Form.Item>
            <Form.Item
              validateStatus={toTimeError ? 'error' : ''}
              help={toTimeError || ''}
            >
              {getFieldDecorator('toTime', {
                rules: [{ required: true, message: 'Please input your time!' }],
              })(
                <TimePicker
                  use12Hours
                  format="h:mm A"
                  onChange={this.timeHandle}
                  placeholder="To"
                  style={{ width: "250px" }}
                />,
              )}
            </Form.Item>
          </Row>
          <Row className="analytics-form-input-group">
            <Row className="analytics-form-input-group-title">
              Geo Location
            </Row>
            <Form.Item
              validateStatus={divisionError ? 'error' : ''}
              help={divisionError || ''}
            >
              {getFieldDecorator('division', {
                rules: [
                  { required: true, message: 'Please input your division!' },
                ],
              })(<Input placeholder="Division" style={{ width: "250px" }}/>)}
            </Form.Item>
            <Form.Item
              validateStatus={districtError ? 'error' : ''}
              help={districtError || ''}
            >
              {getFieldDecorator('district', {
                rules: [
                  { required: true, message: 'Please input your district!' },
                ],
              })(<Input type="district" placeholder="District" style={{ width: "250px" }}/>)}
            </Form.Item>
            <Form.Item
              validateStatus={thanaError ? 'error' : ''}
              help={thanaError || ''}
            >
              {getFieldDecorator('thana', {
                rules: [{ required: true, message: 'Please input your thana!' }],
              })(<Input type="thana" placeholder="Thana" style={{ width: "250px" }}/>)}
            </Form.Item>
          </Row>
          <Row className="analytics-form-input-group">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                disabled={hasErrors(getFieldsError())}
                className="analytics-form-submit-button"
              >
                Submit
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </div>
    );
  }
}

const analyticsForm = Form.create({ name: 'horizontal_login' })(AnalyticsForm);

export default analyticsForm;
