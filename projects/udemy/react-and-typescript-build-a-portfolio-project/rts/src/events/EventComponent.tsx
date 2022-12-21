const EventComponent = () => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    throw new Error(`Not implemented with ${e.target.value}`);
  };

  const onDragStart: React.DragEventHandler = (e) => {
    throw new Error(`Not implemented with ${e.clientX} ${e.clientY}`);
  };

  return (
    <div>
      {/* <input onChange={(e) => console.log(e)} /> */}
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
