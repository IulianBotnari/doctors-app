import { Outlet } from "react-router-dom"
import BackButton from "../Components/BackButton";
import style from "../styles/DefaultLayout.module.css"
import { NavLink } from "react-router-dom";

export default function DefaultLayout() {
    return (

        <>
            <header className="d-flex justify-content-between align-items-center ">
                <div className="d-flex align-items-center">
                    <NavLink className={style.logo} to="/">
                        <img src="/Logo.png" alt="" />
                    </NavLink>
                    <h1>BDoctors</h1>

                </div>

                <BackButton />
            </header>

            <main className="">
                <Outlet />
            </main>
            <footer className="d-flex justify-content-between align-items-center text-white ">
                <div className="py-2">
                    <span>Terms of Use <i style={{ fontSize: '4px', verticalAlign: 'middle' }} className="bi bi-circle"></i> Privacy Policy</span>
                </div>
                <div className="mx-5">
                    <span>&copy; 2025 Created by group 6</span>
                </div>
                <div className="d-flex">
                    <a style={{color: "white"}} href="tel:+393459791914"><i className="bi bi-telephone"></i></a>
                    <a style={{color: "white"}} href="https://wa.me/+393459791914" target="blank" rel="noopener noreferrer"><i className="bi bi-whatsapp px-4 mx-2"></i></a>
                    <a style={{color: "white"}} href="https://www.instagram.com" target="blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                </div>

            </footer>
        </>
    )
}