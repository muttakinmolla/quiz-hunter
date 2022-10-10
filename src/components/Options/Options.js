import React from 'react';

const Options = ({ option, handleCorrectAnswer }) => {


    return (
        <div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id={option} onClick={() => handleCorrectAnswer(option)} />
                <label className="form-check-label" htmlFor={option}>
                    {option}
                </label>
            </div>
        </div>
    );
};

export default Options;