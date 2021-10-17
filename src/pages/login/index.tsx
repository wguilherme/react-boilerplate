import "./styles.scss"
import { useForm } from "react-hook-form";

import Input from 'components/Input/index';
import { Button } from "components/Button";
// import ILogin from "./interface"

function Login() {


  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const onSubmit = (data: any) => console.log(data)

  console.log(watch("example"))



  return (
    <div id="page-login" className="w-100 h-100">
      <div className="form-container">

        <h1>Seja bem vindo!</h1>
        <h2>Acesse a plataforma com seu login e senha</h2>

        <form action="" autoComplete="off!!">


          <Input
            name="Email"
            autoComplete="off"
            type="text"
            label="Digite seu e-mail"
            placeholder="Digite seu e-mail"
          />

          <Input
            name="Password"
            autoComplete="off"
            type="password"
            label="Digite sua senha"
            placeholder="Digite sua senha"
          />

          {/* padding-left: 2.5rem; padding-right: 2.5rem; */}
          <div className="d-grid gap-2 mx-auto ">
            <button type="button" className="btn btn-primary btn-lg"
            >Login</button>

          </div>

        </form>
      </div>
    </div>
  )
}

export default Login


