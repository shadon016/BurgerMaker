import React from 'react';
import logo from '../asstes/b1.jpg'
import { MdAccountCircle, MdLightMode, MdDarkMode } from "react-icons/md";

const Nav = ({ Theme, ThemeSwitcher }) => {
    return (
        <div className='h-20 flex justify-around items-center bg-white shadow-md text-black dark:bg-slate-800 dark:text-white'>
            <div className=''>
                <img src={logo} alt="logo" className='h-10 w-auto hover:scale-105 duration-500 ring-1 ring-slate-700 rounded-full' />
            </div>
            <ul className='flex'>
                <li className='mx-12'><MdAccountCircle className='h-5 w-full' /></li>
                <li className='cursor-pointer float-right'>{Theme === 'dark' ? (<MdLightMode className='h-5 w-full' onClick={ThemeSwitcher} />) : (<MdDarkMode className='h-5 w-full' onClick={ThemeSwitcher} />)
                }</li>
            </ul>
        </div>
    )
}

export default Nav;