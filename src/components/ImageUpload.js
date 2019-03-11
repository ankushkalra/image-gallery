import React from "react";

class ImageUpload extends React.Component {
  state = { currentImage: "" };
  onSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { currentImage } = this.state;
    if (currentImage !== "") {
      onSubmit && onSubmit(currentImage);
    }
  };

  handleInputChange = e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      console.log("4. reader.result = ", reader.result);
      this.setState({ currentImage: reader.result });
    };
    console.log("5. file = ", file);
    file && reader.readAsDataURL(file);
  };

  render() {
    return (
      <div style={{ padding: 20, marginBottom: 20, marginTop: 20, flex: 1 }}>
        <form onSubmit={this.onSubmit}>
          <input type="file" name="file" onChange={this.handleInputChange} />
          <button type="submit" className="btn btn-primary">
            Upload
          </button>
        </form>
      </div>
    );
  }
}

export default ImageUpload;
