import React from "react"
import ReactDOM from "react-dom"
import Character from "./Character"

class CharacterList extends React.Component {
  constructor( props ) {
    super(props)
    console.log(props);
  }

  buildCharacterComponents( charactersArray ){
    return charactersArray.map( (character, index) =>
      <Character
        key={index}
        stats={character}/>)
  }

  render() {
    const list = this.props.characters

    return <div className="character-list" >
      <h3> {this.props.title} </h3>
      {this.buildCharacterComponents( list )}
    </div>
  }
}

module.exports =  CharacterList

// This one's easy.  It's just a list of characters