import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      
    ]
  }
])

export default Route;