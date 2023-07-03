import { Input } from './../../components/Input';
import { Button } from './../../components/Button';

import { Link } from 'react-router-dom';

import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Form, Background } from './styles';

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Application to follow everything you watch!</p>

        <h2>Sign In</h2>

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input 
          placeholder="Password"
          type="password"
          icon={FiLock}
        />

        <Button title="Sign In"/>

        <Link to="/register">
          Create account
        </Link>


      </Form>

      <Background/>
    </Container>
  );
}