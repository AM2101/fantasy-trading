import React from 'react'
import { Header, Footer, List } from '../Components'
import AppContent from '../Components/AppContent'

const DefaultLayout = () => {
    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-6">
                    <List />
                </div>
                <div className="col-xl-8 col-lg-7 col-md-6 d-none d-lg-block d-md-block">
                    <AppContent />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default DefaultLayout
