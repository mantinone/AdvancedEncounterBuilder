import React from "react"
import ReactDOM from "react-dom"
import roll from "../utils/roll"

class Character extends React.Component {
  constructor( props ){
    super(props)
  }

  render() {
    const stats = this.props.stats
    const rollChances = roll.rollProbability( stats.ac, 7, true )

    return <div className="character">
      Name: {stats.name}.  {stats.type}
      <div>
        AC: {stats.ac}, Attack: {stats.attackBonus}, Save DC: {stats.savedc}
      </div>
      <div>
        STR: {stats.str}, DEX: {stats.dex}, CON: {stats.con}, INT: {stats.int}, WIS: {stats.wis}, CHA: {stats.cha}
      </div>
      <div>
        Chances of getting hit by Alice = {rollChances}
      </div>
    </div>
  }
}

module.exports =  Character
