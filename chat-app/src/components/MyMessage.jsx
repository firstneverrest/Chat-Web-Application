import React from 'react';

const MyMessage = ({ message }) => {
  // if the message is a image
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: 'right' }}
      />
    );
  }

  // if the message is a text
  return (
    <div
      className="message"
      style={{
        float: 'right',
        marginRight: '18px',
        color: 'white',
        backgroundColor: '#5d61ed',
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
