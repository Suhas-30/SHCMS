import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const PrivateRoute = ({children}) =>{
    const {isAuthenticated} = useAuth();

    if(!isAuthenticated){
        return <Navigate to= "/customer-login"></Navigate>;     
    }
    return children;
}

export default PrivateRoute;