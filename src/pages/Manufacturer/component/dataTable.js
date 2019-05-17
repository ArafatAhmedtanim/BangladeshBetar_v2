import React from 'react';
import { Table } from 'antd';
import Data from './../demo_data/dashTableData.json';


const columns = [
    {
        title: "Name",
        dataIndex: "name"
    },
    {
        title: "Address",
        dataIndex: "address"
    },
    {
        title: "Country",
        dataIndex: "country"
    },
    {
        title: "Action",
        dataIndex: "action"
    }
]

const { data } = Data;

export default class DataTable extends React.Component{
    render(){
        return(
            <div className="dashboard-table-container">
                <Table columns={columns}  dataSource={data} size="middle" />
            </div>
        );
    }
}