import React from 'react'
import { Table } from 'antd';
import './style.css'
export default class BangladeshBetarTable extends React.Component{
    render(){
        return(
            <Table
                rowClassName={ 
                    (record, index) =>
                        record.status? 
                            record.status==='1'? 
                                'active-users':
                                'inactive-users'
                            :''  
                } 
                rowKey={record => record._id}
                columns={this.props.columns} 
                dataSource={this.props.data} 
                scroll={{ x: 1300 }} 
                className={this.props.className}
            />
        )
    }
}