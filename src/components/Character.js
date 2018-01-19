import React from "react"
import ReactDOM from "react-dom"
import Attribute from "./Attribute"
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
      <div className="flex-row">
        <Attribute name="STR" value={stats.str}/>
        <Attribute name="DEX" value={stats.dex}/>
        <Attribute name="CON" value={stats.con}/>
        <Attribute name="INT" value={stats.int}/>
        <Attribute name="WIS" value={stats.wis}/>
        <Attribute name="CHA" value={stats.cha}/>
      </div>
      <div>
        Chances of getting hit by Alice = {rollChances}
      </div>
    </div>
  }
}

module.exports =  Character
