import React from 'react';
import { Table } from 'antd';
import Data from './../demo_data/dashTableData.json';


const columns = [
    {
        title: "Product Type",
        dataIndex: "product_type"
    },
    {
        title: "Product Name",
        dataIndex: "product_name"
    },
    {
        title: "Stock in Ledger",
        dataIndex: "stock_in_ledger"
    },
    {
        title: "Requirements",
        dataIndex: "requirements"
    },
    {
        title: "Date of Issued",
        dataIndex: "date_issued"
    },
    {
        title: "Remarks",
        dataIndex: "remarks"
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