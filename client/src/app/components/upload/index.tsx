import * as React from "react";

interface IUpload {
  action: string;
  multiple?: boolean;
}

export default class Upload extends React.Component<IUpload, any> {
  defaultProps = {
    multiple: false,
  };

  handleInputFileChange = (e: any) => {
    const xmlhttp = new XMLHttpRequest();
    const formadata = new FormData();
    formadata.append("files", e.target.files[0]);
    formadata.append("files", e.target.files[1]);
    xmlhttp.open("POST", "/api/upload");
    xmlhttp.send(formadata);
  };

  render() {
    // const { multiple } = this.props;
    return (
      <div>
        <input
          type="file"
          onChange={this.handleInputFileChange}
          name="file"
          multiple
        />
        {/* <button onClick={this.submit}>提交</button> */}
      </div>
    );
  }
}
