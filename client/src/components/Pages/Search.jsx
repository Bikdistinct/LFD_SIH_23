import React, { useRef } from "react";
import Upload from "../../assets/upload.png";
import SearchImg from "../../assets/search.png";
import "./search.css";
function Search() {

    const fileInputRef = useRef(null);

    const handleFileInputChange = (event) => {
      const files = event.target.files;
      // Process the selected files, e.g., display them or upload them
      console.log("Selected files:", files);
    };
  
    const handleClickUpload = () => {
      fileInputRef.current.click();
    };

  return (
    <div className="search">
      <div className="search-head">
        <p id="search-head1">What do you want to search today? </p>
        <p id="search-head2">Start with a detailed photo upload</p>
      </div>
      <div className="search-input" onClick={handleClickUpload} >
        <p className="search-input-inside">
          <img src={Upload} alt="Upload Image"/>{" "}
          <input
            type="file"
            accept="image/*"
            multiple
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileInputChange}
          />
        </p>
        <p className="search-input-inside search-text">
          Click to select an image
        </p>
        <p className="search-input-inside search-text2">PNG,JPG up to 20MB</p>
      </div>
      <div className="search-btn">
        <img src={SearchImg} /> Search
      </div>
    </div>
  );
}

export default Search;
