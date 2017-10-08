export const changeVideo = (src,index,next) => {
  return {
    type: 'CHANGE_VIDEO',
    src,
    index,
    next
  }
}
export const setupSwitch = () => ({type: 'SETUP_SWITCH'})

export const switchOff = () => ({type: 'SWITCH_OFF'})

export const TurnPage = (page) => ({type: 'TURN', page})



export const canPlay = () => ({type: 'SETUP_CAN'})

export const setupLoad = () => {
  return {
    type: 'SETUP_LOAD'
  }
}

export const changeAction = (ky)=> {
  return {
    type: 'SETUP_TAG',
    ky
  }
}
