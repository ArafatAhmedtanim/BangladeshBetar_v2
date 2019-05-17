import React from 'react'
import { Table } from 'antd';


export default class BangladeshBetarTable extends React.Component{
    render(){
        return(
            <Table 
                columns={this.props.columns} 
                dataSource={this.props.data} 
                scroll={{ x: 1300 }} 
                className={this.props.className}
            />
        )
    }
}