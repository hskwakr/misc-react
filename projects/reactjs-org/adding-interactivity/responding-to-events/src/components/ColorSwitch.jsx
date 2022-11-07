export default function ColorSwitch({
  onChangeColor
}) {
  function onClick(e) {
    e.stopPropagation();
    onChangeColor();
  }

  return (
    <button onClick={onClick}>
      Change color
    </button>
  );
}
