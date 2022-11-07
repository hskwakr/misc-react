import { useRef } from "react";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

export default function Page2() {
  let ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <>
      <nav>
        <SearchButton onClick={handleClick}/>
      </nav>
      <SearchInput ref={ref}/>
    </>
  );
}
