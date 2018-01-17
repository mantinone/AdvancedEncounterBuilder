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

    this.fetchData( 'characters/', 'characters')
    this.fetchData( 'characters/monsters', 'monsters')
  }

  fetchData( route, propName ){
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
      .then( result => {
        console.log(result.characterList);
        this.setState({
          [propName]: result.characterList,
        })
      } )
  }

  render() {
    return (<div>
      <h1> Hello {this.props.name}</h1>
      <div className="flex-row">
        <CharacterList characters={this.state.characters}/>
        <CharacterList characters={this.state.monsters}/>
      </div>
    </div>)
  }
}

var mountNode = document.getElementById('app')
ReactDOM.render( <MainPage name="Encounter Builder" />, mountNode )
