import Form from 'components/Form/useFormWithFields';
import "./styles.scss"


function Register() {

  const onSubmit = (formData: any) => console.log(formData)


  const fields: any = [
    {
      name: "email",
      label: "Email",
      placeholder: "Digite seu e-mail",
      required: true
    }]

  const formConfig: any = {
    submitLabel: "Registrar"
  }



  return (
    <div id="page-register" className="h-100">
      <div className="form-container">
        <h1>Olá, crie sua conta!</h1>
        <h2>Preencha os dados abaixo para continuar</h2>
        <Form onSubmit={onSubmit} fields={fields} config={formConfig} />
      </div>
    </div>
  )
}

export default Register