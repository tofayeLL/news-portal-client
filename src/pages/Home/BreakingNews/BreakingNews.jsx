import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <section>
                
            <div className="flex items-center p-5 shadow-xl bg-slate-200 rounded-lg my-10">
            <button className="btn bg-red-500 text-white">Breaking News</button>
            <Marquee pauseOnHover={true} speed={140}>
                <div className="space-x-10">
                    <Link to={'/'}> I can be a React component, multiple React components, or just some text.</Link>
                    <Link to={'/'}> I can be a React component, multiple React components, or just some text.</Link>
                    <Link to={'/'}> I can be a React component, multiple React components, or just some text.</Link>
                    <Link to={'/'}> I can be a React component, multiple React components, or just some text.</Link>
                    <Link to={'/'}> I can be a React component, multiple React components, or just some text.</Link>

                </div>
            </Marquee>

        </div>     
        </section>
    );
};

export default BreakingNews;