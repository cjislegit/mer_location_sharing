import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import { useForm } from '../../shared/hooks/form-hook';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from '../../shared/components/util/validators';
import Card from '../../shared/components/UIElements.js/Card';

import './AuthPage.css';

const AuthPage = () => {
  const [formState, inputHandler] = useForm({
    email: { value: '', isValid: false },
    password: { value: '', isValid: false },
  });

  const authSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <Card className='authentication'>
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        <Input
          id='email'
          element='input'
          type='emil'
          label='Email'
          onInput={inputHandler}
          validators={[VALIDATOR_EMAIL()]}
          errorText='Please enter a valid email'
        />
        <Input
          id='password'
          element='input'
          label='Password'
          onInput={inputHandler}
          validators={[VALIDATOR_MINLENGTH(7)]}
          type='password'
          errorText='Password must be at least 7 character'
        />
        <Button type='submit' disabled={!formState.isValid}>
          Login
        </Button>
      </form>
    </Card>
  );
};

export default AuthPage;
