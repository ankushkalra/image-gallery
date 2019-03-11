import React from "react";
import ReactDOM from "react-dom";

export default class ImageView extends React.Component {
  state = { isOpen: false };

  onImageClick = () => {
    this.setState({ isOpen: true });
    document.querySelector("#root").style.filter = "blur(5px)";
  };

  onClose = () => {
    this.setState({ isOpen: false });
    document.querySelector("#root").style.filter = "none";
  };

  render() {
    const { isOpen } = this.state;
    const { binaryData } = this.props;
    return (
      <div
        className="col-md-3"
        style={{
          border: "1px solid white",
          margin: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <img
          alt=""
          style={{ maxWidth: "100%", height: 200 }}
          onClick={this.onImageClick}
          src={`data:image/jpeg;base64,${binaryData}`}
        />
        {isOpen &&
          ReactDOM.createPortal(
            <div style={modalCSS}>
              <button
                onClick={this.onClose}
                className="btn btn-light"
                style={{ position: "absolute", margin: 20, right: 0, top: 0 }}
              >
                X
              </button>
              <img
                alt=""
                style={{ maxWidth: "90%", maxHeight: "90%", margin: 20 }}
                onClick={this.onImageClick}
                src={`data:image/jpeg;base64,${binaryData}`}
              />
            </div>,
            document.querySelector("#modal")
          )}
      </div>
    );
  }
}

const modalCSS = {
  position: "fixed",
  top: 0,
  left: 0,
  border: "5px solid black",
  width: "100%",
  height: "100%",
  color: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
