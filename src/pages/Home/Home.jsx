import React from 'react';
import Banner from './Banner/Banner';
import BreakingNews from './BreakingNews/BreakingNews';

const Home = () => {
    return (
        <section className='py-24 lg:px-14'>
        
            <div className=''>
                <BreakingNews></BreakingNews>
            </div>


            {/* banner */}
            <Banner></Banner>
            
        </section>
    );
};

export default Home;