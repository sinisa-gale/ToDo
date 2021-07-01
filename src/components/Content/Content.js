import './content.css';
import ActivityItem from '../ActivityItem/ActivityItem';

const Content = ({activities}) => {
    return(
        <div className="content">
            <div className="line"></div>
            {/* Timeline item */ }
            {activities.map( activity => {
                return (
                    // <div className="item">
                    // <div className="avatar">
                    //     <img src={activity.user.avatar}/>
                    //     <p>{activity.user.name}</p>
                    // </div>
                    // <span className="time">{activity.timestamp}</span>
                    // <p>{activity.text}</p>
                    // <div className="commentCount">{activity.comments.length}</div>
                    // </div>
                    <ActivityItem activity={activity} />
            )})}
        </div>

    )
}

export default Content;