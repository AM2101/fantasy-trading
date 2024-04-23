import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Footer, List } from '../Components';
import AppContent from '../Components/AppContent';

const DefaultLayout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-12">
                    <List />
                </div>
                <div className="col-xl-8 col-lg-7 d-none d-lg-block d-md-block">

                    <AppContent />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
