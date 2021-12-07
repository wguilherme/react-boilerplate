import "./styles.scss"
import Input from 'components/Input/index';
import Button from "components/Button";
import Form from "components/Form/useForm";
import InputSelect from '../../components/InputSelect';


function Lab() {

  const onSubmit = (formData: any) => console.log(formData)

  return (
    <div id="page-lab" className="h-100">
      <div className="form-container">
        <h1>Olá, faça seus testes</h1>
        <h2>Preencha os dados abaixo para continuar</h2>
        <Form onSubmit={onSubmit} >

          <Input
            name="email"
            label="Digite seu e-mail"
            required={true}
          />

          <Input
            name="password"
            autoComplete="off"
            type="password"
            label="Digite sua senha"
            placeholder="Digite sua senha"
          />

          <InputSelect name="selected" />

          <Button submit label="Entrar" />
        </Form>
      </div>
    </div>
  )
}

export default Lab