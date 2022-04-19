import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  
  Paper
} from "@mui/material";
import {useFetch,DeleteUser }from "../../utils/functions";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const Contacts = ({editHandler,setUpdateVisible,updateVisible}) => {
  const {isLoading,contactList} = useFetch()
  const handleEdit = (id,username,phoneNumber,gender,setUpdateVisible) => {
    editHandler(id,username,phoneNumber,gender)
    setUpdateVisible(true)
  }
  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="center">Phone Number</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell align="center">Delete</TableCell>
              <TableCell align="center">Edit</TableCell>
            </TableRow>
          </TableHead>        
         
          <TableBody>
             {/* Bilgiler gelmediği durumda Loading yazısı görünsün */}  
             {isLoading ? (<TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>            
              <TableCell colSpan={5} align="center">Not found data</TableCell>             
            </TableRow>): contactList?.length===0 ?(<TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>            
              <TableCell colSpan={5} align="center">Loading</TableCell>             
            </TableRow>):(
              contactList?.map((item,index)=>(
                <TableRow key={index}>
                <TableCell >{item.username}  </TableCell>
                <TableCell align="center">{item.phoneNumber}</TableCell>
                <TableCell align="center">{item.gender}</TableCell>
                <TableCell onClick={()=>DeleteUser(item.id)} align="center"><DeleteIcon/></TableCell>
                <TableCell onClick={()=>handleEdit(item.id,item.username,item.phoneNumber,item.gender,setUpdateVisible)} align="center"><EditIcon/></TableCell>
              </TableRow>
              ))
            )}       
                     
          
          { /* Bilgiler olmadığı,boş olduğu  durumda veri bulunamadı mesajı*/}
          {/* Bilgiler geldiği zaman aşağıya yazılacak kodlar çalışsın */}

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;

