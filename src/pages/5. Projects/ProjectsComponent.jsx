import React from 'react';
import ProjectList from './components/ProjectsList';
import './projects.css'


function ProjectsComponent(props) {
    return (
        <div ref={props.ProjectsRef} className='page projects-wrapper'>
           <ProjectList/>
        </div>
    )
}

export default ProjectsComponent
