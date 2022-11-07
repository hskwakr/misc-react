import Form from "./Form";
import TodoList1 from "./TodoList1";
import TodoList2 from "./TodoList2";

export default function Sample1() {
  return (
    <>
      <div>
        <TodoList1 />
      </div>
      <div>
        <TodoList2 />
      </div>
      <div>
        <Form />
      </div>
    </>
  );
}
