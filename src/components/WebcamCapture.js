import React from "react";
import Webcam from "react-webcam";

export default class WebcamCapture extends React.Component {
  state = { isOpen: false };

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({ isOpen: false });
    this.props.onCapture(imageSrc);
  };

  render() {
    const { isOpen } = this.state;
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
        {isOpen ? (
          [
            <Webcam
              audio={false}
              height={350}
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              width={350}
              videoConstraints={videoConstraints}
            />,
            <button onClick={this.capture}>Capture photo</button>
          ]
        ) : (
          <button className="btn btn-primary" onClick={() => this.setState({ isOpen: true })}>
            Open Webcam
          </button>
        )}
      </div>
    );
  }
}
