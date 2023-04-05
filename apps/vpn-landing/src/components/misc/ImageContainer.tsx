/* eslint-disable @next/next/no-img-element */
const ImageContainer = ({ src, alt, className }) => {
  return (
    <img src={src} alt={alt} className={`${className} relative`}/>
  );
};

export default ImageContainer;
