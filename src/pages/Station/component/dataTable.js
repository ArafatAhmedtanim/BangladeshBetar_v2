import React from 'react';
import { Table } from 'antd';

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
        title: "Action",
        dataIndex: "action"
    }
]

export default class DataTable extends React.Component{
    render(){
        return(
            <div className="dashboard-table-container">
                <Table columns={columns}  size="middle" />
            </div>
        );
    }
}