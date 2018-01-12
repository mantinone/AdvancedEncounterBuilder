import React from "react"
import ReactDOM from "react-dom"
import CharacterList from "./components/CharacterList"

class MainPage extends React.Component {
  constructor( props ){
    super(props)
    this.state = {
      title: '...Loading'
    }
  }

  render() {
    return (<div>
      <h1> Hello {this.props.name}</h1>
      <div className="flex-row">
        <CharacterList/>
        <CharacterList/>
      </div>
    </div>)
  }
}

var mountNode = document.getElementById('app')
ReactDOM.render( <MainPage name="Encounter Builder" />, mountNode )
