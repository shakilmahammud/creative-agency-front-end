import React from 'react'
import { HeaderMain, JoinCompany } from '../HeaderMain/HeaderMain';
import { Navbar } from '../Navbar/Navbar'
import './Header.css';

export const Header = () => {
    return (
        <div className="header-container">
            <Navbar/>
            <HeaderMain/>
        </div>
    )
}
