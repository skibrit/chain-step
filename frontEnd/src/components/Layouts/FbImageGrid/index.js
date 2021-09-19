import React from "react";
import FbImageLibrary from "react-fb-image-grid";

const ImageGrid = ({ images }) => {
  return <FbImageLibrary images={images.filter(Boolean)} />;
};

export default ImageGrid;
