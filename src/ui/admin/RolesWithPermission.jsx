import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Checkbox } from '@material-ui/core';
import SideBar from '../../components/admin/SideBar';

const useStyles = makeStyles({
  table: {
    width:200,
    height:300,
},
  padding:{
      padding:'5% 30%'
  }
});

function createData(name,FULL_ACCESS, CanAdd, CanUpdate, CanDelete, CanView) {
  return { name,FULL_ACCESS, CanAdd, CanUpdate, CanDelete, CanView};
}

const checkBox = () => {
    return(
        <>
    <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />,
    </>
    );
}
const rows = [
    createData('Product Service',
             <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
             <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
            <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
            <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
            <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
            ),
    createData('User Service',
            <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
            <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           ),
    createData('Teste Service',
            <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
            <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           ),
    createData('UserManagment Services',
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           <Checkbox  inputProps={{ 'aria-label': 'primary checkbox' }}  color="primary" />, 
           ),




];
console.log(rows)

function RolesWithPermission() {
  const classes = useStyles();

  return (
    
      <div class="main"> 
      <SideBar />
      <TableContainer component={Paper} className={classes.padding}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Resource Name</b></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">Full Access</TableCell>
            <TableCell align="right">ADD</TableCell>
            <TableCell align="right">UPDATE</TableCell>
            <TableCell align="right">DELETE</TableCell>
            <TableCell aligh="right">VIEW</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.roleName}</TableCell>
              <TableCell align="right">{row.FULL_ACCESS}</TableCell>
              <TableCell align="right">{row.CanAdd}</TableCell>
              <TableCell align="right">{row.CanUpdate}</TableCell>
              <TableCell align="right">{row.CanDelete}</TableCell>
              <TableCell align="right">{row.CanView}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <br></br>
      <center>
      <button type="button" class="btn btn-primary" align="center">Submit</button>
      </center>
    </TableContainer>
    
      
      </div>

     
    
    


  );
}

export default RolesWithPermission;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { openResourcesTab, openRolesTab } from "../../redux/DashboardSlice";

// const UpdatePermissions = ({ resources, roleList }) => {
//   const getPermissionsURL =
//     "http://localhost:8080/api/access/getPermissionsByRoleName/";
//   const storedRoleData = useSelector((state) => state.roleData);
//   const [response, setResponse] = useState();

//   const [permissions, setPermissions] = useState({
//     resourceId: "",
//     roleId: "",
//     canAdd: false,
//     canDelete: false,
//     canEdit: false,
//     canView: false,
//     id: "",
//   });

//   const dispatch = useDispatch();
//   const [roleName, setRoleName] = useState("");
//   const [fetchedRolePermissions, setFetchedPermissions] = useState();
//   const permissionList = new Array();

//   const history = useHistory();
//   const [returnedTarget, setReturnedTarget] = useState();

//   const [tablePerm, setTablePerm] = useState();

//   const accessToken = localStorage.getItem("token");

//   const config = {
//     headers: { Authorization: `Bearer ${accessToken}` },
//   };

//   const finalList = new Array();

//   const [request, setRequest] = useState([]);

//   useEffect(() => {
//     createPermissionList();
//     setPermissions({ ...permissions, roleId: storedRoleData.id });
//     fetchAllRolePermissions();
//   }, []);

//   const createPermissionList = () => {
//     for (const resourceItem in resources) {
//       const id = parseInt(resourceItem);
//       permissionList.push({
//         ...permissions,
//         resourceId: id + 1,
//       });
//       console.log(permissionList);
//     }
//   };

//   const fetchAllRolePermissions = () => {
//     axios
//       .get("http://localhost:8080/api/access/viewAllRolePermissions")
//       .then((response) => {
//         setFetchedPermissions(response.data);
//         console.log(response.data);
//         // hydratePermissions();
//       });
//   };

//   const updatePermsURL =
//     "http://localhost:8080/api/access/updatepermissionsByRoleID";

//   const postHandler = async () => {
//     const filteredPermissions = fetchedRolePermissions.filter((perms) => {
//       return perms.roleId === storedRoleData.id;
//     });

//     console.log(filteredPermissions);
//     const requestBody = {
//       roleName: storedRoleData.name,
//       permissionList: [...filteredPermissions],
//     };

