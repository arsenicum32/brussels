import React from 'react'
import { connect } from 'react-redux'
import { changeVideo } from '../actions'
import DOMAIN from '../helpers/domain'

const mapStateToProps = (state, ownProps) => {
  return {
    src: state.src,
    tags: state.setup
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEnd: (e,src,tags) => {


      //console.log(e.target.volume);


      let ar = Object.keys(src.all);
      ar.splice(ar.indexOf(src.src),1);

      for(var i in tags){
        if(!tags[i]){
          for(var n in src.all){
            if(src.all[n].indexOf(i)!=-1){
              ar.splice(ar.indexOf(n),1);
            }
          }
        }
      }

      //console.log(ar[src.index+1]);



      dispatch(changeVideo(
        ar[ src.index ],
        src.index >= ar.length - 1 ? 0 : src.index + 1,
        ar[src.index+1]
      ))
    },
    nextLoad(e){
      e.target.volume = 0;
    }
  }
}



let Video = ({src,tags,onEnd , nextLoad})=> (
  <div className="vid">
    <video
      src={`http://localhost:4000/${src.src}.mp4`}
      autoPlay
      className="videoFrame"
      type="video/mp4"
      onEnded={(e)=> onEnd(e,src,tags)}
    ></video>
    <video
      className="videoFrame back"
      src={`http://localhost:4000/${src.next}.mp4`}
      autoPlay
      type="video/mp4"
      volume="0"
      onPlay={nextLoad}
    ></video>
  </div>
)

Video = connect(mapStateToProps,mapDispatchToProps)(Video)

export default Video
