import React from 'react'
import { connect } from 'react-redux'
import { TurnPage } from '../actions'
import DOMAIN from '../helpers/domain'


const mapStateToProps = (state, ownProps)=>({
  videos: Object.keys(state.src.all),
  paginator: state.src.paginator
})
const mapDispatchToProps = dispatch =>({
  setPaginator: page=> {
    dispatch(TurnPage(page))
  }
})

let Splash = ({videos , paginator, setPaginator}) => (
  <div>
    <h4>Hello, Guest!</h4>
    <p>This is Timeline!</p>
    <div className="frames">
    {
      videos.slice(paginator - 5, paginator).map((v,n)=>{
        return <div key={n} className="itemFrames">
          <video
            src={`${DOMAIN}/${v}.mp4`}
            autoPlay
            loop
            onPlay={e=>e.target.volume=0}
            style={{width:"120px"}}
            type="video/mp4"
          ></video>
          <br/><span><b>{n+paginator-5}</b> name: {v}</span>
        </div>
      })
    }
    </div>
    <div className="pages">
      {
        [ 5,10,15,20,25,30,45,50,55,60,65,70,75,80,85, 90 ].map(e=>{
          return <a key={e} href='#' style={{
            borderBottom: paginator==e? '2px solid black' : 'none'
          }}
          onClick={_=> setPaginator(e) }
          >{e}</a>
        })
      }
    </div>
  </div>
)

Splash = connect(mapStateToProps, mapDispatchToProps)(Splash)

export default Splash
