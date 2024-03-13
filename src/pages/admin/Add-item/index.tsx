import NavForAdmin from "@/components/adminLayout/NavForAdmin";
import Input from "@/components/auth/Input";
import { Box, TextField } from "@mui/material";
import React from "react";

const AddItem = () => {
  return (
    <>
      <NavForAdmin title={"Add new Movie"} button={() => {}} />
      <Box sx={{ display: "flex", m: 4, border: 0.4, borderRadius: 2 }}>
        <Box
          sx={{ width: 190, height: 270, border: 2, borderRadius: 2, m: 2 }}
        ></Box>
        <Box sx={{ width: "100%" }}>
          <TextField sx={{ width: "90%" }} />
          <TextField sx={{ width: "100%" }} />
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Input
              onchange={() => {}}
              id="1"
              htmlFor="title"
              label={"title"}
              // type={}
              value="ere"
              autoComplete={""}
              endAdornment={""}
            />
            <TextField label="Outlined" variant="outlined" sx={{}} />
            <TextField />
            <TextField />
          </Box>
        </Box>
      </Box>
      <Box></Box>
    </>
  );
};

export default AddItem;
