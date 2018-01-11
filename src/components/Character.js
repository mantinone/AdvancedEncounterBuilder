import React from "react"
import ReactDOM from "react-dom"

class Character extends React.Component {
  constructor( props ){
    super(props)
  }

  render() {
    return <p> I am a character, my  names is {this.props.name} </p>
  }
}

module.exports =  Character

// A basic character has six stat values and a proficiency bonus,
// then records what saves get proficiency.  There's two phys attack
// types and, typically, one of three magic attack types and save DC (though
// potentially two or three in special cases).  There's also an AC that is
// half based on a stat and half based on equipment.  Also, equipment
// can modify saves and attack bonuses too!!
// I can just store the saves and bonuses on their own and not worry
// about calculating stats...

//Are monsters just characters?  Need to check what saves a monster
// requires...  Characters can do the same, though.