/*

modes:

0 - ручной режим

*/

let State = {
  st: true,
  'sex': false,
  'outdoor': true,
  'inddor': true,
  'fruits': true,
  'yami': true,
  'todi': true,
  'mark': true,
  'lamps': true
}

const setup = (state  = State , action) => {
  switch (action.type) {
    case 'SWITCH_OFF':
      return { ...state , st: undefined }
    case 'SETUP_SWITCH':
      return { ...state , st: !state.st }
    case 'SETUP_TAG':
      return { ...state , [action.ky]: !state[action.ky] }
    default:
      return state
  }
}

export default setup
