import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', e => {
  localStorage.setItem('videoplayer-current-time', e.seconds);
});

const currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime).then();
