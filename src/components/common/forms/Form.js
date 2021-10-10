import React, { useReducer } from "react"
import FormFields from '../../common/formsComponents'
import Button from "../Button";


const reducer = (state, action) => {
  const { type, value } = action;
  let newState = {}
  newState[type] = value
  return {
    ...state,
    ...newState
  }
}

const Form = (props) => {
  const { fields, getInfo, buttonName, children } = props

  const { prueba, form } = props.styles || { undefined }

  let initialState = {}
  fields.forEach((field) => {
    initialState[field.id] = ''
  })

  const [state, dispatch] = useReducer(reducer, initialState);
  const handler = (data) => {
    dispatch({
      type: data.id,
      value: data.value
    })
  }

  const sendData = (e) => {
    getInfo ? getInfo(state, e) : console.log('No tenemos función');

  }

  return (
    <div>
      <form>
        <div className={form}>
          {fields.map((field) => (
            <FormFields
              key={field.id}
              id={field.id}
              fieldName={field.fieldName}
              fieldType={field.fieldType}
              parentClass={prueba}
              data={handler}
            />
          ))}
          <Button
            type='submit'
            handler={sendData}
          >
            {buttonName}
          </Button>
          {children}
        </div>
      </form>
    </div>
  )
}

export default Form