import { CheckboxField, Label } from "@redwoodjs/forms"

const Checkbox = ({ name, label, ...rest }) => {
  return (
    <div className="field">
      <CheckboxField name={name} {...rest}/>
      <Label name={name}>{label}</Label>
    </div>
  )
}

export default Checkbox
