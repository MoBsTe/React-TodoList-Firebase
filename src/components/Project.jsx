import React, { useState } from 'react';
import RenameProject from './RenameProject';
import { Pencil, XCircle } from 'react-bootstrap-icons';
import Modal from './Modal';
const Project = ({ project, edit }) => {

    const [showModal, setShowModal] = useState(false);
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
                                <span className='edit' onClick={() => setShowModal(true)}>
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
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <RenameProject project={project} setShowModal={setShowModal} />
            </Modal>
        </div >
    );
}

export default Project;
