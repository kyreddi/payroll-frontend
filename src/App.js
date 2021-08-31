import React,{useState,createContext} from 'react'
import { BrowserRouter,Link,Route,Switch } from 'react-router-dom';
import admindashboard from './components/admin/admindashboard';
import Home from './components/common/homecomponent';
import SignIn from './components/common/signin';
import './App.css';
import addEmployee from './ui/admin/addEmployee';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Header from './components/admin/header';
import { Nav, Navbar, Row } from 'react-bootstrap';
import SideBar from './components/admin/SideBar';
import EmployeeTable from './ui/admin/EmployeeTable';

import AddRole from './ui/admin/addRole';
import RolesList from './ui/admin/RolesList';
// import RolesWithPermission from './ui/admin/RolesWithPermission';
import UpdatePermissions from './ui/admin/RolesWithPermission';

import UserComponent from './ui/admin/UserListComponent';
import AddUser from './ui/admin/AddUser';
import UserDashboard from './ui/user/UserDashboard';
import UserSideBar from './ui/user/UserSideBar';
// import EditRoleTable from './ui/admin/EditRoleTable';



function App() {
  return (
    <>
    
      <BrowserRouter>
      
      <nav className="navbar dark navbar-expand-lg navbar-light fixed-top d-flex justify-content-between">
      <Header />
      
      </nav>




      {/* <Home /> */}
      <Switch>
      
      <Route exact path="/usersidenavbar" component={UserSideBar} />
      <Route exact path="/adduser" component={AddUser} />
      <Route exact path="/userdashboard" component={UserDashboard} />
      {/* <Route exact path="/editrole" component={EditRoleTable} /> */}
      <Route exact path="/RolesWithPermission" component={UpdatePermissions} />
      <Route exact path="/addrole" component={AddRole} />
      <Route exact path="/emptable" component={UserComponent} />
        {/* <Route exact path="/emptable" component={EmployeeTable} /> */}
        <Route exact path="/sidenavbar" component={SideBar} />
        <Route exact path="/roleslist" component={RolesList} />
        <Route exact path="/addemp" component={addEmployee} />
        <Route exact path="/" component={Home} />
        
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/admindashboard" component={admindashboard} />
        
      </Switch>
      </BrowserRouter>
      
    </>
  );
}

export default App;
