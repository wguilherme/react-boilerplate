import React from "react";
import { useForm } from "react-hook-form";

function Register() {



  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data)

  console.log(watch("example"))

  return (
    <div className="container">
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("example")} />
          <input type="text" {...register("exampleRequired", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" />
        </form>
        <button>Oi</button>
      </div>
    </div>
  )
}

export default Register

