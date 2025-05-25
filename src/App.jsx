import { Toaster } from "react-hot-toast";
import './App.css'
import OptimizedRoutes from "./components/ProtectedRoutes/OptimizedRoutes";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: "1 rem",
          },
        }}
      ></Toaster>
      <OptimizedRoutes />
    </>
  )
}

export default App
