const Notification = ({ message }) => {
  const messageStyle = {
    color: "teal",
    background: "lightgrey",
    fontSize: "20",
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    margin: 5,
    display: "inline-block",
  };

  if (message === null) {
    return null;
  }

  return (
    <div className="error" style={messageStyle}>
      {message}
    </div>
  );
};

export default Notification;
