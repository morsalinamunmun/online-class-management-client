
//import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
//import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
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

    const axiosSecure = useAxiosSecure();
    const {data: teacherRequest = [], refetch} = useQuery({
      queryKey: ['teacherRequest'],
      queryFn: async () =>{
          const res = await axiosSecure.get('/teacherRequest');
          return res.data;
      }
  })
    const handleMakeTeacher = teacher =>{
        axiosSecure.patch(`/teacherRequest/teacher/${teacher._id}`)
        .then(res=>{
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${teacher.name} is an Teacher Now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
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
            fetch(`http://localhost:5000/teacherRequest/${_id}`, {
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
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell align="right">Experience</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">Approved</StyledTableCell>
            <StyledTableCell align="right">Request</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teacherRequest.map((teacher) => (
            <StyledTableRow key={teacher._id}>
              <StyledTableCell component="th" scope="row">
                {teacher.name}
              </StyledTableCell>
              <StyledTableCell align="right">{teacher.experience}</StyledTableCell>
              <StyledTableCell align="right">{teacher.category}</StyledTableCell>
              <StyledTableCell align="right">{teacher.title}</StyledTableCell>
              <StyledTableCell align="right">{
                teacher.role === "teacher"? "Accepted" :<Button variant="outlined" onClick={()=>handleMakeTeacher(teacher)}>Approved</Button>
              }</StyledTableCell>
              <StyledTableCell align="right"> <Button onClick={()=>handleReject(teacher._id)} variant="outlined">Reject</Button></StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}