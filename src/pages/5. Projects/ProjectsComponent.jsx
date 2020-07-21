import React from 'react';
import ProductList from './components/ProjectsList';
import './projects.css'
import FadeInOnScroll from '../../components/FadeInOnScroll';


function ProjectsComponent(props) {
    return (
        <div ref={props.ProjectsRef} className='page products-wrapper'>
            <FadeInOnScroll>
            <div className='title-filter-wrapper'>
                <div className='projects-title'>
                    <h1>PROJECTS</h1>
                </div>
                <div className='projects-btn'>
                    <button>
                        Show filters
                    </button>
                </div>
            </div>
            </FadeInOnScroll>
           <ProductList/>
        </div>
    )
}

export default ProjectsComponent
