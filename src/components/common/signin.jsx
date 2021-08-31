import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignin } from "../../actions/useractions/useraction";

import "../../css/signin.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Col, Row } from "react-bootstrap";


import {Image} from "react-bootstrap";
import login from "../../asserts/images/login.jpg"
import axios from "axios";
import { useHistory } from "react-router-dom";


const SignIn = (props) => {

    const dispatch = useDispatch();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const userSignIn = useSelector(state => state.userSignin)
    const [roleData, setRoleData] = useState();
    const { loading,error,userInfo } = userSignIn

    useEffect(() => {
      axios
        .get("http://backendpostupdate-env.eba-3u73qfgk.ap-south-1.elasticbeanstalk.com/api/access/viewAllRoles")
        .then((response) => {
          setRoleData(response.data);
        });
    }, []);
  
    //  const history = useHistory();
    const routeUser = () => {
      if (userInfo && roleData) {
        roleData.map((item, idx) => {
          if (userInfo.authorities[0].authority.charAt(1) == item.roleID) {
            switch (item.roleName) {
              case "superadmin":
                props.history.push("/admindashboard");
                break;
              case "admin":
                props.history.push("/admindashboard");
                break;
              case "user":
                props.history.push("/userdashboard");
                break;
              default:
                props.history.push("/signin");
                break;
            }
          }
        });
      }
    };



    const submitHandler = async(event) => {
        event.preventDefault();
       await  dispatch(userSignin(username, password))
       routeUser();
        
    }

    // useEffect(() => {
    //     if (userInfo) {
          
            
    //         props.history.push("/admindashboard")
             
    //     }
    // }, [props.history, userInfo, dispatch])
    

    return (
        <>
        {/* <Row className="landing">
        <Col ><LeftSide /></Col>
        
        <Col ><RightSide /></Col>
      </Row> */}

<div className="Login">
<Row><Col>
<br /><br /><br /><br /><br />
      <Form onSubmit={submitHandler}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            
          />
        </Form.Group>
        <br />
        <center>
        <Button block size="lg" type="submit" >
          Login
        </Button>
        </center>
      </Form>
      </Col>
      <Col>
      <div>
           <Image src={login} thumbnail style={{border:"none"}} /> 
           
        </div>
      </Col>

      </Row>
    </div>
    

    
        </>
    )
}
export default SignIn;