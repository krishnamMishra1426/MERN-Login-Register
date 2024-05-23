 import { Navigate } from 'react-router-dom';
 
 

const ProtectRoute = (props) => {
     const { Component } = props;
     const role= localStorage.getItem("role");

    return (
        <div> {role === "user" ? <Component/> : (<Navigate to="/"/>)} </div>
    );
};

export default ProtectRoute;
