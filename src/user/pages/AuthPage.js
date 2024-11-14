import React, { useState } from 'react';

import Input from '../../shared/components/FormElements/Input';
import { useForm } from '../../shared/hooks/form-hook';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/components/util/validators';
import Card from '../../shared/components/UIElements.js/Card';

import './AuthPage.css';

const AuthPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: { value: '', isValid: false },
      password: { value: '', isValid: false },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        { ...formState.inputs, name: undefined },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <Card className='authentication'>
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element='input'
            id='name'
            type='text'
            label='Your Name'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a name'
            onInput={inputHandler}
          />
        )}
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
          {isLoginMode ? 'Login' : 'SIGNUP'}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
      </Button>
    </Card>
  );
};

export default AuthPage;
