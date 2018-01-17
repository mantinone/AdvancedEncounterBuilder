import React from "react"
import ReactDOM from "react-dom"
import Character from "./Character"

class CharacterList extends React.Component {
  constructor( props ) {
    super(props)
    console.log(props);
  }

  render() {
    const list = this.props.characters

    return <div className="character-list" >
      <p> Hello there {this.props.passdown} </p>
      <Character name={list[0].name || "foo"}/>
      <Character name={list[1].name || "boo"}/>
      <Character name={list[2].name || "woo"}/>
    </div>
  }
}

module.exports =  CharacterList

// This one's easy.  It's just a list of characters