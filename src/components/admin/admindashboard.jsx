import React from "react"
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import AddEmployee from "../../ui/admin/addEmployee";
import SideBar from "./SideBar";
const admindashboard=(props)=>{
    return(
        <div >
         
           <SideBar />
           <Row>
            <br />
                        <Col md={{ span: 5, offset: 2 }}>
                        <h1>Welcome to PayRoll Admin Panel</h1>
                            </Col>
                            <Col md={{ span: 5, offset: 3 }}>
                            <div>
                            <img src="https://bootstrapmade.com/demo/templates/eNno/assets/img/hero-img.png" class="img-fluid" alt="" />
                            </div>
                            </Col>
                            </Row>
           
           
        </div>
    )
}
export default admindashboard