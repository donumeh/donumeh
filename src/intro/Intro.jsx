import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { TbBrandGithub } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import './Intro.css';

const Intro = () => {
  return (
    <div id='intro'>

      {/* Hero section and bio */}
      <div className='profile'>
        <img
            className='profile_icon'
            src='../../images/profile.png'
            alt='profile'
            loading='lazy'
          />
      </div>

      <div className='description'>
        <h1 className='description_name'>Donald Umeh</h1>

        <h2 className='description_profession'>Software Engineer <sub className='x'>x</sub> Backend Developer</h2>

        <p className='description_content'><b>Donald</b> is a versatile back-end developer with expertise in designing and deploying scalable, secure systems using <b>Python, JavaScript, SQL, Java, C++, Java, Docker, and Kubernetes</b>. Proficient in building RESTful APIs, microservices architectures, and DevOps pipelines (CI/CD), he leverages tools like <b>Jenkins, Redis, and Kafka</b> to optimize performance and streamline workflows. His skill set spans security best practices—including <b>authentication (JWT, OAuth), vulnerability prevention, and caching strategies—as well as advanced database management and container orchestration</b>. Adept at problem-solving in collaborative environments, he combines technical precision with agile teamwork to deliver robust, real-world back-end solutions tailored to modern tech demands</p>
      </div>


      <div className='contact'>
        <div className='contact_details'>
          <div className='contact_icon'><MdOutlineEmail /></div>
          <div><a href='mailto:donaldumeh54@gmail.com'>donaldumeh54@gmail.com</a></div>
        </div>
        
        <div className='contact_details'>
          <div className='contact_icon'><CiPhone /></div>
          <div><a href="tel:+2349113220691">+2349113220691</a></div>
        </div>

        <div className='contact_details'>
          <div className='contact_icon'><IoLocationOutline /></div>
          <div>Lagos, Nigeria</div>
        </div>
      </div>

      <div className='social_icons'>
        <div><a href="https://www.linkedin.com/in/donald-umeh-41373224b/"><CiLinkedin /></a></div>
        <div><a href="https://github.com/donumeh"><TbBrandGithub /></a></div>
        <div><a href="https://x.com/N_E_V_I"><FaXTwitter /></a></div>
      </div>

    </div>
  )
}

export default Intro;