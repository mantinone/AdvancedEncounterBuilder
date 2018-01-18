import React from "react"
import ReactDOM from "react-dom"

class Character extends React.Component {
  constructor( props ){
    super(props)
  }

  render() {
    const stats = this.props.stats

    return <div className="character">
      Name: {stats.name}.  {stats.type}
      <div>
        AC: {stats.ac}, Attack: {stats.attackBonus}, Save DC: {stats.savedc}
      </div>
      <div>
        STR: {stats.str}, DEX: {stats.dex}, CON: {stats.con}, INT: {stats.int}, WIS: {stats.wis}, CHA: {stats.cha}
      </div>
    </div>
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