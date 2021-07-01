import { useState } from 'react';
import './clock.css';

const Clock = () => {
    const currentTime = new Date();
    
    const [hours, setHours] = useState(currentTime.getHours());
    const [minutes, setMinutes] = useState(currentTime.getMinutes());
    const [seconds, setSeconds] = useState(currentTime.getSeconds());
    const [ampm, setAmpm] = useState(hours >= 12 ? 'pm' : 'am');

    const newTime = () => {
        const currentTime = new Date();
        setHours(currentTime.getHours());
        setMinutes(currentTime.getMinutes());
        setSeconds(currentTime.getSeconds());
        setAmpm(hours >= 12 ? 'pm' : 'am');
    }

    setTimeout(newTime, 1000);

    return (
        <div className='clock'>
            {
                hours === 0 ? 12 :
                (hours > 12) ?
                hours - 12 : hours
            } : {
                minutes > 9 ? minutes : `0${minutes}`
            } : {
                seconds > 9 ? seconds : `0${seconds}`
            } {ampm}
        </div>
    )
}

export default Clock