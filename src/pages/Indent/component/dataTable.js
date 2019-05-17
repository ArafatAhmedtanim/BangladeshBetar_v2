import React from 'react';
import { Table, Button, Icon, Input } from 'antd';
import Highlighter from 'react-highlight-words';

import Data from './../demo_data/dashTableData.json';


// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

const { data } = Data;

export default class DataTable extends React.Component{
    // Search option start
    state = {
        searchText: '',
      };
    
      getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
          setSelectedKeys, selectedKeys, confirm, clearFilters,
        }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => { this.searchInput = node; }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
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
        filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => this.searchInput.select());
          }
        },
        render: (text) => (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[this.state.searchText]}
            autoEscape
            textToHighlight={text.toString()}
          />
        ),
      })
    
      handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
      }
    
      handleReset = (clearFilters) => {
        clearFilters();
        this.setState({ searchText: '' });
      }
    
    // Search option end
    render(){

        const columns = [
            {
                title: "Category",
                dataIndex: "category"
            },
            {
                title: "Product name",
                dataIndex: "product_name"
            },
            {
                title: "Product Type",
                dataIndex: "Product_type"
            },
            {
                title: "Consumption of last 2 years",
                dataIndex: "name",
                ...this.getColumnSearchProps('name')
        
            },
            {
                title: "Requirement during next 2 years",
                dataIndex: "req_for_next_year"
            },
            {
                title: "Parts Position",
                dataIndex: "parts_position"
            },
            {
                title: "Parts No.",
                dataIndex: "parts_no"
            },
            {
                title: "Quantity in Use",
                dataIndex: "Quantity_in_use"
            },
            {
                title: "Special Reports No.",
                dataIndex: "special_report_no"
            },
            {
                title: "Intent Year",
                dataIndex: "intent_year"
            },
            {
                title: "Remarks",
                dataIndex: "remarks"
            },
            {
                title: "Status",
                dataIndex: "status"
            },
            {
                title: "Action",
                dataIndex: "action"
            }
        ]
        

        return(
            <div className="dashboard-table-container">
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} size="middle" />
            </div>
        );
    }
}