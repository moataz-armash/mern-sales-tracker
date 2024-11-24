import React from "react";
import { ApiProvider } from "./context/ApiContext";
import Form from "./components/Form";
import SalesTable from "./components/SalesTable";

function App() {
  return (
    <ApiProvider>
      <div className="p-6 max-w-screen-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Sales Tracker</h1>
        <Form />
        <SalesTable />
      </div>
    </ApiProvider>
  );
}

export default App;
