
import './App.css';
import app from './firebase.init';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [registered, setRegistered] = useState('')
  const handleRegisteredChanged = event => {
    setRegistered(event.target.checked)
  }
  const handleEmailBlur = event => {
    setEmail(event.target.value)
  }
  const handlePasswordBlur = event => {
    setPassword(event.target.value)
  }
  const handleForgetPassword = () =>{
    sendPasswordResetEmail(auth , email)
    .then(()=>{
      console.log('sent email')
    })
  }
  const handleFormSubmit = event => {

    if (registered) {
      signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user) 
        })
        .catch(error => {
          console.error(error)
        })
    }
    else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user)
          setEmail('');
          setPassword('')
          verifyEmail()
        })
        .catch(error => {
          console.error(error)
        })
    }

    event.preventDefault();
  }
  const verifyEmail = () =>{
    sendEmailVerification(auth.currentUser)
    .then(()=>{
      console.log('Email verification sent')
    })
  }
  return (
    <div>
      <div className="registration w-50 mx-auto mt-5">
        <h1 className='text-primary'>Please {registered ? 'login' : 'register'}!!</h1>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handleRegisteredChanged} type="checkbox" label="Already Registered" />
          </Form.Group>
          <Button onClick={handleForgetPassword} variant="link">Forget pssword?</Button>
          <br />
          <Button variant="primary" type="submit">
            {registered ? 'Login' : 'Register'}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
