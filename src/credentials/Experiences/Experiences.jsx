import React from 'react';
import { FaBriefcase } from "react-icons/fa";
import "./Experiences.css";
import briefCase from "../../../images/briefcase.svg";


const Experiences = () => {
  return (
    <div>

        <div className='link_header'>
                <div className='link_header_icon'><img className='link_header_icon_svg' src={briefCase} alt='briefcase'/></div>
                <h2>Work Experiences</h2>
        </div>

        <div className='work_experiences'>

            {/* 1 */}
            <div className='work_experiences_container'>
                <div className='work_experiences_title'>
                    <h3>Software Engineer Lead / Tech Lead at <a className='work_experiences_title_link' href='#'>Amazing Properties USA LLC</a></h3>
                    <p>01/01/2023-Present</p>
                </div>
                

                <p>Leading backend development and data engineering initiatives while managing a team of developers to ensure project milestones are met in a timely manner.</p>

                <ul>
                    <li>Managed backend development and databases utilizing SQL for optimal performance with focus on data accuracy and reliability</li>
                    <li>Deployed backend applications on cloud platforms (AWS, Azure, GCP), ensuring high scalability and integration with cloud services</li>
                    <li>Led a development team using Agile methodologies to meet project milestones and collaborate with technical stakeholders</li>
                    <li>Designed and maintained ETL pipelines, emphasizing reusable code patterns and practices for improved data flow</li>
                    <li>Developed and optimized data models using advanced SQL methodologies to support seamless integration with analytics frameworks</li>
                </ul>
            </div>



            {/* 2 */}

            <div className='work_experiences_container'>
                <div className='work_experiences_title'>
                    <h3>Backend and Data Engineer Intern at <a href=''>Cecure Intelligence</a></h3>
                    <p>01/01/2023 - 11/30/2022</p>
                </div>
                

                <p>Designed and implemented real-time data pipelines and backend architecture with a focus on reliability, maintainability, and performance.</p>

                <ul>
                    <li>Designed and implemented a real-time data pipeline for processing semi-structured and unstructured datasets in relational databases</li>
                    <li>Developed and documented RESTful APIs using Swagger to ensure clarity and efficiency in data access and manipulation</li>
                    <li>Created architecture for data pipelines, enhancing support for scalable data engineering frameworks</li>
                    <li>Automated the deployment of AWS resources with CloudFormation templates, integrating them into CI/CD pipelines</li>
                    <li>Built backend infrastructure focusing on low-latency responses and scalability for data-driven web applications</li>
                </ul>
            </div>

            {/* 3 */}


            <div className='work_experiences_container'>
                <div className='work_experiences_title'>
                    <h3>Data Analyst/Engineer at <a href=''>Country Kitchen</a></h3>
                    <p>01/01/2019 - 01/01/2023</p>
                </div>

                <p>Formulated data pipeline architecture and developed analytical solutions to drive business improvements across multiple outlets.</p>

                <ul>
                    <li>Formulated data pipeline architecture for a new product deployment.</li>
                    <li>
                    Developed reports in PowerBI to track KPIs across business outlets</li>
                    <li>Boosted customer conversions by 32% through root cause analysis of data trends</li>
                    <li>Supported implementation and active monitoring of controls and programs for precision and efficacy</li>
                </ul>
            </div>
            



        

        </div>


    </div>

  )
}

export default Experiences;