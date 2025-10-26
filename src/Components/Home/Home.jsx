import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../../Navbar/Navbar';
import About from '../About/About';
import Education from '../Education/Education';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Skill from '../../Skill/Skill';

const Home = () => {
    return (
        <div className="relative bg-gradient-to-r from-[#1B0044] via-[#3C0D65] to-[#5A189A]  min-h-screen text-white">
            <Navbar />
            <div className="pt-20 max-w-full px-1 md:px-12 lg:px-1">
                <Banner />
                <About></About>
                <Skill></Skill>

                <Education></Education>
                <Work></Work>
                <Contact></Contact>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Home;
