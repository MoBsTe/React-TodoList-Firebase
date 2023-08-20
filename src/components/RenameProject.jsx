import React, { useState } from 'react';
import ProjectForm from './ProjectForm';
const RenameProject = ({ project, setShowModal }) => {
    const [newprojectName, setNewProjectName] = useState(project.name)

    function handleSubmit(e) {

    }
    return (
        <div className='RenameProject'>
            <ProjectForm handleSubmit={handleSubmit}
                heading='Edit project name!'
                value={newprojectName}
                setValue={setNewProjectName}
                setShowModal={setShowModal}
                confirmButtonText='Confirm' />
        </div>
    );
}

export default RenameProject;
