import firstImg from '../../img/0.jpg'
import secImg from '../../img/1.jpg'
import thirdImg from '../../img/2.jpg'
export const initialState = {
    local: [firstImg,secImg,thirdImg],
    remote: [],
    imgId: 0,
    source: 'local',
}