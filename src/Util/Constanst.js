import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window')
const pointX  = width/375
const pointY = height/667

export {pointX, pointY, width, height}