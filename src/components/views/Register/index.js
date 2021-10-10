import React from 'react'
import Form from '../../common/forms/Form'

const fields = [
  {
    id: 'elderlyName',
    fieldName: 'Nombre de la fundación',
    fieldType: 'text'
  },
  {
    id: 'address',
    fieldName: 'Dirección',
    fieldType: 'text'
  },
  {
    id: 'city',
    fieldName: 'Ciudad',
    fieldType: 'text'
  },
  {
    id: 'email',
    fieldName: 'Correo electrónico',
    fieldType: 'email'
  },
  {
    id: 'whatsapp',
    fieldName: 'Whatsapp',
    fieldType: 'text'
  }
  
]


const Register = () => {
  return (
    <div>
      <Form
        fields={fields}
        buttonName='Conecta'
      />
    </div>
  )
}

export default Register
