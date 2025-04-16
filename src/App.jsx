// import Dashboard from "./pages/Dashboard";

// import Register from "./pages/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoute from "./routes/publicRoute";
import PrivateRoute from "./routes/privateRoute";
import Login from "./pages/public/login/login";
import Home from "./pages/public/home/home"
import MainLayout from "./mainLayout";

function App() {
  return (
    <Router>
      <MainLayout>
      <Routes>
        {/* Public routes */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />

        {/* Private routes */}
        {/* <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        /> */}
      </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
