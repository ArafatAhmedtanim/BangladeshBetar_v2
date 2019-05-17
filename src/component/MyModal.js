import React from 'react';
import { Modal, Button } from 'antd';

export default class MyModal extends React.Component {
constructor(props){
    super(props)
}

  render() {
      console.log(this.props.form)
      console.log('data')
    return (
      <div className="dashboard-modal-container">
        <Button  type="primary" onClick={this.props.createUser}>
          {this.props.modalButton}
        </Button>
        <Modal
          title={this.props.modalName}
          visible={this.props.visibility}
          footer={false}
          onCancel={this.props.handleCancel}
        >
          {this.props.form}
        </Modal>
      </div>
    );
  }
}

