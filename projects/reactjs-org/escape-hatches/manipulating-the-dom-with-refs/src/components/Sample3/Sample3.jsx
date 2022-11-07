import CatFriends from "./CatFriends";
import Page1 from "./Page1";
import Page2 from "./Page2";
import VideoPlayer from "./VideoPlayer";

export default function Sample3() {
  return (
    <>
      <div>
        <VideoPlayer />
      </div>
      <div>
        <Page1 />
      </div>
      <div>
        <CatFriends />
      </div>
      <div>
        <Page2 />
      </div>
    </>
  );
}
