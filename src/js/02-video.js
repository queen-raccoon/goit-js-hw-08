import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerElement = document.getElementById('vimeo-player');
const playerEL = new Player(playerElement);
const videoKey = 'videoplayer-current-time';

const onPlay = ({seconds}) => {
  localStorage.setItem(videoKey, seconds);
};
playerEL.on('timeupdate', throttle(onPlay, 1000));


const checkSavedTime = localStorage.getItem(videoKey);
checkSavedTime === null ? playerEL.setCurrentTime(0): playerEL.setCurrentTime(checkSavedTime);









