import { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

// * React icons
import { AiOutlineAppstore } from "react-icons/ai";
import { Link, NavLink, useLocation } from "react-router-dom";
import avatar2 from '../assets/image/avatar2.jpg'
import { AppContext } from "../context/Dashboard";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";







const Sidebar = () => {
    const { sideBarOpen, setSideBarOpen, isTablet } = useContext(AppContext)
    const [host, setHost] = useState(false)
    console.log(host);
    // check on useRef
    const sidebarRef = useRef();
    // this is useParams
    const { pathname } = useLocation();

    useEffect(() => {
        if (isTablet) {
            setSideBarOpen(false)
        } else {
            setSideBarOpen(true)
        }
    }, [isTablet]);



    const overlayClicked = () => {
        setSideBarOpen(false)
    }


    useEffect(() => {
        isTablet && setSideBarOpen(false);
    }, [pathname]);


    const Nav_animation = isTablet
        ? {
            open: {
                x: 0,
                width: "16rem",
                transition: {
                    damping: 40,
                },
            },
            closed: {
                x: -250,
                width: 0,
                transition: {
                    damping: 40,
                    delay: 0.15,
                },
            },
        }
        : {
            open: {
                width: "16rem",
                transition: {
                    damping: 40,
                },
            },
            closed: {
                width: "4rem",
                transition: {
                    damping: 40,
                },
            },
        };

    const toggleUp = () => {
        setHost(false)
    }

    const toggleDown = () => {
        setHost(true)
    }


    return (
        <div className="absolute">
            <div onClick={() => overlayClicked()} className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-gray-700  opacity-30 ${sideBarOpen ? "block" : "hidden"} `}></div>

            <motion.div ref={sidebarRef} variants={Nav_animation} initial={{ x: isTablet ? -250 : 0 }} animate={sideBarOpen ? "open" : "closed"} className="shadow-xl md:z-[9] z-[9999] max-w-[16rem]  w-[16rem] fixed top-0 left-0 h-screen">

                <div className="flex items-center gap-2.5 font-medium bg-gray-700  py-6 text-white" >
                    <Link to="/" className="flex gap-5 p-5 text-black">
                        <img className="rounded-full" src={avatar2} alt="" width={40} />
                        <h1 className="text-white text-2xl mt-1">CAPITAINCY</h1>
                    </Link>
                </div>

                <div className="flex flex-col text-xl bg-gray-700 text-gray-300 h-full">
                    <h1 className="lg:ms-10 mb-5">MENU</h1>
                    <ul className="px-3 text-[0.9rem] flex  text-xl flex-col gap-5 md:h-[78%] h-[75%] overflow-x-hidden">
                        <li className="flex gap-10 bg-gray-500 rounded p-1">
                            <NavLink to={"/layout/home"} className="link flex gap-8 hover:text-white   font-semibold">
                                <AiOutlineAppstore size={23} className="mt-1 min-w-max" />
                                Dashboard
                            </NavLink>
                            <p className="cursor-pointer mt-1 hover:text-blue-500">
                                {host ?
                                    (<span ><IoIosArrowDown onClick={() => toggleUp()} className='transition-transform duration-500 transform rotate-360'/></span>)
                                    :
                                    (<span><IoIosArrowForward onClick={() => toggleDown()}/></span>)
                                }
                            </p>
                        </li>
                        <li>
                            <li>
                                {host ?(<p className="text-center mt-[-10px] mb-5 ">eCommerce</p>): ''}
                            </li>
                        </li>
                        <li>
                            <NavLink to={"/layout/calender"} className="link mt-[-30px] hover:bg-gray-500 rounded p-1 flex gap-8 hover:text-white  font-semibold">
                                <AiOutlineAppstore size={23} className="mt-1 min-w-max" />
                                Calender
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/layout/profile"} className="link mt-[-10px] flex gap-8 hover:bg-gray-500 rounded p-1  hover:text-white  font-semibold ">
                                <AiOutlineAppstore size={23} className="mt-1 min-w-max" />
                                Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/layout/approval"} className="link mt-[-10px] flex hover:bg-gray-500 rounded p-1  gap-8 hover:text-white font-semibold ">
                                <AiOutlineAppstore size={23} className="mt-1 min-w-max" />
                                Approvals
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/layout/home"} className="link flex mt-[-10px] hover:bg-gray-500 rounded p-1  gap-8 hover:text-white font-semibold ">
                                <AiOutlineAppstore size={23} className="mt-1 min-w-max" />
                                Forms
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/layout/home"} className="link mt-[-10px] flex hover:bg-gray-500 rounded p-1  gap-8 hover:text-white  font-semibold">
                                <AiOutlineAppstore size={23} className="mt-1 min-w-max" />
                                Table
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/layout/home"} className="link mt-[-10px] hover:bg-gray-500 rounded p-1  flex gap-8 hover:text-white  font-semibold">
                                <AiOutlineAppstore size={23} className="mt-1 min-w-max" />
                                Settings
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/layout/home"} className="link mt-[-10px] hover:bg-gray-500 rounded p-1 flex gap-8 hover:text-white font-semibold ">
                                <AiOutlineAppstore size={23} className="mt-1 min-w-max" />
                                Sign Out
                            </NavLink>
                        </li>
                    </ul>

                </div>

            </motion.div>

        </div>
    );
};

export default Sidebar;