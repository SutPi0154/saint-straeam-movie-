import { Box } from "@mui/material";
import React from "react";
import { useDropzone } from "react-dropzone";
interface Props {
  onFileSelected: (acceptedFiles: File[]) => void;
}
const FileDropZone = ({ onFileSelected }: Props) => {
  const onDrop = (acceptedFiles: File[]) => {
    onFileSelected(acceptedFiles);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  return (
    <Box
      {...getRootProps()}
      sx={{
        borderRadius: 4,
        border: "3px dotted lightgray",
        textAlign: "center",
        p: 1,
        cursor: "pointer",
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the file here</p>
      ) : (
        <p>Drag drop some files here, or click the select file </p>
      )}
    </Box>
  );
};
