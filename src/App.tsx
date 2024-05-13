import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./Layout";
import PageNotFound from "./PageNotFound";
import Dashboard from "./dashboard/Dashboard";
import { Toaster } from "react-hot-toast";
import Register from "./Register";
import Login from "./Login";
import Students from "./Students";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="students" element={<Students />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 2500,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </>
  );
}

export default App;
