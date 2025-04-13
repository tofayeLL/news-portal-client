import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <section>
                
            <div className="flex items-center p-5 shadow-xl bg-slate-200 rounded-lg my-10">
            <button className="btn bg-purple-500 text-white">Breaking News</button>
            <Marquee pauseOnHover={true} speed={140}>
                <div className="space-x-10">
                    <Link to={'/'}> Violent Protests Erupt in West Bengal Over Waqf Act</Link>
                    <Link to={'/'}> India Showcases BioE3 Policy at Seoul Summit</Link>
                    <Link to={'/'}> Mohamed Salah Signs Two-Year Extension with Liverpool</Link>
                    <Link to={'/'}> Nationwide UPI Glitch Disrupts Digital Payments in India</Link>
                    <Link to={'/'}> US-Iran to Hold Nuclear Talks in Oman</Link>

                </div>
            </Marquee>

        </div>     
        </section>
    );
};

export default BreakingNews;