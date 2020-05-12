import React, { memo } from 'react';
import { Field } from 'formik';

// util
import { validation } from 'utils';

// component
import {
  Button,
  LeftSection,
  RightSection,
  FormBuilder,
  ErrorMessage,
} from './common';


const formikProps = {
  initialValues: { name: '', fields: [] },
  validationSchema: validation.addTemplateValidation,
  onSubmit(value, { setSubmitting, resetForm }) {
    console.log(value);
    setSubmitting(false);
    resetForm();
  }
};

// TODO: create separate component of this, add proptypes support.
function TemplateFields(props) {
  // eslint-disable-next-line react/prop-types
  const { form: { values }, push, remove } = props;
  return (
    <div className="fields-container">
      {/* eslint-disable-next-line react/prop-types */}
      {values.fields.map((field, i) => (
        <div className="field-wrapper">
          <Field className="form-control" name={`fields.${i}.label`} placeholder="Label" />
          <ErrorMessage name={`fields[${i}].label`} />
          <Field className="form-control" as="select" name={`fields.${i}.type`}>
            <option value="number">Number</option>
            <option value="other">Other</option>
          </Field>
          <Button title="Remove Field" onClick={() => remove(i)} />
        </div>
      ))}
      <Button title="Add Field" onClick={() => push({label: '', type: 'other'})}/>
    </div>
  );
}

const formFields=[
  { name: 'name', placeholder: 'Template name' },
  { name: 'description', as: 'textarea', rows: 5, placeholder: 'Template description' },
  { name: 'fields', field: 'FieldArray', component: TemplateFields}
];

function AddTemplate() {
  return (
    <div className="d-flex forgot-password">
      <LeftSection />
      <RightSection title="Add Template" withLogo={false}>
        <FormBuilder
          formikProps={formikProps}
          buttonTitle="Save"
          formFields={formFields}
        />
      </RightSection>
    </div>
  );
}

export default memo(AddTemplate);

