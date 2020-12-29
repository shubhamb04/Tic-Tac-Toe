import React from "react"

class Square extends React.Component{
constructor(){
    super()
    this.state = {
        value: null,
    }
}

    render(){
        return (
            <button className="square" onClick={() => this.setState({value: "Y"})}>{this.state.value}</button>
        )
    }
}

export default Square