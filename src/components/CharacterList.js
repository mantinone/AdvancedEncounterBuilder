import React from "react"
import ReactDOM from "react-dom"
import Character from "./Character"

class CharacterList extends React.Component {
  constructor( props ) {
    super(props)
  }

  render() {
    return <div>
      <Character name="Alice"/>
      <Character name="Vance"/>
      <Character name="Arias"/>
    </div>
  }
}

module.exports =  CharacterList

// This one's easy.  It's just a list of characters