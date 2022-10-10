import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='border rounded p-3 mb-3'>
                <h4>1. Question: What is the purpose of React Router?</h4>
                <p className='ps-5'><b>Answer</b> : React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>

            </div>
            <div className='border rounded p-3 mb-3'>
                <h4>1. Question: How does context api works?</h4>
                <p className='ps-5'><b>Answer</b> : The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux..</p>

            </div>
            <div className='border rounded p-3 mb-3'>
                <h4>1. Question: What is useRef?</h4>
                <p className='ps-5'><b>Answer</b> : The userRef Hook is  a function that returns a mutable ref object whose current property is initialized with the passed argument. The returned object will persist for the full lifetime of the component.</p>

            </div>
        </div>
    );
};

export default Blog;