import Home from "./page/Home";
import "./style.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  
  return (
    <>
      <Home />      
      <ToastContainer />
    </>
  );
};

export default App;
