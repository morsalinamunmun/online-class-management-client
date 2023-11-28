
//import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
// import useAxiosSecure from '../../../hooks/useAxiosSecure';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function TeacherRequest() {
    const [request, setRequest] = useState([]);
    const {user} = useContext(AuthContext);
    //const axiosSecure = useAxiosSecure();
    useEffect(()=>{
        fetch('http://localhost:5000/application')
        .then(res=> res.json())
        .then(data=> setRequest(data))
    }, [])

    const handleReject = (_id) =>{
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, cancel it!'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/application/${_id}`, {
              method: "DELETE"
            })
            .then(res=> res.json())
            .then(data=>{
              console.log(data)
              if(data.deletedCount > 0){
                  Swal.fire(
                      'Deleted!',
                      'Request has been Cancel.',
                      'success'
                  )   
                  // const remaining = foodItems.filter(cancelRequest=> cancelRequest.id !== _id)
                  // setFoodItems(remaining); 
              }
            })
          }
        })
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Experience</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">Approved</StyledTableCell>
            <StyledTableCell align="right">Request</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {request.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.experience}</StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">{row.title}</StyledTableCell>
              <StyledTableCell align="right"> <Button variant="outlined">Approved</Button></StyledTableCell>
              <StyledTableCell align="right"> <Button onClick={()=>handleReject(row._id)} variant="outlined">Reject</Button></StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}