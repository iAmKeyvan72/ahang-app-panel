import React from 'react';
import { Formik, Form } from 'formik';
import { mdiAccount, mdiFormTextboxPassword } from '@mdi/js';
import * as Yup from 'yup';

import classes from './Signup.module.css';

import InputTextWithIcon from '../../../Components/UI/Shared/Form/Inputs/InputTextWithIcon/InputTextWithIcon';
import Button from '../../../Components/UI/Shared/Button/Button';

const SignupSchema = Yup.object().shape({
  username: Yup.string().min(2, 'Too Short!').required('Required'),
  password: Yup.string().min(8, 'Too Short!').required('Required'),
});

const Signup = (props) => {
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        await new Promise((resolve) =>
          setTimeout(resolve(alert(JSON.stringify(values))), 2000)
        );
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <InputTextWithIcon
            type="text"
            icon={mdiAccount}
            name="username"
            id="username"
            placeholder="Enter your username"
          />
          <InputTextWithIcon
            type="password"
            icon={mdiFormTextboxPassword}
            name="password"
            id="password"
            placeholder="Enter your password"
            style={{ margin: '20px 0' }}
          />
          <Button
            type="submit"
            disabled={isSubmitting || !isValid}
            title="Signup"
            className="primary center"
            style={{ margin: '10px auto', width: 100 }}
          >
            Signup
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Signup;
