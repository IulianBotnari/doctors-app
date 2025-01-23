import { NavLink } from "react-router-dom";

export default function BackButton() {


    return (
        <>
            <NavLink to={"/"} className="btn home_button m-left-4 d-none d-md-block">Home</NavLink>
            <NavLink to={"/"} className="btn home_button m-left-4 d-md-none"><i className="bi bi-house-fill"></i></NavLink>
        </>
    )
}