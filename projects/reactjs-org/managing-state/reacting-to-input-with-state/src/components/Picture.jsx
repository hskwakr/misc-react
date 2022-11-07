import { useState } from "react";

const bgClasses = ["background--active", "picture--active"];

export default function Picture() {
  const [active, setActive] = useState(bgClasses[0]);

  const imgOnClicked = () => {
    if (active === bgClasses[0]) {
      setActive(bgClasses[1]);
    } else {
      setActive(bgClasses[0]);
    }
  };
  return (
    <div className={"background " + active}>
      <img
        onClick={imgOnClicked}
        className="picture"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
