import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      autoPlay
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video