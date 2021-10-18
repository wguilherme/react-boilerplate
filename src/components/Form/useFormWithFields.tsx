
import React from "react"
import { useForm } from "react-hook-form";
import Input from 'components/Input/index';
import Form from "components/Form/useForm"
import Button from "components/Button";

const FormWithFields: any = (props: any) => {


  const { fields, config, onSubmit } = props


  return <>
    <Form onSubmit={onSubmit} >
      {fields && fields.map((field: any) => <Input {...field}></Input>)}
    </Form>

    <Button submit={true} label={config.submitLabel} />

  </>


}

export default FormWithFields