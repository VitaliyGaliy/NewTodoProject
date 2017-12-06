import React, { Component } from 'react'
import { v4 } from 'node-uuid'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  }
  if (!values.description) {
    errors.description = 'Required'
  }
  return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div className='formsItem'>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>))}
    </div>
  </div>
)

class ContactForm extends Component {

  submit = ({ title, description }) => {
    const date = new Date().toISOString().substring(0, 10);
    this.props.addTodo({ title, description, id:v4(), created_at:date })
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="formWrapper">
        <form onSubmit={handleSubmit(this.submit)}>
          <Field name="title" type="text" component={renderField} label="Title" />
          <Field name="description" type="text" component={renderField} label="Description" />
          <button className='formsButton btn dtn-primary' type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

ContactForm = reduxForm({
  form: 'contact',
  validate
})(ContactForm)

export default ContactForm
