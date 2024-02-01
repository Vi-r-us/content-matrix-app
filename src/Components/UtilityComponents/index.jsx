/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./index.css";

export const Button = ({ className, href, children }) => {
  return (
    <a className={className} href={`#${href}`}>
      {children}
    </a>
  );
};

export const LongVideo = ({ className, videoURL, parentWidth }) => {
  console.log(videoURL);
  return (
    <iframe
      className={`yt-video ${className}`}
      src={videoURL}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  );
};
