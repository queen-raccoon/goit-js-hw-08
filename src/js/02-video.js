import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerEL = new Player('vimeo-player');
const videoKey = 'videoplayer-current-time';

    const onPlay = ({ seconds }) => {
        console.log(`time is: ${seconds}`);
        localStorage.setItem(videoKey, JSON.stringify(seconds));
    };
playerEL.on('timeupdate', throttle(onPlay, 1000));

const checkTime = localStorage.getItem(videoKey);
playerEL.setCurrentTime(checkTime);

