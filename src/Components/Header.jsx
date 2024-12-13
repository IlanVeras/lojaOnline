import React from "react"
import { NavLink, Outlet} from "react-router-dom"
export default function Header(){
    return(
        <div className="containerHeaderGeneral">
            <div className="containerLinks">
                <NavLink to="/" className="customLink linkHeader">Produtos</NavLink>
                <NavLink to="/contato" className="customLink linkHeader">Contato</NavLink>
                <Outlet/>
            </div>
        </div>
    )
}