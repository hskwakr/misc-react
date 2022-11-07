import { useState, useRef } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  let videoRef = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video
        ref={videoRef}
        width="250"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
