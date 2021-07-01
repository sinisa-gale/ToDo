

const ActivityItem = ({ activity }) => {
    return (
        <div className="item">
            <div className="avatar">
                <img src={activity.user.avatar} />
                <p>{activity.user.name}</p>
            </div>
            <span className="time">{activity.timestamp}</span>
            <p>{activity.text}</p>
            <div className="commentCount">{activity.comments.length}</div>
        </div>
                    
    )
}

export default ActivityItem;