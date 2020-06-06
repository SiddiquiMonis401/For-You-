import React, { memo } from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { Row, Col } from 'react-bootstrap'
import { Field } from 'formik'

// styles
import './styles/ButtonsStyles.scss'

// Components
import { Button, ErrorMessage } from './common'

// propTypes
import { TemplateProps } from '../props'

function TemplateFields (props) {
  const {
    form: { values },
    push,
    remove
  } = props
  return (
    <div className='fields-container'>
      {/* eslint-disable-next-line react/prop-types */}
      {values.fields.map((field, i) => (
        <Row className='mb-4'>
          <Col md='6'>
            <Field
              className='form-control'
              name={`fields.${i}.label`}
              placeholder='Label'
            />
            <ErrorMessage name={`fields[${i}].label`} />
          </Col>
          <Col md='4'>
            <Field
              className='form-control'
              as='select'
              name={`fields.${i}.type`}
            >
              <option value='number'>Number</option>
              <option value='other'>Other</option>
            </Field>
          </Col>
          <Col md='2' className='text-right'>
            <Button
              variant='flat'
              size='sm'
              icon={<AiOutlineMinusCircle />}
              onClick={() => remove(i)}
            />
          </Col>
        </Row>
      ))}
      <div className='text-right'>
        <Button
          variant='flat'
          size='sm'
          icon={<AiOutlinePlusCircle />}
          onClick={() => push({ label: '', type: 'other' })}
        />
      </div>
    </div>
  )
}

const { propTypes, defaultProps } = TemplateProps

TemplateFields.propTypes = propTypes
TemplateFields.defaultProps = defaultProps

export default memo(TemplateFields)
