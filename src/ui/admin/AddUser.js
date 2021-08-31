import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Form, FormGroup, Input, Label, Container} from 'reactstrap'
import { Button, Col } from 'reactstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { Row } from 'react-bootstrap';
import SideBar from '../../components/admin/SideBar';
import Header from '../../components/admin/header';


 const AddUser=()=>{
     useEffect(() => {
         document.title = "Add users";
     }, []);

     const [user,setuser]=useState({});
    
    //formhandler function
    const handleForm=(e)=>{
        console.log(user);
        postDatatoServer(user);

        e.preventDefault();
    };
    

    //createing function to post data on server
    const postDatatoServer=(user)=>{
        axios.post(`http://localhost:8080/api/auth/signup`,user).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("User added successfully");


            },(error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong!");

            }


        )

    }
    
    return(
        <Fragment>
            <SideBar />
            
            <Row>
            <br />
                        <Col md={{ span: 8, offset: 3 }}>
                        <Link to='/emptable'><button type="button" class="btn btn-primary float-left ">Employee Table</button></Link>
                            </Col></Row>
            
            
                        
                            <center>
                                <br /><br />
            {/* <h2 className="text-center my-3"> User Details </h2> */}
            {/* <Form onSubmit={handleForm}>
            <Label sm={4}> User email</Label>

            <FormGroup row>
                
                    
                    <Col sm={6}>
                    <Input type="text" placeholder="Enter email" name="emailId" id="emailId" onChange={(e)=>{setuser({ ...user, emailId:e.target.value })} }  />
                    </Col>
                </FormGroup>



                <FormGroup>
                  
                    <Col >
                    <Label> User Name</Label>
                    <Input type="text" placeholder="Enter user name" name="name" id="name" onChange={(e)=>{setuser({ ...user, name:e.target.value})}} />
                    </Col>
                </FormGroup>

                <FormGroup>
                <Col >
                    <Label> User password</Label>
                    <Input type="password" placeholder="Enter password" name="password" id="password" onChange={(e)=>{setuser({ ...user, password:e.target.value })} }  />
                    </Col>
                </FormGroup>
               


                <Container className="text-center">
                    <Button type="submit" color="success">Add</Button>

                    <Button type="reset" color="warning ml-2" >
                            Clear</Button>
                </Container>


            </Form> */}
            <div className="col-4">
            
            <form name="login" id="login" onSubmit={handleForm} >
                                    <h3>Add Employee</h3>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="name" className="form-control" placeholder="Enter name" name="name" id="name" onChange={(e)=>{setuser({ ...user, name:e.target.value})}} required />
                                    </div><br />
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="Enter email" name="emailId" id="emailId" onChange={(e)=>{setuser({ ...user, emailId:e.target.value })} } required />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Enter password" name="password" id="password" onChange={(e)=>{setuser({ ...user, password:e.target.value })} } required />
                                    </div>
                                    <br />
                                    {/* <div className="form-group" >
                                        <label>Gender</label>
                                        <br />
                                        <input type="radio" id="html" name="fav_language" value="HTML" />&nbsp;
                                        <label for="html">Male</label>&nbsp; &nbsp;
                                        <input type="radio" id="css" name="fav_language" value="CSS" />&nbsp;
                                        <label for="css">Female</label>&nbsp; &nbsp;
                                        <input type="radio" id="javascript" name="fav_language" value="JavaScript" />&nbsp;
                                        <label for="javascript">Other</label>
                                    </div> */}

                                    <br />

                                    
                                    




                                    <button type="submit" className="btn btn-success btn-lg btn-block">Add Employee</button>


                                </form>
                                </div>
            </center>
           
            
        </Fragment>
     )
}

export default AddUser;