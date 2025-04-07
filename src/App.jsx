import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AlertProvider } from "./context/AlertContext";
import Layout from "./Layout/Layout";
import Homepage from "./pages/HomePage";
import AlertPage from "./pages/AlertPage";
import NotFoundPage from "./pages/NotFoundPage";
import './i18n'
import './index.css';
import './app.css';
function App() {
  console.log("App rendered!"); // Vérification
  return (
    <AlertProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/alert/:id" element={<AlertPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </AlertProvider>
  );
}

export default App;
