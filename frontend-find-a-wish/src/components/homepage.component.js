import React from 'react';
import Hero from '../components/hero.component';
import About from '../components/about.component';
import GetStarted from '../components/start.component';

/* Homepage consists of components below */
function HomePage(props) {

    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle}/>
            <About />
            <GetStarted />
        </div>
    )
}
export default HomePage;