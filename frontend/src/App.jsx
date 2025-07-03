import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
          <main>
            <Routes>
              
            </Routes>
          </main>
      </BrowserRouter>
    </>
  )
}

export default App
