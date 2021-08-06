import React from 'react';
import { NavLink } from 'react-router-dom';
import { UseInput } from '../../hook/use-input';
import { Card } from '../UI/Card';
import classes from './Form.module.css';

const regExpEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const regExpPassword = /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i;

const emailValidate = (validate) => validate.match(regExpEmail);
const passwordValidate = (value) => value.match(regExpPassword);
const validate = (validate) => validate.trim() !== '';

export function Form() {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = UseInput(validate);
  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = UseInput(validate);
  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = UseInput(emailValidate);
  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = UseInput(passwordValidate);

  let formIsValid = false;

  if (emailIsValid && firstNameIsValid && lastNameIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();
    resetPassword();
  };

  const firstNameClasses = firstNameHasError
    ? `${classes.invalid} ${classes.control}`
    : classes.control;

  const lastNameClasses = lastNameHasError
    ? `${classes.invalid} ${classes.control}`
    : classes.control;

  const emailClasses = emailHasError
    ? `${classes.invalid} ${classes.control}`
    : classes.control;

  const passwordClasses = passwordHasError
    ? `${classes.invalid} ${classes.control}`
    : classes.control;

  return (
    <Card className={classes.cont}>
        <div className={classes.btn_link}>
          <NavLink to='/'>home</NavLink>
        </div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={firstNameClasses}>
          <input
            type='text'
            placeholder='first Name'
            id='firstName'
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className={classes.error}>please entered a valid first Name</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <input
            type='text'
            placeholder='Last Name'
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className={classes.error}>please entered a valid last name</p>
          )}
        </div>
        <div className={emailClasses}>
          <input
            type='text'
            id='email'
            placeholder='Email'
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className={classes.error}>
              please entered a valid email address
            </p>
          )}
        </div>
        <div className={passwordClasses}>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordHasError && (
            <p className={classes.error}>
              The password must be at least 8 digits long, <br /> including a number
            </p>
          )}
        </div>
        <div className={classes.btn}>
          <button disabled={!formIsValid}>Create New Account</button>
        </div>
      </form>
    </Card>
  );
}
