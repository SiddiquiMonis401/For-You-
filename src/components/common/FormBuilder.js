import React, { memo } from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import { Button, ErrorMessage } from 'components/common'

// props
import { FormBuilderProps } from 'props'

/*
   IMPORTANT: name must be same in all objects ie:(initialValues, formFields, etc)
1. formikProps support all valid formik props which is describe here https://jaredpalmer.com/formik/docs/api/formik#props
2. some formikProps are required ie:(initialValues, validationSchema, onSubmit)
3. field props is describing the name of field for now we only support two formik fields which is "Field" and "FieldArray" pass as a string
4. if formFields object haven't component key FormBuilder use root field props which is describe on number 3
5. formField's object support all Field and FieldArray props + className
   https://jaredpalmer.com/formik/docs/api/field#props || https://jaredpalmer.com/formik/docs/api/fieldarray
 */

// form-builder supports the following fields
const supportedFields = { Field, FieldArray }

function fieldsMapper (formFields, field) {
  return formFields.map(
    ({ name, field: cField, className, renderAs, selectOptions, ...rest }) => {
      const FieldComponent = supportedFields[cField || field]
      return (
        <div className='form-group w-100' key={name}>
          {renderAs === 'select' ? (
            <FieldComponent
              name={name}
              className={`form-control ${className}`}
              as={renderAs}
            >
              {selectOptions.map((items, i) => (
                <option key={i}>{items}</option>
              ))}
            </FieldComponent>
          ) : (
            <>
              <FieldComponent
                name={name}
                className={`form-control ${className}`}
                {...rest}
              />
              <ErrorMessage name={name} />
            </>
          )}
        </div>
      )
    }
  )
}

const FormBuilder = ({
  formikProps,
  field,
  formFields,
  buttonTitle,
  componentBeforeButton,
  componentAfterButton
}) => (
  <Formik {...formikProps}>
    {({ isSubmitting, isValid }) => (
      <Form>
        {fieldsMapper(formFields, field)}
        {componentBeforeButton}
        <Button
          type='submit'
          title={buttonTitle}
          loading={isSubmitting && isValid}
          block
        />
        {componentAfterButton}
      </Form>
    )}
  </Formik>
)

const { props, defaultProps } = FormBuilderProps
FormBuilder.propTypes = props
FormBuilder.defaultProps = defaultProps

export default memo(FormBuilder)
