import React, { memo } from 'react';
import { GiCancel } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';

// propTypes
import { UserFormProps } from '../props';

// components
import { Button, Spacer, FormBuilder } from './common';
import { validation } from '../utils';
// styles
import './styles/UserForm.scss';

function UserForm ({ onClick }) {
  const dispatch =  useDispatch();
  const userData = useSelector(state => state.UserReducer);
  console.log(userData);
  const formikProps = {
    initialValues: {
      name: '',
      email: '',
      contactNumber: '',
      clothType: 'Sherwani'
    },
    validationSchema: validation.UserFormValidation,
    onSubmit (values , { setSubmitting,resetForm }) {
      console.log(values);
      dispatch({type:'Add_User',payload:values});
      setSubmitting(false);
      resetForm({});
    }
  }
  const formFields = [
    { name: 'name', placeholder: 'Please enter the user name' },
    { name: 'email', placeholder: 'Please enter the user email' },
    { name: 'contactNumber', placeholder: 'Please enter the user contact' },
    {name: 'clothType', renderAs: 'select', selectOptions:['Sherwani','Kurta']   }
  ];

  return (
    <div className='user-form'>
      <div className='my-2 container-fluid  '>
        <div className='user-form-header row d-flex  align-items-center'>
          <div className='col-3 '>
            <h3 className='m-0'>User Form</h3>
          </div>
          <Spacer />
          <div className='col-3 d-flex justify-content-end'>
            <Button icon={<GiCancel />} onClick={onClick} />
          </div>
        </div>
      </div>
      <div className='container'>
        <FormBuilder
          formikProps={formikProps}
          formFields={formFields}
          buttonTitle='AddUser'
        />
      </div>
    </div>
  );
}

const { propTypes, defaultProps } = UserFormProps;

UserForm.propTypes = propTypes;
UserForm.defaultProps = defaultProps;

export default memo(UserForm);
