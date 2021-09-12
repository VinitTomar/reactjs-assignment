import { Form, Formik } from "formik";
import { NextPage } from "next";
import { useState } from "react";
import Card from "../components/card";
import Input from "../components/input";

interface SignupModel {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

type ValidationError = Partial<{
  [Property in keyof SignupModel]: any;
}>;

type setSubmitting = {
  setSubmitting: (val: boolean) => void
}

type CancelableResolver = (val: 'canceled') => 'canceled';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const emailUsed = async (email: string) => {
  await sleep(2000);
  return ['abc@mail.com', 'abc2@mail.com', 'abc3@mail.com'].includes(email);
}

const Signup: NextPage = () => {
  const [isValidatingEmail, setIsValidatingEmail] = useState('');

  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  };

  let cancelPromise:CancelableResolver = (val:'canceled') => val ;


  const fullNameValidator = (fullName: string) => {
    if (!fullName) {
      return 'Full Name is required';
    }
  }

  const emailValidator = async (email: string) => {
    if (!email) {
      setIsValidatingEmail('');
      return 'Email is required';
    }

    cancelPromise('canceled');
    setIsValidatingEmail('checking email availability');
    const isEmailUsed: boolean | 'canceled' | unknown =
      await Promise.race([
        new Promise((resolve: any) => cancelPromise = resolve),
        emailUsed(email)
      ]);
    
    if (isEmailUsed) {
      setIsValidatingEmail('');
      return 'Email is already used';
    }
    
    if (isEmailUsed !== 'canceled') {
      setIsValidatingEmail('');
    }

  }

  const passwordValidator = (password: string) => {
    if (!password) {
      return 'Password is required';
    }
  }

  const phoneNumberValidator = (phoneNumber: string) => {
    if (!phoneNumber) {
      return 'Phone number is required';
    }
  }

  const validate = async (value:SignupModel) => {
    const error: ValidationError = {};
    const { password, confirmPassword } = value;
    
    if (!confirmPassword) {
      error.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      error.confirmPassword = 'Confirm Password did not match password';
    }

    return error;
  }

  const onSubmit = (value:SignupModel,{setSubmitting}:setSubmitting) => {
    console.log({ value });
    setTimeout(() => {
      setSubmitting(true);
    }, 400);
  }

  return (
    <Card label="Signup" className="from-green-400 via-indigo-500 to-blue-500">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({isSubmitting, isValidating}) => (
          <Form className="w-full">
            <Input type="text" label="full name" name="fullName" validate={fullNameValidator}></Input>
            <Input type="email" label="email" name="email" validate={emailValidator} isValidating={isValidatingEmail}></Input>
            <Input type="password" label="password" name="password" validate={passwordValidator}></Input>
            <Input type="password" label="confirm password" name="confirmPassword" validate={passwordValidator}></Input>
            <Input type="tel" label="phone number" name="phoneNumber" validate={phoneNumberValidator}></Input>
            <button type="submit" disabled={isSubmitting || isValidating} className="w-full rounded-md py-1 bg-indigo-500 text-white">Signup</button>
          </Form>
        )}
      </Formik>
    </Card>
  );
}

export default Signup;