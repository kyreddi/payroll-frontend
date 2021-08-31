import React from 'react'
import { Col, Row } from 'reactstrap'
import UserSideBar from './UserSideBar'

const UserDashboard = () => {
    return (
        <div>
            <UserSideBar />
           <Row>
            <br />
                        <Col md={{ span: 8, offset: 3 }}>
                        <h1>welcome user Dashboard</h1>
                            </Col></Row>
            
            
        </div>
    )
}

export default UserDashboard