//     console.log(requestBody);
//     await axios.put(updatePermsURL, requestBody, config).then((response) => {
//       console.log(response.data);
//       setResponse(response.data);
//     });
//   };
//   const localData = localStorage.getItem("temp");

//   return (
//     <div className="items-start w-screen">
//       <div className="h-full -my-6  w-8/12 ml-6">
//         <form
//           className="space-y-8 bg-white shadow-xl rounded p-10 mb-4 border-2 w-full"
//           onSubmit={(e) => {
//             e.preventDefault();
//             postHandler();
//           }}
//         >
//           <div className="flex justify-between">
//             <p className="mb-2 font-semibold text-2xl text-black">
//               Update Permissions
//             </p>

//             <svg
//               className="w-6 h-6 cursor-pointer"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//               // onClick={() => {
//               //   dispatch(openRolesTab());
//               // }}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               ></path>
//             </svg>
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-md font-bold mb-2 text-left"
//               for="role"
//             >
//               Role Name{" "}
//               <p className="text-lg uppercase">{storedRoleData.name}</p>
//             </label>
//             <p
//               className={
//                 response === "success"
//                   ? "text-lg bg-green-400 font-bold uppercase"
//                   : "hidden"
//               }
//             >
//               Permissions Updated!
//             </p>
//           </div>

//           <div className="rounded py-4 bg-gray-200">
//             <p className="text-left mb-2 font-semibold text-xl text-gray-700 px-6">
//               Permissions
//             </p>

//             <table className="w-full">
//               <thead>
//                 <tr className="font-bold text-md bg-gray-300 items-center">
//                   <td className="px-2">Id</td>
//                   <td className="px-2">Resource Name</td>
//                   <td className="px-2">View</td>
//                   <td className="px-2">Add</td>
//                   <td className="px-2">Edit</td>
//                   <td className="px-2">Delete</td>
//                 </tr>
//               </thead>
//               <tbody>
//                 {resources === undefined
//                   ? "LOADING"
//                   : resources.map((resource, index) => {
//                       return (
//                         <tr>
//                           <td className="py-2">{resource.id}</td>
//                           <td className="py-2">{resource.resourceName}</td>

//                           <td>
//                             {fetchedRolePermissions === undefined
//                               ? "LOADING ROLE PERMS"
//                               : fetchedRolePermissions.map(
//                                   (permissions, key) => {
//                                     if (
//                                       resource.id === permissions.resourceId &&
//                                       permissions.roleId ===
//                                         storedRoleData.id &&
//                                       permissions.canView === true
//                                     ) {
//                                       return (
//                                         <div>
//                                           <input
//                                             type="checkbox"
//                                             name="View"
//                                             defaultChecked={permissions.canView}
//                                             className="w-5 h-5"
//                                             onChange={(e) => {
//                                               permissions.canView =
//                                                 !permissions.canView;
//                                               console.log(permissions);
//                                               console.log(e.target.value);
//                                             }}
//                                           />
//                                         </div>
//                                       );
//                                     } else if (
//                                       resource.id === permissions.resourceId &&
//                                       permissions.roleId ===
//                                         storedRoleData.id &&
//                                       permissions.canView === false
//                                     ) {
//                                       return (
//                                         <div>
//                                           <input
//                                             type="checkbox"
//                                             name="View"
//                                             className="w-5 h-5"
//                                             defaultChecked={permissions.canView}
//                                             onChange={(e) => {
//                                               permissions.canView =
//                                                 !permissions.canView;
//                                               console.log(permissions);
//                                               console.log(e.target.value);
//                                             }}
//                                           />
//                                         </div>
//                                       );
//                                     }
//                                   }
//                                 )}
//                           </td>

