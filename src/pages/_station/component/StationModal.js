import React from 'react';
import { Modal} from 'antd';

export default class MyModal extends React.Component {
  render() {
    return (
        <Modal
          title={this.props.modalTitle}
          visible={this.props.visibility}
          footer={false}
          onCancel={this.props.handleModalCancel}
        >
          {this.props.form}
        </Modal>
    );
  }
}

