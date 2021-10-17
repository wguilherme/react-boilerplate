
import ReactDOM from "react-dom";
import { Form, Input, Select } from "./components";

const Context2 = () => {
  const onSubmit = (data) => console.log(data);
  return (
    <Form onSubmit={onSubmit}>
      <Input name="firstName" />
      <Input name="lastName" />
      <button>Submit</button>
    </Form>
  );
}

export { Context2 }