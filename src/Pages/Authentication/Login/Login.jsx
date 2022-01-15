import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { mdiAccount, mdiFormTextboxPassword } from '@mdi/js';
import * as Yup from 'yup';

import { AuthContext } from '../../../Context/AuthContext';

import classes from './Login.module.css';

import InputTextWithIcon from '../../../Components/UI/Shared/Form/Inputs/InputTextWithIcon/InputTextWithIcon';
import Button from '../../../Components/UI/Shared/Button/Button';

const LoginSchema = Yup.object().shape({
  username: Yup.string().min(2, 'Too Short!').required('Required'),
  password: Yup.string().min(5, 'Too Short!').required('Required'),
});

const Login = (props) => {
  const { login, user } = useContext(AuthContext);

  return (
    <>
      {user ? (
        <Navigate to="/artists" />
      ) : (
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={async (values) => {
            await login(values);
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
                title="Login"
                className="primary center"
                style={{ margin: '10px auto', width: 100 }}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default Login;
