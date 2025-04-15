
import { Button, TextField, Link, Divider } from "@mui/material"; // MUI components
import { Google, GitHub } from "@mui/icons-material"; // MUI Icons
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import "./Login.scss";

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
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login to your account</h2>

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

        <div className="login-options">
          <Link href="/forgot-password" variant="body2" className="forgot-link">
            Forgot Password?
          </Link>
        </div>

        {error && <p className="error">{error}</p>}

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>

        <Divider className="divider">or</Divider>

        <div className="social-buttons">
          <Button
            type="button"
            variant="outlined"
            fullWidth
            onClick={handleGoogleLogin}
            startIcon={<Google />}
          >
            Continue with Google
          </Button>
          <Button
            type="button"
            variant="outlined"
            fullWidth
            onClick={handleGithubLogin}
            startIcon={<GitHub />}
          >
            Continue with GitHub
          </Button>
        </div>

        <div className="signup-link">
          Don't have an account? <Link href="/register">Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
