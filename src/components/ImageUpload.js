import React from "react";

class ImageUpload extends React.Component {
  state = { currentImage: "" };
  onSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { currentImage } = this.state;
    if (currentImage !== "") {
      onSubmit && onSubmit(currentImage);
      this.setState({ currentImage: "" });
    }
  };

  validate = fileName => {
    var validExtensions = [".jpg", ".jpeg", ".png"];
    if (fileName.length > 0) {

      var blnValid = false;
      for (var j = 0; j < validExtensions.length; j++) {
        var curExtension = validExtensions[j];
        if (
          fileName.substr(fileName.length - curExtension.length, curExtension.length).toLowerCase() ==
          curExtension.toLowerCase()
        ) {
          blnValid = true;
          break;
        }
      }

      if (!blnValid) {
        alert("Sorry, " + fileName + " is invalid, allowed extensions are: " + validExtensions.join(", "));
        return false;
      } else {
        return true;
      }
    }
  };
  handleInputChange = e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      if (this.validate(file.name)) {
        reader.onloadend = () => {
          this.setState({ currentImage: reader.result });
        };
        file && reader.readAsDataURL(file);
      } else {
        e.target.value = null;
      }
    }
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
