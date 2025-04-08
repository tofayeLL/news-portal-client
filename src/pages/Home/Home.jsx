import React from 'react';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <section className='py-20 lg:px-14'>
            <p className=''>I am from home</p>
            {/* banner */}
            <Banner></Banner>
            
        </section>
    );
};

export default Home;