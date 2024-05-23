 import { Navigate } from 'react-router-dom';
 
 

const AdminProtectRoute = (props) => {
     const { Component } = props;
     const role= localStorage.getItem("adminRole");

    return (
        <div> {role === "admin" ? <Component/> : (<Navigate to="/"/>)} </div>
    );
};

export default AdminProtectRoute;
