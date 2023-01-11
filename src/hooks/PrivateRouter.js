import React from "react";
import { Route, Navigate } from "react-router-dom";

const stateUser=false;
function PrivateRouter({ componets:Components,path,element}) {
    return(
    <Route path={path} element={element}>
       {stateUser?<Components/>:<Navigate to="/login"/>} 
    </Route>
    )
}
export default PrivateRouter;
