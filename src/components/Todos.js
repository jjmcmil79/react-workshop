class Todos extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
    
        return (
    <ul>
        {props.items.map(item =>
           <TodoItem item = {item} /> )}
    </ul>
)
    }
}

export default Todos