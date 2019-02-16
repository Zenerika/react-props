// Render the tweets using React!
const App = (props) => {
    let { tweets } = props;
    return (
        <div className="tweetsContainer">
            <Tweet TweetInfo={props}/>
        </div>
    )
}

// CHALLENGE: Write a separate Tweet component for use in the App component
const Tweet = (props) => {
    console.log('TweetInfo: ', props.TweetInfo.tweets)
    return (
        props.TweetInfo.tweets.map((e, index) => {
            return (
                <div key={index}>
                    <User profilePic={e.user.profilePic}
                          username={e.user.username}
                          verified={e.user.isVerified}
                          handle={e.user.handle} />

                    <h3>{e.text}</h3>
                    <hr />
                    <Metrics replies={e.replies}
                             retweets={e.retweets}
                             likes={e.likes}/>
                </div>
            )
        })
    )
};
// CHALLENGE: Write a separate User component for use in the Tweet component
const User = (props) => {
    return (
        <div>
        <div>
            <img width="50" src={props.profilePic} />
            <div>
                <b>{props.username}</b>
                {props.isVerified ? '<img width="15" src="twitterIcons/check-circle.svg" />' : ''}
                <p>{props.handle}</p>
                
            </div>
        </div>
        <h3>{props.text}</h3>
        <div>
            <b>{props.replies}</b>
            <b>{props.retweets}</b>
            <b>{props.likes}</b>
        </div>
        </div>
    )
};

// CHALLENGE: Write a separate Metrics component for use in the Tweet component (likes, retweets, replies)
const Metrics = (props) => {
    return (
        <div>
        <b>Replies: {props.replies}              </b>
        <b>Retweets: {props.retweets}             </b>
        <b>Likes: {props.likes}                </b>
      </div>
    )
};

// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly