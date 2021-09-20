import React from "react";
import SpinnerLoader from "../../Spinner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Classes from "./style.module.scss";

const ImageLoader = ({ src, alt, className }) => {
  return (
    <LazyLoadImage
      alt={alt}
      src={src}
      placeholder={
        <SpinnerLoader animation={"grow"} variant={"info"} size={"sm"} />
      }
      className={className}
      placeholderSrc={
        "https://discountseries.com/wp-content/uploads/2017/09/default.jpg"
      }
      wrapperClassName={Classes.wrapperPlaceholderClass}
    />
  );
};

export default ImageLoader;
