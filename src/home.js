import React from "react"
import ReactDOM from "react-dom"
import CharacterList from "./components/CharacterList"

class MainPage extends React.Component {
  constructor( props ){
    super(props)
    this.state = {
      characters: [],
      monsters: []
    }
  }

  componentDidMount () {
    let chars = this.fetchData( 'characters/').characterList
    let monst = this.fetchData( 'characters/monsters').characterList
    this.setState({
      characters: 'boo',
      monsters: 'doo'
    })
  }

  fetchData( route ){
    const options = {
      method: "GET",
      mode: 'cors',
      headers: new Headers({
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json',
      }),
      credentials: 'same-origin'
    }
    return fetch( `http://localhost:3000/${route}`)
      .then( data => data.json())
      .then( result => result )
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
