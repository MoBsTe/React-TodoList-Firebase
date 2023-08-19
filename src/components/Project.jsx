import React from 'react';
import RenameProject from './RenameProject';
import { Pencil, XCircle } from 'react-bootstrap-icons';
const Project = ({ project, edit }) => {
    return (
        <div>
            <div className='Project'>
                <div className='name'>
                    {project.name}
                </div>
                <div className='btns'>
                    {
                        edit ?
                            <div className='edit-delete'>
                                <span className='edit'>
                                    <Pencil size='13' />
                                </span>
                                <span className='delete'>
                                    <XCircle size='13' />
                                </span>
                            </div>
                            :
                            project.numOfTodos === 0 ? ''
                                :
                                < div className='total-todos'>
                                    {project.numOfTodos}
                                </div>
                    }
                </div>
            </div>
        </div >
    );
}

export default Project;
