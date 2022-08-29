import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/layout/Dashboard";
import Dashboard_Home from "./components/dashboard/Dashboard_Home";
import DashboardHomePut from "./components/dashboard/DashboardHomePut";
const DashboardApp = () => {

  return (
    <>
      <Dashboard>
        <Routes>
          <Route path="/hero" element={<Dashboard_Home />} />
          <Route path="/hero/:id" element={<DashboardHomePut />} />
          <Route path="/about" element={<>about</>} />
          <Route path="/treatments" element={<>Hello, treatments</>} />
          <Route path="/recommendations" element={<>Hello, recommendations</>} />
          <Route path="/team" element={<>Hello, team</>} />
          <Route path="/appointments" element={<>Hello, appointments</>} />
          <Route path="/footer" element={<>Hello, footer</>} />
        </Routes>
      </Dashboard>
    </>
  );
};

export default DashboardApp;
