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
import { useCallback, useEffect, useState } from "react";
import CheckBox from "./CheckBox";

interface DialogProps {
  openDialog: boolean;
  variantValue: string;
  setOpenDialog: any;
}
interface FormData {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
const defaultFormData: FormData = {
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
};
const AuthDialog = ({
  openDialog,
  setOpenDialog,
  variantValue,
}: DialogProps) => {
  const [formData, setFormData] = useState(defaultFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [variant, setVariant] = useState("login");
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const [labelValue, setLabelValue] = useState(false);

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
      formData.password === formData.passwordConfirm
    ) {
      newErrors.password = "password is required";
    }

    if (
      !formData.passwordConfirm.trim() ||
      !(formData.password.length > 8) ||
      formData.password === formData.passwordConfirm
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
      newErrors.password = "password is required";
    }
    setErrors(newErrors);

    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
    setFormData(defaultFormData);
    setErrors({});
  }, []);

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

  useEffect(() => {
    setVariant(variantValue);
    setFormData(defaultFormData);
  }, [variantValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabelValue(event.target.checked);
  };

  const singUpHandler = () => {
    if (validateFormForRegister()) {
      console.log("validate it");
    }
  };
  const loginHandler = () => {
    if (validationFormForLogin()) {
      console.log("validate it");
    }
  };
  console.log(labelValue);
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
            width: 400,
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 51 50"
                  fill="none"
                >
                  <path
                    d="M3.86522 8.23844C3.86522 4.07031 6.61034 1.25 10.673 1.25H39.5575C43.6182 1.25 46.3652 4.06833 46.3652 8.23844V48.75L42.8783 44.5918V8.23844C42.8783 7.33715 42.5292 6.47269 41.9077 5.83482C41.2862 5.19696 40.443 4.83782 39.5633 4.83625H10.6787C9.79918 4.83835 8.95631 5.19765 8.3349 5.8354C7.71349 6.47315 7.36426 7.33731 7.36375 8.23844V37.6033C7.36375 38.5046 7.71282 39.3691 8.33434 40.0069C8.95585 40.6448 9.79902 41.0039 10.6787 41.0055H34.9095L38.3714 44.5641L10.673 44.5918C6.61227 44.5918 3.86522 41.7734 3.86522 37.6033V8.23844Z"
                    fill="#00925D"
                  />
                  <path
                    d="M12.703 18.9925V13.9552C12.703 12.7114 13.2006 11.7413 14.1957 11.0448C15.1908 10.3483 16.5225 10 18.1908 10C19.8883 10 21.2346 10.3234 22.2297 10.9702C23.2248 11.592 23.7224 12.4129 23.7224 13.4328V18.0597C23.7224 18.5075 23.3419 18.8184 22.5809 18.9925C22.1712 19.092 21.7614 19.1418 21.3517 19.1418C20.9419 19.1418 20.5322 19.1045 20.1224 19.0299C20.2102 18.4328 20.2541 17.7985 20.2541 17.1269V13.9552C20.2541 13.4826 20.0639 13.1219 19.6834 12.8731C19.3029 12.5995 18.8054 12.4627 18.1908 12.4627C17.5761 12.4627 17.0786 12.5995 16.6981 12.8731C16.3469 13.1219 16.1713 13.4826 16.1713 13.9552V18.3209C16.1713 19.1915 16.5079 19.801 17.181 20.1493L21.8346 22.6866C23.1517 23.3831 23.8102 24.4527 23.8102 25.8955V31.0448C23.8102 32.2886 23.298 33.2587 22.2736 33.9552C21.2492 34.6517 19.8883 35 18.1908 35C16.5225 35 15.1762 34.6891 14.1518 34.0672C13.1274 33.4204 12.6152 32.5871 12.6152 31.5672V26.9403C12.6152 26.4925 12.9957 26.1816 13.7567 26.0075C14.1664 25.908 14.5762 25.8582 14.9859 25.8582C15.3957 25.8582 15.8054 25.8955 16.2152 25.9701C16.1274 26.5672 16.0835 27.2015 16.0835 27.8731V31.0448C16.0835 31.4925 16.2883 31.8532 16.6981 32.1269C17.1078 32.4005 17.62 32.5373 18.2347 32.5373C18.8493 32.5373 19.3468 32.4005 19.7273 32.1269C20.1371 31.8532 20.3419 31.4925 20.3419 31.0448V26.8284C20.3419 25.8582 19.9468 25.1617 19.1566 24.7388L14.503 22.1642C13.303 21.5174 12.703 20.4602 12.703 18.9925Z"
                    fill="white"
                  />
                  <path
                    d="M26.5081 18.9925V13.9552C26.5081 12.7114 27.0056 11.7413 28.0007 11.0448C28.9959 10.3483 30.3275 10 31.9958 10C33.6933 10 35.0397 10.3234 36.0348 10.9702C37.0299 11.592 37.5274 12.4129 37.5274 13.4328V18.0597C37.5274 18.5075 37.1469 18.8184 36.386 18.9925C35.9762 19.092 35.5665 19.1418 35.1567 19.1418C34.747 19.1418 34.3372 19.1045 33.9275 19.0299C34.0153 18.4328 34.0592 17.7985 34.0592 17.1269V13.9552C34.0592 13.4826 33.8689 13.1219 33.4885 12.8731C33.108 12.5995 32.6104 12.4627 31.9958 12.4627C31.3812 12.4627 30.8836 12.5995 30.5031 12.8731C30.1519 13.1219 29.9763 13.4826 29.9763 13.9552V18.3209C29.9763 19.1915 30.3129 19.801 30.9861 20.1493L35.6397 22.6866C36.9567 23.3831 37.6152 24.4527 37.6152 25.8955V31.0448C37.6152 32.2886 37.103 33.2587 36.0787 33.9552C35.0543 34.6517 33.6933 35 31.9958 35C30.3275 35 28.9812 34.6891 27.9568 34.0672C26.9325 33.4204 26.4203 32.5871 26.4203 31.5672V26.9403C26.4203 26.4925 26.8008 26.1816 27.5617 26.0075C27.9715 25.908 28.3812 25.8582 28.791 25.8582C29.2007 25.8582 29.6105 25.8955 30.0202 25.9701C29.9324 26.5672 29.8885 27.2015 29.8885 27.8731V31.0448C29.8885 31.4925 30.0934 31.8532 30.5031 32.1269C30.9129 32.4005 31.4251 32.5373 32.0397 32.5373C32.6543 32.5373 33.1519 32.4005 33.5324 32.1269C33.9421 31.8532 34.147 31.4925 34.147 31.0448V26.8284C34.147 25.8582 33.7519 25.1617 32.9616 24.7388L28.3081 22.1642C27.1081 21.5174 26.5081 20.4602 26.5081 18.9925Z"
                    fill="white"
                  />
                  <path
                    d="M10.8071 45.6229L10.8363 45.5938H10.7842L10.8071 45.6229Z"
                    fill="black"
                  />
                </svg>
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
          <Button
            disabled={variant === "register" && labelValue === false}
            color={"primary"}
            variant="contained"
            onClick={() => {
              if (variant === "login") {
                loginHandler();
              } else singUpHandler();
            }}
            sx={{
              width: "100%",
              fontSize: 16,
              borderRadius: 2,
              py: 1,
              fontWeight: 700,
            }}
          >
            {variant === "login" ? "Login" : "Register"}
          </Button>
        </Box>
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
