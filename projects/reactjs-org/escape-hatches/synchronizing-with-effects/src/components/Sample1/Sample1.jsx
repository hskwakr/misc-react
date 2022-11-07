import App1 from "./App1";
import App2 from "./App2";
import ChatRoom from "./ChatRoom";

export default function Sample1() {
  return (
    <>
      <div>
        <App1 />
      </div>
      <div>
        <ChatRoom />
      </div>
      <div>
        <App2 />
      </div>
    </>
  );
}
