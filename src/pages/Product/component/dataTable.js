import React from 'react';
import { Table } from 'antd';
import Data from './../demo_data/dashTableData.json';


const columns = [
    {
        title: "Name",
        dataIndex: "name"
    },
    {
        title: "Product",
        dataIndex: "product"
    },
    {
        title: "Type",
        dataIndex: "type"
    },
    {
        title: "Specification",
        dataIndex: "sepecification"
    },
    {
        title: "Threshold",
        dataIndex: "thresolhold"
    },
    {
        title: "Model",
        dataIndex: "model"
    },
    {
        title: "SR no.",
        dataIndex: "sr_no"
    },
    {
        title: "Symbol No",
        dataIndex: "symbol_no"
    },
    {
        title: "Manufacturer",
        dataIndex: "manufacturer"
    },
    {
        title: "Installation Date",
        dataIndex: "date"
    },
    {
        title: "Remarks",
        dataIndex: "remarks"
    },
    {
        title: "Attachment",
        dataIndex: "attachment"
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