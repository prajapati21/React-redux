import { RouterProvider,createBrowserRouter } from "react-router-dom";
import Home from "./Component/Home";
import Image from "./Component/Image";

const router = createBrowserRouter([
{
  path : '/',
  element :<Home/>
},
{
  path : '/Image',
  element : <Image/>
},
]);

const App = () =>{
  return(
    <>
     <RouterProvider
     router={router}
     />
    </>
  )
}
export default App;