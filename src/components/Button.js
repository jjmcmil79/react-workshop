import React from 'react'


class Button extends React.Component {
    render() {

        const handleClearSingleTodo = (e) => {
            this.props.clearSingleTodo(e) 
        }
        return (
            <div  >
                <button className="button" onClick={handleClearSingleTodo}>Back</button>
            </div>
        )
    }
}

export default Button