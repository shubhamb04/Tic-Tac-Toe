import React from "react"
import Game from "./Game"

class App extends React.Component{
    render(){
        return (
            <div>
                <h1>Tic Tac Toe</h1>
                <Game />
            </div>
        )
    }
}

export default App