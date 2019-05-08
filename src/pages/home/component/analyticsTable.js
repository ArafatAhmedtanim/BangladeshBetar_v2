import React from 'react';
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
export default class AnalyticsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      searchText: '',
    };
  }

  refresh=()=>this.props.update('analyticsData', '')
  getData=()=>
    this.props.data.map(item=>{
      var temp = Object.assign({}, item);
      if(item.Vulnerability<3) temp.AT_ID = item.AT_ID+'_Low'
      else if(item.Vulnerability>=3 && item.Vulnerability_Score<4) temp.AT_ID = item.AT_ID+'_Mid'
      else if(item.Vulnerability>=4) temp.AT_ID = item.AT_ID+'_High'
      return temp
    })
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
          className="table-filter"
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? 'red' : 'white' }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: (text = '') => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns = [
      {
        title: 'AT ID',
        dataIndex: 'AT_ID',
        fixed: 'left',
        // render: (text)=> text.split("_")[1].toLowerCase()==='low'?
        // <span>
        //   {text.split("_")[0]}
        //   <Icon type="check-circle" theme="twoTone" twoToneColor="green" style={{ fontSize: '20px' , paddingLeft:'10px'}}/>
        // </span>:
        // text.split("_")[1].toLowerCase()==='mid'?
        // <span>
        //   {text.split("_")[0]}
        //   <Icon type="warning" theme="twoTone" twoToneColor="#fdca20" style={{ fontSize: '20px' , paddingLeft:'10px'}}/>
        // </span>:<span>
        //   {text.split("_")[0]}
        //   <Icon type="close-circle" theme="twoTone" twoToneColor="red" style={{ fontSize: '20px', paddingLeft:'10px' }}/>
        // </span>
      },
      {
        title: 'Robi ID',
        dataIndex: 'Robi_iD',
        ...this.getColumnSearchProps('Robi_iD'),
      },
      {
        title: 'Region',
        dataIndex: 'Region',
        ...this.getColumnSearchProps('Region'),
      },
      {
        title: 'Zone',
        dataIndex: 'Zone',
        ...this.getColumnSearchProps('Zone'),
      },
      {
        title: 'Quickly MP',
        dataIndex: 'Quickly_MP',
        ...this.getColumnSearchProps('Quickly_MP'),
      },
      {
        title: 'Site Category',
        dataIndex: 'Site_Category',
        ...this.getColumnSearchProps('Site_Category'),
      },
      {
        title:'Pakage',
        dataIndex: 'Pakage',
        ...this.getColumnSearchProps('Pakage'),
      },
      {
        title: 'Importance',
        dataIndex: 'Importance',
        ...this.getColumnSearchProps('Importance'),
      },
      {
        title: 'Own shared',
        dataIndex: 'Own_Shared',
        ...this.getColumnSearchProps('Own_Shared'),
      },
      {
        title: 'Battery backup',
        dataIndex: 'Battery_Back_Up_Time',
        ...this.getColumnSearchProps('Battery_Back_Up_Time'),
      },
      {
        title: 'Battery score',
        dataIndex: 'Battery_Score',
        ...this.getColumnSearchProps('Battery_Score'),
      },
      {
        title: 'Power score',
        dataIndex: 'Power_Score',
        ...this.getColumnSearchProps('Power_Score'),
      },
      {
        title: 'Vulnerability',
        dataIndex: 'Vulnerability',
        ...this.getColumnSearchProps('Vulnerability'),
      },
    ];
    return (
      <div className="analytics-table-container">
      <Button shape="circle" icon="close" className="analytics-table-cancel-button" onClick={this.refresh}/>
        <Table
          className="analytics-table"
          columns={columns}
          dataSource={this.getData()}
          size="small"
          scroll={{ x: 1000 }}
        />
      </div>
    );
  }
}
