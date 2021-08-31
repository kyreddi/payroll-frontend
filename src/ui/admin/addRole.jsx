import { Container } from '@material-ui/core'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SideBar from '../../components/admin/SideBar'

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addResource, addRole } from "../../actions/useractions/userManagementAction";
import { Link } from 'react-router-dom';
import Header from '../../components/admin/header';


export default function AddRole(props){

    const dispatch=useDispatch();
   
    const [roleName,setRoleName]= useState("")
    
    


    const submitHandler = (event) =>{
        event.preventDefault();
        dispatch(addRole(roleName))

    }
    return (
        <div>
            <SideBar />
            
            <Row>
            <br />
                        <Col md={{ span: 8, offset: 3 }}>
                        <Link to='/roleslist'><button type="button" class="btn btn-primary float-left ">Roles Table</button></Link>
                            </Col></Row>
            <Container>
                            <Row>
                        <Col md={{ span: 5, offset: 5}}>
            {/* <h1>Add Role </h1> */}
            <form name="login" id="login" onSubmit={submitHandler} >
            <br />
            <br />
                <h3>Add Role</h3>
                <div className="form-group">
                    <label>Add Role</label><br />
                    
                    <input onChange={(event)=>setRoleName(event.target.value)}  type="roleName"  className="form-control" placeholder="Role name" required/>
                </div>
                
                <br />

                <button  type="submit" className="btn btn-dark btn-lg btn-block" >Add Role</button>&nbsp; &nbsp;
                {/* <button  type="submit" className="btn btn-dark btn-lg btn-block" >Role List<Link to='/addrole'></Link></button> */}
                {/* <Link to='/addrole'>Role List</Link> */}
                

            </form>
            </Col>
            </Row>
            </Container>
        </div>
    )
}
