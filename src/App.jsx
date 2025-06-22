import{createBrowserRouter, RouterProvider} from "react-router-dom"
import Applayout from "./layout/Applayout"
import Landing from "./pages/Landing"
import Auth from "./pages/Auth"
import Dashboard from "./pages/Dasboard"
import Transfer from "./pages/Transfer"
import { RecoilRoot } from "recoil"
import Transferemail from "./pages/Transferemail"

function App() {
    const routes=createBrowserRouter([{
        element:<Applayout></Applayout>,
        children:[
            {
                path:"/",
                element:<Landing></Landing>
            },{
                path:"/auth",
                element:<Auth></Auth>
            },{
                path:"/das",
                element:<Dashboard></Dashboard>
            },{
                path:"/transfer",
                element:<Transfer></Transfer>
            },{
                path:"/transfer/email",
                element:<Transferemail></Transferemail>
            }
        ]
    }])
 return(
    
        <RecoilRoot>  <RouterProvider router={routes}></RouterProvider></RecoilRoot>


 )
}

export default App
