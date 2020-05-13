import React, { memo } from 'react';
import { Field } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'react-bootstrap';

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

// TODO:
//  1. create separate component of this, add proptypes support,
//  2. Remove inline styles
function TemplateFields(props) {
  // eslint-disable-next-line react/prop-types
  const { form: { values }, push, remove } = props;
  return (
    <div className="fields-container">
      {/* eslint-disable-next-line react/prop-types */}
      {values.fields.map((field, i) => (
        <Row className="mb-4">
          <Col md="6">
            <Field className="form-control" name={`fields.${i}.label`} placeholder="Label" />
            <ErrorMessage name={`fields[${i}].label`} />
          </Col>
          <Col md="4">
            <Field className="form-control" as="select" name={`fields.${i}.type`}>
              <option value="number">Number</option>
              <option value="other">Other</option>
            </Field>
          </Col>
          <Col md="2" className="text-right">
            <Button
              fab
              style={{ marginTop: '10px' }}
              size="sm"
              icon={<FontAwesomeIcon icon="minus" />}
              onClick={() => remove(i)}
            />
          </Col>
        </Row>
      ))}
      <div className="text-right">
        <Button
          fab
          size="sm"
          style={{ margin: '20px 0' }}
          icon={<FontAwesomeIcon icon="plus" />}
          onClick={() => push({label: '', type: 'other'})}
        />
      </div>
    </div>
  );
}

const formFields=[
  { name: 'name', placeholder: 'Template name' },
  { name: 'fields', field: 'FieldArray', component: TemplateFields},
  { name: 'description', as: 'textarea', rows: 5, placeholder: 'Template description' }
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

