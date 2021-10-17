import "./styles.scss"
import { useForm } from "react-hook-form";

import Input from 'components/Input/index';
import { Button } from "components/Button";
import Form from "components/Form/useForm";
// import ILogin from "./interface"

function Login() {





  const onSubmit = (data) => console.log(data);
  // console.log(watch("email"))



  return (
    <div id="page-login" className="w-100 h-100">
      <div className="form-container">

        <h1>Seja bem vindo (a)</h1>
        <h2>Acesse a plataforma com seu login e senha</h2>


        <Form onSubmit={onSubmit} >


          <Input
            name="Email"
            autoComplete="off"
            type="text"
            label="Digite seu e-mail"
            placeholder="Digite seu e-mail"
          />

          {/* <Input
            register={register}
            name="Password"
            autoComplete="off"
            type="password"
            label="Digite sua senha"
            placeholder="Digite sua senha"
          /> */}

          <div className="d-grid gap-2 mx-auto ">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
            >
              Login
            </button>
          </div>

        </Form>
      </div>
    </div>
  )
}

export default Login


