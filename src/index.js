import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.scss";
import "./style_mobil.scss";
import App from './App';
import DashboardApp from "./DashboardApp"
import DataProvider from './components/context/DataContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>

    <BrowserRouter>
    <Routes>
    <Route path="/dashboard/*" element={<DashboardApp />} />
    <Route path="/*" element={<App />} />
    </Routes>
    </BrowserRouter>
    </DataProvider>

  </React.StrictMode>
);

