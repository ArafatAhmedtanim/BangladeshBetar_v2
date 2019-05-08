import React from 'react'
import {
    Form, Select, Button, Row, TimePicker 
} from 'antd';
import moment from 'moment';
  
class FilterForm extends React.Component {  
    constructor(props){
        super(props)
        console.log('ok')
    }

    timeFilterData = (data, filterOption, value) => {
        var _temp = []
        if(filterOption === 'TimeDiff' && isNaN(value)===false){
            console.log(value)
            data.map(item=>
                parseFloat(item['Battery_Value'])<parseFloat(value)?
                _temp.push(item):
                ''
            )
            return _temp
        }else return data
    }
    filterData = (data, filterOption, value) => {
        var _temp = []
        console.log(filterOption + ":" +value)
        
        value!=='0'?
        data.map(item=> item[`${filterOption}`].includes(value)?
            _temp.push(item):
            ''
        ):
        _temp = data;

        if(filterOption==='Division'){
            console.log(value)
            this.props.update('district',this.props.getDistrict(_temp))
            // this.props.update('thana',this.props.getThana(_temp))
        }else if(filterOption==='District'){
            // this.props.update('thana',this.props.getThana(_temp))
        }
        return _temp;
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(e)
        this.props.form.validateFields((err, values)=>{
            var start = moment.utc(values.fromTime, "HH:mm");
            var end = moment.utc(values.toTime, "HH:mm");

            var timeDiff = end.diff(start, 'minutes')
            if(timeDiff<0) timeDiff = (timeDiff/60)*(-1);
            else timeDiff = timeDiff/60
            console.log(timeDiff)
            var _temp = this.props.data;
            _temp = this.filterData(_temp, 'Division', this.props.selectedDivision)
            _temp = this.filterData(_temp, 'District', this.props.selectedDistrict)
            // _temp = this.filterData(_temp, 'Thana',this.props.selectedThana )
            _temp = this.timeFilterData(_temp, 'TimeDiff',timeDiff)

            this.props.update('filterAnalyticsData', _temp)
        })
        
    }

    handleDivision = value => {
        this.props.form.resetFields('district');
        this.props.update('selectedDistrict', '0');
        // this.props.form.resetFields('thana');
        // this.props.update('selectedThana', '0');

        this.props.update('selectedDivision', value);

        this.props.filter(this.props.data, 'Division', value)
    }

    handleDistrict = value => {
        // this.props.form.resetFields('thana');
        //this.props.update('selectedThana', '0');

        this.props.update('selectedDistrict', value);

        this.props.filter(this.props.data, 'District', value)
    }

    handleThana = value => {
        // this.props.update('selectedThana', value)
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        console.log(this.props.thana, this.props.district, this.props.division)
        return (
            <div className="analytics-form-container">
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <Row className="analytics-form-input-group">
                        <Row className="analytics-form-input-group-title">
                            Time Range
                        </Row>
                        <Form.Item>
                            {getFieldDecorator('fromTime')(
                                <TimePicker
                                use12Hours
                                format="h:mm A"
                                placeholder="From"
                                className="analytics-form-input"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('toTime')(
                                <TimePicker
                                use12Hours
                                format="h:mm A"
                                placeholder="To"
                                className="analytics-form-input"
                                />,
                            )}
                        </Form.Item>
                        <Row className="analytics-form-input-group-title">
                            Geo Filter
                        </Row>
                        <Form.Item>
                        {getFieldDecorator("division")(
                            <Select
                                className="analytics-form-input"
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Select a Division"
                                optionFilterProp="children"
                                onChange={this.handleDivision}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                <Select.Option
                                    key={0}
                                    value={"0"}
                                >
                                    ALL Division
                                </Select.Option>
                                {
                                    this.props.division? 
                                    this.props.division.map((item, i) => (
                                        <Select.Option
                                            key={i + 1}
                                            value={item}
                                        >
                                            {item}
                                        </Select.Option>)):
                                        ''
                                }
                            </Select>)}
                        </Form.Item>
                        <Form.Item>
                        {getFieldDecorator("district")(
                            <Select
                                className="analytics-form-input"
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Select a District"
                                optionFilterProp="children"
                                onChange={this.handleDistrict}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                <Select.Option
                                    key={0}
                                    value={"0"}
                                >
                                    ALL District
                                </Select.Option>
                                {
                                    this.props.district?
                                    this.props.district.map((item, i) => (
                                        <Select.Option
                                            key={i + 1}
                                            value={item}
                                        >
                                            {item}
                                        </Select.Option>)):
                                        ''
                                }
                            </Select>
                        )}
                        </Form.Item>
                        {/* <Form.Item>
                        {getFieldDecorator("thana")(
                            <Select
                                className="analytics-form-input"
                                showSearch
                                style={{ width: 200 }}
                                placeholder="Select a Thana"
                                optionFilterProp="children"
                                onChange={this.handleThana}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                <Select.Option
                                    key={0}
                                    value={"0"}
                                >
                                    ALL Thana
                                </Select.Option>
                                {
                                    this.props.thana?
                                    this.props.thana.map((item, i) => (
                                        <Select.Option
                                            key={i + 1}
                                            value={item}
                                        >
                                            {item}
                                        </Select.Option>)):
                                        ''
                                }
                            </Select>)}
                        </Form.Item> */}


                        
                        <Form.Item>
                            <Button 
                                htmlType="submit" 
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
  
const FilterFormTemplate = Form.create({ name: 'form' })(FilterForm);
export default FilterFormTemplate