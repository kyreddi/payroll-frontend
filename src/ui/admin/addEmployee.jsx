import React from "react";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { getRoles } from "../../actions/useractions/userManagementAction";
import Header from "../../components/admin/header";
import SideBar from "../../components/admin/SideBar";




export default function AddEmployee() {
    const dispatch = useDispatch()
    const roleList = useSelector(state => state.roleList);
    const { loading, roles, error } = roleList


    useEffect(() => {
        dispatch(getRoles())
    }, [dispatch])





    return (
        <>
        <SideBar />
        
        <Row>
            <br />
                        <Col md={{ span: 8, offset: 3 }}>
                        <Link to='/emptable'><button type="button" class="btn btn-primary float-left ">Employee Table</button></Link>
                            </Col></Row>
        <br />
            <br />
            <br />
            {loading ? <div>loading...</div> : error ? <div>Error...</div> : roles ?
                < center >
                    <div className="signin_container col-4">
                        <div className="signin_box" id="signin_flow">

                            <div id="signin_div">
                                <form name="login" id="login" >
                                    <h3>Invite Employee</h3>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="name" className="form-control" placeholder="Enter name" required />
                                    </div><br />
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="Enter email" required />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label>mobile</label>
                                        <input type="number" className="form-control" placeholder="Enter mobile number" required />
                                    </div>
                                    <br />
                                    <div className="form-group" >
                                        <label>Gender</label>
                                        <br />
                                        <input type="radio" id="html" name="fav_language" value="HTML" />&nbsp;
                                        <label for="html">Male</label>&nbsp; &nbsp;
                                        <input type="radio" id="css" name="fav_language" value="CSS" />&nbsp;
                                        <label for="css">Female</label>&nbsp; &nbsp;
                                        <input type="radio" id="javascript" name="fav_language" value="JavaScript" />&nbsp;
                                        <label for="javascript">Other</label>
                                    </div>

                                    <br />

                                    <div className="form-group">
                                        <label>Role</label>
                                        <select>
                                            {roles.map(role => (
                                                <option>{role.roleName}</option>
                                            ))}


                                        </select>
                                    </div>
                                    <br />




                                    <button type="submit" className="btn btn-dark btn-lg btn-block">invite</button>


                                </form>
                            </div>

                        </div>

                    </div>
                </center>

                : null}
        </>



        


        
           
        
    )
}