import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../config/fire";
import { AuthContext } from "./Auth.js";
import { Container, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text, Form } from './SigninElements'

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/home2");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/home2" />;
  }

  return (
    <>
       <Container>
            <FormWrap>
                <Icon to="/">CAR Auction</Icon>
                <FormContent>
                    <Form onSubmit={handleLogin}>
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput name="email" type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput name="password" type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password ?</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  );
};

export default withRouter(Login);
