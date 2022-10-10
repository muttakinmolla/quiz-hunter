import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='container'>
            <div className='text-center d-flex justify-content-center align-items-center mt-5 pt-5'>
                <div className=''>
                    <h4>Sorry This page not found </h4>
                    <p>404 Error !!!</p>
                    <Link to="/home">Go back to home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;