import React,{useState} from 'react'
import { Container,Form,Button,Row,Col} from 'react-bootstrap'
import Nav1 from './Nav1'
import {registerUser} from './config/Myservice';
import { useNavigate } from 'react-router';
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
export default function Register() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [cpassword, setCpassword] = useState('');
    let [name, setName] = useState('');
    let [mobile, setMobile] = useState('');
    let [address, setAddress] = useState('');
    const navigate = useNavigate();
    const register= ()=>{
        let data = {name:name,email:email,mobile:mobile,address:address,password:password};
        registerUser(data)
        .then(res=>{
            if(res.data.err){
                alert(res.data.err)
            }
            else{
            alert(res.data.msg)
            navigate('/login')
            }
        });
            
    }
    return (
        <Container>
        <Nav1/>
        <Container className="mt-5">
            <h4>Register </h4>
        <Form>
        <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                Name
                </Form.Label>
                <Col sm="10">
                <Form.Control  type="text" placeholder="Enter Name" name="name" onChange={(e)=>{setName(e.target.value)}}/>
                {name!='' && name.length < 4 && <span className="text-danger">Enter Name correctly</span>}
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                Email
                </Form.Label>
                <Col sm="10">
                <Form.Control  type="text" placeholder="Enter Emailid" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                {email!='' && !regForEmail.test(email) && <span className="text-danger">Enter email  correctly</span>}
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                Mobile
                </Form.Label>
                <Col sm="10">
                <Form.Control  type="number" placeholder="Enter mobile number" name="mobile" onChange={(e)=>{setMobile(e.target.value)}}/>
                {mobile!='' && mobile.length !== 10 && <span className="text-danger">Enter Mobile number correctly</span>}
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2">
                Address
                </Form.Label>
                <Col sm="10">
                <Form.Control  type="text" placeholder="Enter Address" name="address" onChange={(e)=>{setAddress(e.target.value)}}/>
                {address!='' && address.length < 10 && <span className="text-danger">Enter Address correctly</span>}
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
            <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm="2">
                Confirm Password
                </Form.Label>
                <Col sm="10">
                <Form.Control type="password" placeholder="Confirm Password" name="cpassword" onChange={(e)=>{setCpassword(e.target.value)}} />
                {cpassword!='' && cpassword != password && <span className="text-danger">Passwords doesn't match</span>}
                </Col>
            </Form.Group>
            <Button variant="primary" onClick={register}>Register</Button>
            
            </Form>
        </Container>
    </Container>
    )
}
