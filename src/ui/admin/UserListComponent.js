import React from 'react';
import UserListService from './UserListService';


import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from '../../components/admin/SideBar';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';
import { Col, Row } from 'react-bootstrap';

class UserComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }


    componentDidMount(){
        UserListService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            <div>
                <SideBar />
                <Row>
                        <Col md={{ span: 8, offset: 3 }}>
                
                <h3 className = "text-center"> Employee Table</h3>
                <Link to='/adduser'><button type="button" class="btn btn-primary float-right">Add Employee</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/addemp'><button type="button" class="btn btn-primary float-left ">Invite Employee</button></Link>
                {/* <button type="button" class="btn btn-primary float-right"> <i class="fa fa-home"></i> Add User<Link to='/addemp'></Link></button> */}
                {/* <Link to='/addRole'><Button variant="outline-success">Add Role</Button></Link> */}
                <br></br>
                <br></br>
              
                <div class="row ">

                <div class="col " >
                <table className = "table table-bordered text-center">
                    <thead class="thead-dark"> 
                        <tr>

                            <th> User Id</th>
                            <th> User Name</th>
                            <th> User Email</th>
                           
                            <th>Actions</th>

                         
                           
                        </tr>

                    </thead>
                    
                    <tbody >
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.id}>
                                     <td> {user.id}</td>   
                                     <td> {user.name}</td>   
                                     <td> {user.emailId}</td>                              
                                     <td>
                                     
            <button type="button" class="btn btn-primary btn-rounded btn-sm m-2">Edit </button>
            <button type="button" class="btn btn-danger btn-rounded btn-sm m-0">Delete </button>
          </td>
   
                                    
                                </tr>
                            )
                        }

                    </tbody>
                  
                </table>
                </div>
                </div>
                </Col>
                </Row>

            </div>

        )
    }
}

export default UserComponent