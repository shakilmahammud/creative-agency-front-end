import React, { useEffect, useState } from 'react'
import { Loaders } from '../../Loader/Loaders'
import { ClientFeedBack } from '../ClientFeedBack/ClientFeedBack'
import { Contact } from '../Contact/Contact'
import { Header } from '../Header/Header'
import { JoinCompany } from '../HeaderMain/HeaderMain'
import { Portfolio } from '../Portfolio/Portfolio'
import { Services } from '../Services/Services'

export const Home = () => {
    const [loader,setloader]=useState(false)

    useEffect(()=>{
        setloader(!loader)
    },[])
    return (
        <>
        {
            !loader? <Loaders/> : 
            <div>
            <Header/>
            <JoinCompany/>
            <Services/>
            <Portfolio/>
            <ClientFeedBack/>
            <Contact/>
        </div>
            
        }
        </>
    )
}
