import React from 'react';
import './Credentials.css';
import Experiences from './Experiences/Experiences';

function Credentials() {

    return (
        <main>

            {/* Internal links to headers in-page */}
            <div className='links_container'>
                <ul className='internal_links'>
                    <li><a href="#">Experience</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Interests</a></li>
                </ul>
            </div>

            {/* Work Experiences */}
            <Experiences />
            
        </main>
  )
}

export default Credentials;
