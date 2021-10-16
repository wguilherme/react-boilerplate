import "./styles.scss"
import { useForm } from "react-hook-form";
import Input from 'components/Input/index';
// import ILogin from "./interface"

function Login() {


  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const onSubmit = (data: any) => console.log(data)

  console.log(watch("example"))

  return (
    <div className="container mt-5">
      <form action="" autoComplete="off">


        <Input autoComplete="off" name="Name" type="text" placeholder="Type your name" />
        <Input autoComplete="off" name="Name" type="text" placeholder="Type your name" />
        <Input autoComplete="off" name="Name" type="text" placeholder="Type your name" />
        <Input autoComplete="off" name="Name" type="text" placeholder="Type your name" />
      </form>
    </div>
  )
}

export default Login


