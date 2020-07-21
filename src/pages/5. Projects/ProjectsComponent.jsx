import React from 'react';
import ProductList from './components/ProjectsList';
import './projects.css'


function ProjectsComponent(props) {
    return (
        <div ref={props.ProjectsRef} className='page products-wrapper'>
           <ProductList/>
        </div>
    )
}

export default ProjectsComponent
