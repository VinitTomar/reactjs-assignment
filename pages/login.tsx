import { Form, Formik } from "formik";
import { NextPage } from "next";
import Card from "../components/card";
import Input from "../components/input";

type LoginModel = {
  name: string
  pass: string
}

const Login: NextPage = () => {
  const validate = (value:LoginModel) => {
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
    <Card label="Login">
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
          <Form>
            <Input type="text" label="name" name="name" id="name"></Input>
            <Input type="password" label="password" name="pass" id="pass"></Input>
            <button type="submit" disabled={isSubmitting} className="w-full rounded-md py-1 bg-indigo-500 text-white">Login</button>
          </Form>
        
        )}
      </Formik>
    </Card>
  );
}

export default Login;