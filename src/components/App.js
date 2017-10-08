import React from 'react'
import { connect } from 'react-redux'
import Video from './video'
import Setup from './setup'
import Splash from './splash'
import '../styles/app.styl'
import { setupSwitch , switchOff } from '../actions'

const mapStateToProps = state => ({video : state.setup.st})


const mapDispatchToProps = dispatch => {
  return {
    onOpen: ()=> {
      dispatch(setupSwitch());
    },
    can: ()=> {
      diplatch(canPlay())
    },
    splash: ()=>{
      dispatch(switchOff());
    }
  }
}


let App = ({video, onOpen, splash}) => (
    <div className="video">
      <div className="controls">
        <h1 onClick={splash}>Mark<span>&</span>Todi<br/>Brussels</h1>
        <a href='#'
        style={{
          color: video ? 'white': 'black'
        }}
        onClick={onOpen}>{ video ? '✎' : '×' }
        </a>
      </div>
      {
        video == undefined ?
        <Splash />
        :
        video ? <Video /> : <Setup />
      }
    </div>
)

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App
