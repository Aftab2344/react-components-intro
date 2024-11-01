import { useState } from "react";
import Route from "./Route";
import { IoClose,IoMenuOutline  } from "react-icons/io5";



const Navvar = () => {

    const [open ,setOpen] =useState(false)
    const routes = [
        {path: "/home", name: "Home", id: "route_001"},
        {path: "/about", name: "About", id: "route_002"},
        {path: "/services", name: "Services", id: "route_003"},
        {path: "/contact", name: "Contact", id: "route_004"},
        {path: "/profile", name: "Profile", id: "route_005"}
      ]
      

    return (

        
        <div className="relative text-2xl">
            <div onClick={()=> setOpen(!open)} className="md:hidden ">
                {
                    open===false?<IoClose />:<IoMenuOutline />
                }
            
            
            
            </div>
            <ul className={`md:flex gap-x-5 duration-150 absolute md:static
                
                ${open?'-top-40 ':'top-30'}
                `}>

            {
                routes.map(route => <Route 
                route={route}
                key={route.id}> 
                </Route>)
            }
            </ul>
            
        </div>
    );
};

export default Navvar;