//                           <td>
//                             {fetchedRolePermissions === undefined
//                               ? "LOADING ROLE PERMS"
//                               : fetchedRolePermissions.map(
//                                   (permissions, key) => {
//                                     if (
//                                       resource.id === permissions.resourceId &&
//                                       permissions.roleId ===
//                                         storedRoleData.id &&
//                                       permissions.canAdd === true
//                                     ) {
//                                       return (
//                                         <div>
//                                           <input
//                                             type="checkbox"
//                                             name="View"
//                                             defaultChecked={permissions.canView}
//                                             className="w-5 h-5"
//                                             onChange={(e) => {
//                                               permissions.canAdd =
//                                                 !permissions.canAdd;
//                                               console.log(permissions);
//                                               console.log(e.target.value);
//                                             }}
//                                           />
//                                         </div>
//                                       );
//                                     } else if (
//                                       resource.id === permissions.resourceId &&
//                                       permissions.roleId ===
//                                         storedRoleData.id &&
//                                       permissions.canAdd === false
//                                     ) {
//                                       return (
//                                         <div>
//                                           <input
//                                             type="checkbox"
//                                             name="View"
//                                             className="w-5 h-5"
//                                             defaultChecked={permissions.canAdd}
//                                             onChange={(e) => {
//                                               permissions.canAdd =
//                                                 !permissions.canAdd;
//                                               console.log(permissions);
//                                               console.log(e.target.value);
//                                             }}
//                                           />
//                                         </div>
//                                       );
//                                     }
//                                   }
//                                 )}
//                           </td>

//                           <td>
//                             {fetchedRolePermissions === undefined
//                               ? "LOADING ROLE PERMS"
//                               : fetchedRolePermissions.map(
//                                   (permissions, key) => {
//                                     if (
//                                       resource.id === permissions.resourceId &&
//                                       permissions.roleId ===
//                                         storedRoleData.id &&
//                                       permissions.canEdit === true
//                                     ) {
//                                       return (
//                                         <div>
//                                           <input
//                                             type="checkbox"
//                                             name="View"
//                                             defaultChecked={permissions.canView}
//                                             className="w-5 h-5"
//                                             onChange={(e) => {
//                                               permissions.canEdit =
//                                                 !permissions.canEdit;
//                                               console.log(permissions);
//                                               console.log(e.target.value);
//                                             }}
//                                           />
//                                         </div>
//                                       );
//                                     } else if (
//                                       resource.id === permissions.resourceId &&
//                                       permissions.roleId ===
//                                         storedRoleData.id &&
//                                       permissions.canEdit === false
//                                     ) {
//                                       return (
//                                         <div>
//                                           <input
//                                             type="checkbox"
//                                             name="View"
//                                             className="w-5 h-5"
//                                             defaultChecked={permissions.canEdit}
//                                             onChange={(e) => {
//                                               permissions.canEdit =
//                                                 !permissions.canEdit;
//                                               console.log(permissions);
//                                               console.log(e.target.value);
//                                             }}
//                                           />
//                                         </div>
//                                       );
//                                     }
//                                   }
//                                 )}
//                           </td>

//                           <td>
//                             {fetchedRolePermissions === undefined
//                               ? "LOADING ROLE PERMS"
//                               : fetchedRolePermissions.map(
//                                   (permissions, key) => {
//                                     if (
//                                       resource.id === permissions.resourceId &&
//                                       permissions.roleId ===
//                                         storedRoleData.id &&
//                                       permissions.canDelete === true
//                                     ) {
//                                       return (
//                                         <div>
//                                           <input
//                                             type="checkbox"
//                                             name="View"
//                                             defaultChecked={permissions.canView}
//                                             className="w-5 h-5"
//                                             onChange={(e) => {
//                                               permissions.canDelete =
//                                                 !permissions.canDelete;
//                                               console.log(permissions);
//                                               console.log(e.target.value);
//                                             }}
//                                           />
//                                         </div>
//                                       );
//                                     } else if (
//                                       resource.id === permissions.resourceId &&
//                                       permissions.roleId ===
//                                         storedRoleData.id &&
//                                       permissions.canDelete === false
//                                     ) {
//                                       return (
//                                         <div>
//                                           <input
//                                             type="checkbox"
//                                             name="View"
//                                             className="w-5 h-5"
//                                             defaultChecked={
//                                               permissions.canDelete
//                                             }
//                                             onChange={(e) => {
//                                               permissions.canDelete =
//                                                 !permissions.canDelete;
//                                               console.log(permissions);
//                                               console.log(e.target.value);
//                                             }}
//                                           />
//                                         </div>
//                                       );
//                                     }
//                                   }
//                                 )}
//                           </td>
//                         </tr>
//                       );
//                     })}
//               </tbody>
//             </table>
//           </div>

//           <div className="flex resource items-center justify-between">
//             <button
//               className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//               type="submit"
//             >
//               Update Role
//             </button>
//             <a
//               className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
//               href="#"
//             >
//               Need help?
//             </a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdatePermissions;