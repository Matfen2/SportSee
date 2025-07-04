import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import UserDashboard from "./components/UserDashboard/UserDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/user/:id" element={<UserDashboard />} />
            </Routes>
          </main>
      </BrowserRouter>
    </>
  )
}

export default App
