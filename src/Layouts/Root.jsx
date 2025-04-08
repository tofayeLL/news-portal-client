import React from 'react';
import { Outlet } from "react-router-dom";
import Nav from '../pages/Nav/Nav';

const Root = () => {
    return (
        <section>
            {/* navbar */}
            <div>
                <Nav></Nav>
            </div>

            {/* main outlet */}
            <div>
                <Outlet></Outlet>
            </div>

        </section>
    );
};

export default Root;