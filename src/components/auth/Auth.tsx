import { useAppDispatch } from "@/store/hooks";
import { registerThunk } from "@/store/slice/authSlice";
import { toggleSnackbar } from "@/store/slice/snackbarSlice";
import { RegisterUserType } from "@/types/user";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  ButtonBase,
  Dialog,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import CheckBox from "./CheckBox";
import Logo from "../Logo";
import SingInGoogle from "./SingInGoogle";
import ButtonCompo from "../Button";

interface DialogProps {
  openDialog: boolean;
  variant: string;
  setVariant: (pram: any) => void;
  setOpenDialog: any;
}

const defaultFormData: RegisterUserType = {
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
};
const AuthDialog = ({
  openDialog,
  setOpenDialog,
  variant,
  setVariant,
}: DialogProps) => {
  const [formData, setFormData] = useState(defaultFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const [labelValue, setLabelValue] = useState(false);
  const dispatch = useAppDispatch();

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant: any) =>
      currentVariant === "login" ? "register" : "login"
    );
    setFormData(defaultFormData);
    setErrors({});
  }, [setVariant]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleClickShowPasswordConfirmation = () =>
    setShowPasswordConfirmation((show) => !show);

  const handleMouseDownPasswordConfirmation = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabelValue(event.target.checked);
  };

  const validateFormForRegister = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.username.trim() || !(formData.username.length > 4)) {
      newErrors.username = "username is at least 4";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (
      !formData.password.trim() ||
      !(formData.password.length > 8) ||
      !(formData.password === formData.passwordConfirm)
    ) {
      newErrors.password = "password is required";
    }

    if (
      !formData.passwordConfirm.trim() ||
      !(formData.password.length > 8) ||
      !(formData.password === formData.passwordConfirm)
    ) {
      newErrors.passwordConfirm = "passwordConfirm is required";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };
  const validationFormForLogin = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (
      !formData.password.trim() ||
      !(formData.password.length > 8) ||
      formData.password === formData.passwordConfirm
    ) {
      newErrors.password = "password is at least 8";
    }
    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const singUpHandler = () => {
    if (validateFormForRegister()) {
      dispatch(
        registerThunk({
          ...formData,
          onSuccess: () => {
            dispatch(toggleSnackbar({ message: "Sign in successfully" }));
            toggleVariant();
          },
          onError: () => {
            dispatch(toggleSnackbar({ message: "registration fail" }));
          },
        })
      );
    }
  };

  const credentialsSignIn = async () => {
    if (validationFormForLogin()) {
      const signInData = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });
      if (signInData?.error) {
        console.log(signInData.error);
      } else {
        console.log(signInData);
        router.push("/");
        setOpenDialog(false);
      }
    }
  };

  const authHandler = () => {
    if (variant === "login") {
      credentialsSignIn();
    } else singUpHandler();
  };
  const googleSignIn = () => {};

  return (
    <Dialog
      open={openDialog}
      onClose={() => {
        setOpenDialog(false);
      }}
      PaperProps={{
        style: { borderRadius: 10 },
      }}
    >
      <Box
        sx={{
          bgcolor: "info.main",
          padding: 4,
          width: 500,
          borderRadius: 2,
          borderColor: "success.main",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 4,
            width: "100%",
          }}
        >
          <Box>
            <Box
              className="font"
              sx={{
                color: "white",

                display: "flex",
                justifyContent: "start",
              }}
            >
              <Box sx={{ width: 40, height: 40 }}>
                <Logo />
              </Box>
              <Typography sx={{ fontSize: 25, fontFamily: "Antonio" }}>
                {" "}
                Saint Stream
              </Typography>
            </Box>
            {variant === "register" ? (
              <Typography sx={{ fontSize: 12, color: "warning.light" }}>
                Register to enjoy the features
              </Typography>
            ) : (
              <Typography sx={{ fontSize: 12, color: "warning.light" }}>
                Sign in to access exclusive features.
              </Typography>
            )}
          </Box>
          <Box>
            <Button
              sx={{
                color: "white",
                borderRadius: 2,
                fontSize: 18,
                border: 1,
                borderColor: "success.main",
                fontWeight: 600,
              }}
              color="success"
              variant="outlined"
              onClick={() => {
                setOpenDialog(false);
              }}
            >
              Close
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {variant === "register" && (
            <Box sx={{ width: "100%" }}>
              <TextField
                color="secondary"
                label={"Username"}
                id={"username"}
                type={"username"}
                sx={{
                  width: { xs: "100%", lg: "100%" },
                }}
                value={formData.username}
                onChange={(e: any) => {
                  setFormData({ ...formData, username: e.target.value });
                }}
                error={!!errors.username}
                helperText={errors.username}
              />
            </Box>
          )}
          <Box sx={{ width: "100%" }}>
            <TextField
              color="secondary"
              label={"Email"}
              id={"email"}
              type={"email"}
              value={formData.email}
              onChange={(e: any) => {
                setFormData({ ...formData, email: e.target.value });
              }}
              sx={{
                width: { xs: "100%", lg: "100%" },
              }}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <TextField
              color="secondary"
              id="outlined-adornment-password-1"
              sx={{
                width: { xs: "100%", lg: "100%" },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="Password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              autoComplete="current-password"
              onChange={(e: any) => {
                setFormData({ ...formData, password: e.target.value });
              }}
              error={!!errors.password}
              helperText={errors.password}
            />
          </Box>
          {variant === "register" && (
            <Box sx={{ width: "100%" }}>
              <TextField
                color="secondary"
                id="outlined-adornment-password-2"
                sx={{
                  width: { xs: "100%", lg: "100%" },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPasswordConfirmation}
                        onMouseDown={handleMouseDownPasswordConfirmation}
                        edge="end"
                      >
                        {showPasswordConfirmation ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                label="Password confirmation"
                type={showPasswordConfirmation ? "text" : "password"}
                value={formData.passwordConfirm}
                autoComplete="current-password"
                onChange={(e: any) => {
                  setFormData({ ...formData, passwordConfirm: e.target.value });
                }}
                error={!!errors.passwordConfirm}
                helperText={errors.passwordConfirm}
              />
            </Box>
          )}
        </Box>
        {variant === "register" ? (
          <CheckBox labelValue={labelValue} handleChange={handleChange} />
        ) : (
          <></>
        )}

        <Box sx={{ width: "100%", mt: 2 }}>
          <ButtonCompo
            fullWidth={true}
            text={variant === "login" ? "Login" : "Register"}
            disabled={variant === "register" && labelValue === false}
            color={"primary"}
            variant="contained"
            onClick={authHandler}
          />
        </Box>
        <SingInGoogle />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography sx={{ fontSize: 14, color: "warning.light" }}>
            {variant === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
          </Typography>
          <ButtonBase
            disableTouchRipple={true}
            onClick={toggleVariant}
            sx={{
              fontSize: 14,
              borderRadius: 2,
              py: 1,
              fontWeight: 700,
              "&:hover": {
                color: "warning.light",
              },
            }}
          >
            {variant === "login" ? "register here" : "login"}
          </ButtonBase>
        </Box>
      </Box>
    </Dialog>
  );
};

export default AuthDialog;
