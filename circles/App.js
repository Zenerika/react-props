// Render the circles using React!
const App = (props) => {
    console.log('props: ', props)
    let { circles } = props;
    return (
        <span>{ props }</span>
    )
}

const Circle = null;  // CHALLENGE: Write a separate Circle component for use in the App component