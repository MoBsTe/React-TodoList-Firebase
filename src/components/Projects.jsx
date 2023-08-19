import React from 'react';
import Project from './Project';
import AddNewProject from './AddNewProject';

const Projects = () => {
    return (
        <div className='Projects'>
            <AddNewProject />
            <Project />
        </div>
    );
}

export default Projects;
