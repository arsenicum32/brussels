import React from 'react'
import { connect } from 'react-redux'
import { setupSwitch , changeAction } from '../actions'

const mapStateToProps = state => {
  console.log(Object.keys(state.setup));
  return {tags:state.setup}
}


const mapDispatchToProps = dispatch => {
  return {
    tagged: (e)=> {
      dispatch(changeAction(e.target.innerHTML))
      //console.log(e.target.innerHTML);
    }
  }
}

let Setup = ({tags,tagged}) => (
  <div className="field">
  {Object.keys( tags ).slice(1).map(e=>{
    return <div className="item" key={e} ><a href='#' style={
      {textDecoration: tags[e]? 'none' :  'line-through' }
    } onClick={tagged}>{e}</a></div>
  })}

  </div>
)

Setup = connect(mapStateToProps, mapDispatchToProps)(Setup)

export default Setup
