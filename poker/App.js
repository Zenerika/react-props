// Render the cards using React!
const App = (props) => {
    console.log('props:', props)
    let { cards } = props;
    return (
       <div className="pokerContainer">
            <div className="card1Button">
                <CardComponent cardInfo={props}/>
            </div>
        </div>
    )
}

const CardComponent = (props) => {
    console.log('cards', props.cardInfo)
    return (
        props.cardInfo.cards.map((e, index) => {
            return (
                <img key={index} width="80" src={"cards/" + e.value + e.suit + ".png"} />
            )
        })
    )
}

// CHALLENGE: Write a separate Card component for use in the App component
// TIP: Use props to pass the suit and number to each Card component
const Card = null;  