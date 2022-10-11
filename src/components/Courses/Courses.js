import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';


const Courses = ({ course }) => {
    const { id, name, logo, total } = course;
    return (
        <div className="col-lg-3 mt-3 mb-5">
            <div className="card">
                <div className="bg-secondary">
                    <img src={logo} className="card-img-top img-fluid h-50" alt="..." />
                </div>
                <div className="card-body d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{name}</h5>
                    <Link to={`/quiz/${id}`} className="btn btn-primary">Start Quiz <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
                </div>
            </div>
        </div>
    );
};

export default Courses;