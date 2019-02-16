// Render the rectangle using React!
const App = ({rectangle}) => {
    return (
        <Rectangle height={rectangle.height}
                   width={rectangle.width} 
                   color={rectangle.color} />
    )
}

const Rectangle = ({height, width, color}) => {
    return (
        <div style={{height: height,
                    width: width,
                    backgroundColor: color}} />
    )
}