import React from "react";
import Photogrid from "react-facebook-photo-grid";

const ImageGrid = ({ images }) => {
  return <Photogrid images={images.filter(Boolean)} />;
};

export default ImageGrid;
