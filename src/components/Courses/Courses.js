import React from 'react';
import { Link } from 'react-router-dom';

const Courses = ({ course }) => {
    const { id, name, logo, total } = course;
    return (
        <div className="col-lg-3 mt-3 mb-5">
            <div className="card">
                <img src={logo} className="card-img-top img-fluid h-50" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link href="#" className="btn btn-primary">Start Quiz </Link>
                </div>
            </div>
        </div>
    );
};

export default Courses;