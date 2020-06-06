import React, { memo } from 'react'
// util
import { validation } from 'utils'

// component
import { LeftSection, RightSection, FormBuilder } from './common'
import NewTemplateFields from './TemplateFields'

// Styles
import './styles/ButtonsStyles.scss'

const formikProps = {
  initialValues: { name: '', fields: [] },
  validationSchema: validation.addTemplateValidation,
  onSubmit (value, { setSubmitting, resetForm }) {
    console.log(value)
    setSubmitting(false)
    resetForm()
  }
}

const formFields = [
  { name: 'name', placeholder: 'Template name' },
  { name: 'fields', field: 'FieldArray', component: NewTemplateFields },
  {
    name: 'description',
    as: 'textarea',
    rows: 5,
    placeholder: 'Template description'
  }
]

function AddTemplate () {
  return (
    <div className='d-flex forgot-password'>
      <LeftSection />
      <RightSection title='Add Template' withLogo={false}>
        <FormBuilder
          formikProps={formikProps}
          buttonTitle='Save'
          formFields={formFields}
        />
      </RightSection>
    </div>
  )
}

export default memo(AddTemplate)
