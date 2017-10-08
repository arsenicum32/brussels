/*

modes:

0 - ручной режим

*/

let State = {
  src: "bars",
  index: 0,
  next: "about",
  paginator: 5,
  all: { '25': [],
  about: [],
  arch: [],
  ars: [],
  //ars2: [],
  baffle: [],
  //bars: [],
  blu: [],
  bookshop: [],
  br4: [],
  //breakfest: [],
  breakfest2: [],
  cab: [],
  cam: [],
  cam2: [],
  car: [],
  cars: [],
  cars2: [],
  child: [],
  child2: [],
  child3: [],
  //chirch: [],
  church: [],
  column: [],
  cook: [],
  cran: [],
  desigual: [],
  door: [],
  eat: [],
  //eat2: [],
  el2: [],
  fallingleafs: [],
  flag: [],
//  flagb: [], // edit
  fontan: [],
//  fontan0: [], // edit
//  fontan2: [], // edit
  fontan3: [],
//  foot: [],
//  fourket: [],
  fourket2: [],
  fourket3: [],
//  game: [], //90
  gitar: [],
  gitarrose: [],
  grass: [],
  hairs: [],
//  hand: [], // cool
  hands: [],
  hands2: [],
//  hard: [], // awesome
//  hero: [], // fucking yeah
//  hm: [],
  houses: [],
  kafe: [],
  keys: [],
  kisspiss: [],
//  kit: [],
  kr: [],
//  kr2: [], //90
  lamp: [],
  lamp2: [],
  lamps: [],
  lamps2: [],
  //lamps3: [],
  leaf: [],
  leafs: [],
  mac: [],
  mari: [],
  mari2: [],
  mari3: [],
  marks: [],
//  mary4: [],
  masha3: [],
  men: [],
//  metro: [],
  midi: [],
  noise: [],
  notgoing: [],
  nute: [],
  people: [],
  people2: [],
//  pisat: [],
  pisi: [],
  pisi2: [],
  pizza: [],
//  pizzahut: [],
  plat: [],
  platan: [],
  portraits: [],
  ptizza: [],
  readymade: [],
  red: [],
//  round: [],
//  rubush: [],
  show: [],
  show2: [],
//  sis2: [],
//  sisi: [],
//  sky: [], //90
  snikers: [],
  snikkersoff: [],
  spaceinv: [],
  square: [],
  starbucks: [],
  starbuks2: [],
  str: [],
  string: [],
//  superlamps: [], //awesome
//  table: [],
  talks: [],
  tiolet2: [],
  tobl: [],
//  toilet: [],
  toilet2: [],
//  us: [],
  velo: [],
//  walk: [],
  wall: [],
  windows: [],
  yami: [],
  zr: [] }
}

const video = (state  = State , action) => {
  switch (action.type) {
    case 'CHANGE_VIDEO':
      return { ...state , src: action.src ,
        index : action.index , next : action.next
      }
    case 'TURN':
      return { ...state, paginator: action.page }
    default:
      return state
  }
}

export default video
