import firstImg from '../../img/0.jpg'
import secImg from '../../img/1.jpg'
import thirdImg from '../../img/2.jpg'
import firstAudio from '../../audio/0.mp3'
import secAudio from '../../audio/1.mp3'
import thirdAudio from '../../audio/2.mp3'
export const initialState = {
    local: [firstImg, secImg, thirdImg],
    remote: [],
    imgId: 0,
    source: 'local',
    audio: ['../../audio/0.mp3', '../../audio/1.mp3', '../../audio/2.mp3'],
    audioId: 0,
    isPlay: 'false',
}