
import {
  Box,
  Button,
  Link,
  TextField
} from "@mui/material";  
import { useState } from "react";
import XIcon from "@mui/icons-material/X";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FacebookIcon from "@mui/icons-material/Facebook";
import LoginImage from "../../../assets/images/login-bg-5.jpg";
import "./login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await dispatch(login(form));
    // if (res.meta.requestStatus === "fulfilled") {
    //   navigate("/dashboard");
    // }
  };

  const handleGoogleLogin = () => {
    // window.location.href = "http://your-backend.com/auth/google"
    alert("Google login integration goes here.");
  };

  const handleGithubLogin = () => {
    alert("GitHub login integration goes here.");
  };

  return (
    <Box className="formContainer">
      <Box className="formContainer__inner">
        <Box className="formContainer__form">
          <Box className="formContainer__form-head">
            <h2 className="formContainer__form-title">Login to your account</h2>
            <p>
              Sign in to your account to access your profile, history, and any
              private pages you've been granted access to.
            </p>
          </Box>
          <form onSubmit={handleSubmit} className="formContainer__formBox">
            <Box className="formContainer__fields">
              <TextField
                label="Email"
                type="email"
                name="email"
                variant="outlined"
                fullWidth
                value={form.email}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                name="password"
                variant="outlined"
                fullWidth
                value={form.password}
                onChange={handleChange}
                margin="normal"
              />
              <div className="formContainer__pageLink">
                <Link
                  href="/forgot-password"
                  variant="body2"
                  className="forgot-link"
                >
                  Forgot Password?
                </Link>
              </div>
            </Box>
            <Box>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                className="button"
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
              {error && <p className="error">{error}</p>}
            </Box>
            <Box className="formContainer__options">
              <Box className="formContainer__options-divider">or</Box>

              <div className="formContainer__socialButtons">
                <Button
                  type="button"
                  variant="outlined"
                  fullWidth
                  onClick={handleGoogleLogin}
                  startIcon={<FacebookIcon />}
                >
                  Continue with facebook
                </Button>
                <Button
                  type="button"
                  variant="outlined"
                  fullWidth
                  onClick={handleGithubLogin}
                  startIcon={<XIcon />}
                >
                  Continue with X
                </Button>
              </div>
            </Box>
            <Box className="formContainer__bottomLink">
              Don't have an account? <Link href="/register">Sign up</Link>
            </Box>
          </form>
        </Box>
        <Box className="formContainer__img">
          <img src={LoginImage} alt="vactor image" className="img-fluid" />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
