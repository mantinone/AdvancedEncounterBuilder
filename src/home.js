import React from "react"
import ReactDOM from "react-dom"

class MainPage extends React.Component {
  constructor( props ){
    super(props)
    this.state = {
      title: '...Loading'
    }
  }

  render() {
    return <div>Hello {this.props.name}</div>
  }
}

var mountNode = document.getElementById('app')
ReactDOM.render( <MainPage name="Encounter Builder" />, mountNode )
