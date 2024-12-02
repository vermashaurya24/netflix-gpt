import { useSelector } from "react-redux";
import useBackgroundVideo from "../hooks/useBackgroundVideo";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector(store => store?.movies?.trailerVideo);
  useBackgroundVideo(movieId);

  return (
    <div>
      <iframe
      className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1&modestbranding=1&rel=0&showinfo=0&fs=0&autohide=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
