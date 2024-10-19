import React from 'react'
import Header from '../../component/Header';
import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import Project from './Project';
import Course from './Course';
import Contact from "./Contact"
import Footer from '../../component/Footer';
import LeftSider from '../../component/LeftSider';
const Home = () => {
    return (
        <div>

            <Header />
            <div className='bg-primary px-40 sm:px-5'>
                <Intro />
                <About/>
                <Experience/>
                <Project/>
                <Course/>
                <Contact/>
                <Footer/>
                <LeftSider/>
            </div>
        </div>
    );
}
export default Home