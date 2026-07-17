/** @format */

// import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast, { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>

      <button onClick={() => toast.success("Congrats")} className="text-red-500 p-4">Click Me</button>
      <Toaster />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/create' element={<CreatePage />} />
      <Route path='/note/:id' element={<NoteDetailPage />} />
    </Routes>
    </div>
  );
};

export default App;
