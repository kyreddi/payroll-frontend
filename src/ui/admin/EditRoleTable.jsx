import React, {useState, useEffect, Fragment} from 'react';
import { useSelector } from 'react-redux';
import ReactDatatable from '@ashvin27/react-datatable';
import axios from 'axios';
import {
  Button,
  Modal,
  Form
} from 'react-bootstrap';

function EditRoleTable({role, records, setRecords}) {

  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [perm, setPerm] = useState(role);
  // const [records, setRecords] = useState([]);

  // setPerm(role);

  console.log(role);

  const auth = useSelector(state => state.auth);

  const initQuery = "filter_value=&page_number=1&page_size=10&sort_order=false";

  const handleClick = (elem, type, record) => {
    elem[type] = !elem[type];
    console.log(elem);
    console.log(type);
    console.log(records);
  }

  const columns = [
    {
      key: "name",
      text: "Resource",
      sortable: true
    },
    {
      key: "canAdd",
      text: "Can Add",
      cell: (record, index) => {
        return (
          <Fragment>
            <Form.Check
              type={"checkbox"}
              defaultChecked={record.canAdd}
              onClick={handleClick.bind(this, record, 'canAdd')}
            />
          </Fragment>
        );
      }
    },
    {
      key: "canEdit",
      text: "Can Edit",
      cell: (record, index) => {
        return (
          <Fragment>
            <Form.Check
              type={"checkbox"}
              defaultChecked={record.canEdit}
              onClick={handleClick.bind(this, record, 'canEdit')}
            />
          </Fragment>
        );
      }
    },
    {
      key: "canView",
      text: "Can View",
      cell: (record, index) => {
        return (
          <Fragment>
            <Form.Check
              type={"checkbox"}
              defaultChecked={record.canView}
              onClick={handleClick.bind(this, record, 'canView')}
            />
          </Fragment>
        );
      }
    },
    {
      key: "canDelete",
      text: "Can Delete",
      cell: (record, index) => {
        return (
          <Fragment>
            <Form.Check
              type={"checkbox"}
              defaultChecked={record.canDelete}
              onClick={handleClick.bind(this, record, 'canDelete')}
            />
          </Fragment>
        );
      }
    }
  ];

  const extraButtons = [
    {
      className:"btn btn-primary buttons-pdf",
      title:"Export Test",
      children:[
        <span>
        <i className="glyphicon glyphicon-print fa fa-print" aria-hidden="true"></i>
        </span>
      ],
      onClick:(event)=>{
        console.log(event);
      }
    }
  ];

  // const editRecord = (elem, record, index) => {
  //   console.log("Edit record", record, index);
  //   console.log(elem);
  //   setEditShow(!editshow);
  //   setModalData(elem);
  // }
  //
  // const deleteRecord = (elem, record, index) => {
  //   console.log("Delete record", record, index);
  //   console.log(elem);
  //   setDeleteShow(!deleteshow);
  //   setModalData(elem);
  // }

  const config = {
    key_column: 'id',
    page_size: 10,
    length_menu: [10, 20, 50],
    show_filter: true,
    show_pagination: true,
    button: {
      excel: false,
      print: false
    },
    language: {
      loading_text: "Please be patient while data loads..."
    }
  }

  const getData = (queryString = initQuery) => {
    console.log(role);
    // let url = "http://localhost:8080/api/access/rolePermissionWithRole/datatable?perm=" + perm  //getting backend role andperm
    let url = "http://localhost:8080/api/access/getpermissions/1" + perm
      + '&' + queryString;
    axios.get(url,
      {
        "headers": {
          "Content-Type": "application/json",
          "Authorization": auth.type + " " + auth.token
        }
      }
    )
    .then(res => {
      setTotal(res.data.total);
      setRecords(res.data.datatableRolePermission);
      setLoading(false);
    });

  }

  useEffect(() => {
    getData();
    }, []
  )

  const tableChangeHandler = (data) => {
    let queryString = Object.keys(data).map((key) => {
      if(key === "sort_order" && data[key]){
        return encodeURIComponent("sort_order") + '=' + encodeURIComponent(data[key].order) + '&' + encodeURIComponent("sort_column") + '=' + encodeURIComponent(data[key].column)
      } else {
        return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      }

    }).join('&');

    getData(queryString);
  }

  return (
    <ReactDatatable
      config={config}
      records={records}
      columns={columns}
      dynamic={true}
      total_record={total}
      onChange={tableChangeHandler}
      loading={loading}
      extraButtons={extraButtons}
    />
  );
}

export default EditRoleTable;
