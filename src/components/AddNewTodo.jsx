import React, { useState } from 'react';
import Modal from './Modal';
import { Bell, CalendarDay, Clock, Palette, X } from 'react-bootstrap-icons';
import DatePicker from 'react-datepicker'
import TimePicker from 'react-time-picker';

import 'react-datepicker/dist/react-datepicker.css'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const AddNewTodo = () => {
    const [showModal, setShowModal] = useState(false);
    const [text, setText] = useState('');
    const [day, setDay] = useState(new Date());
    const [time, setTime] = useState(new Date());
    return (
        <div className='AddNewTodo'>
            <div className='btn' onClick={() => setShowModal(true)}>

                <button>+ New Todo</button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>


                <form action="">
                    <div className='text'>
                        <h3>Add new to do!</h3>
                        <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder='To do ...' autoFocus />
                    </div>
                    <div className='remind'>
                        <Bell />
                        <p>Remind Me!</p>
                    </div>
                    <div className='pick-day'>
                        <div className='title'>
                            <CalendarDay />
                            <p>Choose a day</p>
                        </div>
                        <DatePicker selected={day} onChange={(date) => setDay(date)} />
                    </div>
                    <div className='pick-time'>
                        <div className='title'>
                            <Clock />
                            <p>Choose a time</p>
                        </div>
                        <TimePicker value={time} onChange={time => setTime(time)} />
                    </div>
                    <div className='pick-project'>
                        <div className='title'>
                            <Palette />
                            <p>Choose a project</p>
                        </div>
                        <div className='projects'>
                            <div className='project active'>
                                personal
                            </div>
                            <div className='project'>
                                work
                            </div>
                        </div>
                    </div>
                    <div className='cancel' onClick={() => setShowModal(false)}>
                        <X size='40' />
                    </div>
                    <div className='confirm'>
                        <button>+ Add to do</button>
                    </div>
                </form>

            </Modal>
        </div>
    );
}

export default AddNewTodo;
