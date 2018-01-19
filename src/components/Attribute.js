import React from "react"
import ReactDOM from "react-dom"

class Attribute extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return <div className="attribute">
      {this.props.name}
      <div>{this.props.value}</div>
    </div>
  }
}

module.exports = Attribute