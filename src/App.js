import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ImageView from "./components/ImageView";
import images from "./gallery.json";
import ImageUpload from "./components/ImageUpload";
import WebcamCapture from "./components/WebcamCapture";

class App extends Component {
  state = { images };

  addImage = image => {
    image = image.slice(23);
    this.setState(({ images }) => ({ images: [...images, image] }));
  };

  render() {
    const { images } = this.state;

    return (
      <div className="container">
        <div className="row">
          <ImageUpload />
          <WebcamCapture onCapture={this.addImage} />
        </div>
        <div className="row">
          {images.map(image => {
            return <ImageView key={image} binaryData={image} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
