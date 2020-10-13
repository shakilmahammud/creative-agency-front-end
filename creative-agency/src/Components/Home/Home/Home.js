import React from 'react'
import { ClientFeedBack } from '../ClientFeedBack/ClientFeedBack'
import { Contact } from '../Contact/Contact'
import { Header } from '../Header/Header'
import { JoinCompany } from '../HeaderMain/HeaderMain'
import { Portfolio } from '../Portfolio/Portfolio'
import { Services } from '../Services/Services'

export const Home = () => {
    return (
        <div>
            <Header/>
            <JoinCompany/>
            <Services/>
            <Portfolio/>
            <ClientFeedBack/>
            <Contact/>
        </div>
    )
}
