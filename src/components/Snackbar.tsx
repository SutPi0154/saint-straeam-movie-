import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { resetSnackBar } from "@/store/slice/snackbarSlice";
import { Alert, Snackbar as MuiSnackbar } from "@mui/material";

const SnackBar = () => {
  const { open, severity, autoHideDuration, message } = useAppSelector(
    (store) => store.snackbar
  );
  const dispatch = useAppDispatch();
  setTimeout(() => dispatch(resetSnackBar()), autoHideDuration);
  return (
    <MuiSnackbar
      open={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default SnackBar;
