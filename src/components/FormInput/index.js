import { Form } from 'react-bootstrap'

export const Input = ({name, placeholder, type, control, children}) => (
  <Form.Group controlId={name}>
    <Form.Control
      data-testid={name}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={control.handleChange}
      value={control.values[name]}
      onBlur={control.handleBlur}
    />
    {children}
    {control.errors[name] && control.touched[name]
      ?
        <Form.Text className="text-muted error">
          {control.errors[name]}
        </Form.Text>
      : null
    }
  </Form.Group>
)

export class InputGenerator {
  constructor(name, placeholder, ctrl, type=name){
   this.name = name
   this.type = type
   this.placeholder = placeholder
   this.control = ctrl
  }
}

/*
export const Input = ({name, placeholder, type, control}) => (
  <Form.Group controlId={name}>
    <Form.Control
      data-testid={name}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  </Form.Group>
)
*/
