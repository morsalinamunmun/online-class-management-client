
//import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

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


export default function AllClasses() {
    const axiosSecure = useAxiosSecure();
    const {data: classes = [], refetch} = useQuery({
      queryKey: ['classes'],
      queryFn: async () =>{
          const res = await axiosSecure.get('/classes');
          return res.data;
      }
  })

  const handleApproved = item =>{
    axiosSecure.patch(`/classes/item/${item._id}`)
    .then(res=>{
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${item.name} is an add Now`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
}
    const handleDeleteItem = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/classes/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Image</StyledTableCell>
                        <StyledTableCell>Title</StyledTableCell>
                        <StyledTableCell align="right">Email</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
                        <StyledTableCell align="right">Action</StyledTableCell>
                        <StyledTableCell align="right">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {classes.map((item) => (
                        <StyledTableRow key={item._id}>
                            {/* component="th" scope="row" */}
                            <StyledTableCell >
                                <img className='w-16' src={item.image_url} alt="" />
                            </StyledTableCell>
                            <StyledTableCell >
                                {item.title}
                            </StyledTableCell>
                            <StyledTableCell align="right">{item.email}</StyledTableCell>
                            <StyledTableCell align="right">{item.price}</StyledTableCell>
                            <StyledTableCell align="right">{item.description}</StyledTableCell>
                            <StyledTableCell align="right"> {item.role === "accepted"? "Accepted" :<Button onClick={
                                ()=> handleApproved(item)
                            } variant="contained">Pending</Button>}</StyledTableCell>
                            <StyledTableCell align="right"><Button onClick={()=> handleDeleteItem(item)} variant="outlined" color="error">
                                Reject
                            </Button></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}