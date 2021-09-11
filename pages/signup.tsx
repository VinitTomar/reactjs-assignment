import { Form, Formik } from "formik";
import { NextPage } from "next";
import Card from "../components/card";
import Input from "../components/input";

type SignupModel = {
  name: string
  pass: string
}

const Signup: NextPage = () => {
  const validate = (value:SignupModel) => {
    const error: any = {};
    const { name, pass } = value;
    if (!name) {
      error.name = 'Name is required';
    }

    if (!pass) {
      error.pass = 'Password is required';
    }
    return error;
  }

  return (
    <Card label="Signup" className="from-green-400 via-indigo-500 to-blue-500">
      <Formik
        initialValues={{
          name: '',
          pass: ''
        }}
        validate={validate}
        onSubmit={
          (value,{setSubmitting}) => {
            console.log({value})
          }
        }
      >
        {({isSubmitting}) => (
          <Form className="w-full">
            <Input type="text" label="name" name="name" id="name"></Input>
            <Input type="password" label="password" name="pass" id="pass"></Input>
            <button type="submit" disabled={isSubmitting} className="w-full rounded-md py-1 bg-indigo-500 text-white">Signup</button>
          </Form>
        
        )}
      </Formik>
    </Card>
  );
}

export default Signup;