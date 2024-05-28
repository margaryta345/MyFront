function VideoSceleton(props) {
  const { src } = props;
  return (
    <video className="min-w-full min-h-full object-cover" autoPlay loop muted>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
export default VideoSceleton;
