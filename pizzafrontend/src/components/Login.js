import React,{useState} from 'react'
import { Container,Form,Row,Col,Button } from 'react-bootstrap'
import Nav1 from './Nav1';
import {loginUser} from './config/Myservice';
import { useNavigate } from 'react-router';
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
export default function Login() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const navigate = useNavigate();
    const login= ()=>{
        let data = {email:email, password:password};
        loginUser(data)
        .then(res=>{
            if(res.data.err){
                alert(res.data.err)
            }
            else{
            alert(res.data.msg)
            console.log(res.data)
            localStorage.setItem("_token",res.data.token);
            sessionStorage.setItem("user", email);
            navigate('/dashboard')
            }
        });
            
    }
    return (
        <Container>
            <Nav1/>
            <Container className="mt-5">
                <h4>Login </h4>
            <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">
                    Email
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control  type="text" placeholder="Enter Emailid" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    {email!='' && !regForEmail.test(email) && <span className="text-danger">Enter email  correctly</span>}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                    Password
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="password" placeholder="Password" name="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    {password!='' && password.length < 8 && <span className="text-danger">Enter password  correctly</span>}
                    </Col>
                </Form.Group>
                <Button variant="primary" onClick={login}>Login</Button>
                </Form>
            </Container>
        </Container>
    )
}
