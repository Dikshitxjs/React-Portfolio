import React ,{useState} from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./index.css";

function App() {
 
  return (
    //horizontal flex layout with full screen height
    <div className="flex min-h-screen gap-x-4 bg-gray-50">
      
      {/* //Sidebar on the left with padding  */}
      <Sidebar className="w-72 p-4 bg-white rounded-xl shadow" />

      {/* Main content area */}
      <div className="flex-1 flex flex-col p-4">
        
        {/* Header at the top of main content */}
        <Header className="mb-4 rounded-2xl shadow" />

        {/* Other content goes here */}
        <div className="flex-1 bg-gray-100 rounded-xl p-4">
          <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
          <p className="text-gray-700">
            This is your main content area. Add sections, cards, or anything here.
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;
