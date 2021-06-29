import './content.css';

const Content = () => {
    return(
        <div className="content">
            <div className="line"></div>
            {/* Timeline item */ }
            <div className="item">
                <div className="avatar">
                    <img src="http://www.croop.cl/UI/twitter/images/doug.jpg"/>
                    Doug
                </div>
                <span className="time">An hour ago</span>
                <p>Ate lunch</p>
                <div className="commentCount">2</div>
            </div>
        </div>

    )
}

export default Content;