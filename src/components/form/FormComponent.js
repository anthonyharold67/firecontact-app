import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
  MenuItem,
  Button,
  Stack,
  Select,
  Box,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";


const FormComponent = ({info,setInfo,handleFormSubmit,updateVisible}) => {
  const handleChange = (e) => {
    e.preventDefault();
    /* const name = e.target.name;
    const value = e.target.value; */
    const {name,value}=e.target
    console.log(name,value)
    setInfo({...info,[name]:value})

    
    // initialvalue içindeki keylerimiz ile input ların name değerleri aynı olduğu için

  }
  
  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      direction="column"
      style={{ width: "300" }}
    >
      <p className="contact-header">
        <div>
          <a
            href="https://github.com/anthonyharold67"
            className="design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>{"<AnthonyHarold/> "}</code>
          </a>
        </div>
        <span className="design header">firecontact App</span>
      </p>
      <h2 className="contact-header">Add Contact</h2>
      <Box style={{ backgroundColor: "white", padding: "20px" }}>
        <form onSubmit={(e)=>handleFormSubmit(e)}>
          <Stack spacing={3} direction="column">
            <TextField
              variant="outlined"
              name="username"
              value={info.username}
              onChange={handleChange}
              placeholder="Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              required
            />
            <TextField
              variant="outlined"
              name="phoneNumber"
              value={info.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneEnabledIcon />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel style={{ paddingLeft: "20px" }}>Gender</InputLabel>
              <Select
                label="Gender"
                name="gender"
                variant="outlined"
                value={info.gender}
                onChange={handleChange}
                required
              >
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" type="submit" value="Submit">
              {updateVisible ? "Update" : "Add"}
            </Button>
          </Stack>
        </form>
      </Box>
    </Grid>
  );
};

export default FormComponent;