import React from 'react';

class Modal extends React.Component {
 render() {
    const { imageUrl, onClose } = this.props;
    return (
      <div className="overlay visible" onClick={onClose}>
        <div className="modal visible">
          <img src={imageUrl} alt="Large image" />
        </div>
      </div>
    );
  }
}
  export default Modal
