import { useState, useEffect, useRef } from "react"
import { Toast, ToastContainer } from "react-bootstrap"

function ToastComponent(props: any) {
  return (
    <ToastContainer position="bottom-end" className="p-4">
      <Toast show={props.show} onClose={props.onClose} animation={true}>
        <Toast.Header>
          <img src="https://via.placeholder.com/20x20?text=B" className="rounded me-2" alt="" />
          <strong className="me-auto">Brainy</strong>
          <small>agora mesmo</small>
        </Toast.Header>
        <Toast.Body>Login realizado com sucesso!</Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

export default ToastComponent