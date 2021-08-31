import { Table, TableCell, TableHead, TablePagination, TableRow } from "@material-ui/core"
import React, { useState } from "react"

export default function useTable(headCells){

    const pages = [5,10,15]
const [page,setPage] = useState(0)
const [rowsPerPage,setRowsPerPage] = useState(pages[page])

    const TblContainer = props =>(
        <Table>
                {props.children}
        </Table>
    )



    const TblHead = props =>{
        return(
            <TableHead>
                <TableRow>
                    {
                    headCells.map(headCell=>(
                        <TableCell key={headCell.id}>
                            {headCell.label}
                        </TableCell>
                    ))
                }
                </TableRow>
            </TableHead>
        )
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0);
    }

    const TblPagination = () => (
        <TablePagination 
            component = "div"
            page={page}
            rowsPerPageOptions={pages}
            rowsPerPage={rowsPerPage}
            count="10"
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />

        
    )
    const recordsAfterPagingAndSorting = () => {
       
     //  console.log(records)
     //   return records.toString().slice(page*rowsPerPage,(page+1)*rowsPerPage);
    }
    

    return{
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    }
}