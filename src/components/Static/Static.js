import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const Static = () => {
    const course = useLoaderData();
    const courses = course.data;

    let chartData = []
    courses.map(course => {
        const newChartData = { name: course.name, question: course.total, uv: course.total }
        chartData.push(newChartData)
    })




    return (
        <div>
            <LineChart width={600} height={300} data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="question" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div>
    );
};

export default Static;