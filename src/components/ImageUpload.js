import React from "react";

class ImageUpload extends React.Component {
  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div style={{ padding: 20, marginBottom: 20, marginTop: 20, flex: 1 }}>
        <form onSubmit={this.onSubmit}>
          <input type="file" name="file" />
          <button type="submit" className="btn btn-primary">
            Upload
          </button>
        </form>
      </div>
    );
  }
}

export default ImageUpload;
