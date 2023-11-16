export const setupVideo = () => {
  const video = document.querySelector('.training-gym__video');
  const link = video.querySelector('.training-gym__video-link');
  const button = video.querySelector('.training-gym__button');

  video.addEventListener('click', () => {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('autoplay', '1');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?si=pbxpGhyXtSEgCP7r');
    iframe.style.width = '364px';
    iframe.style.height = '228px';
    iframe.style.border = 'none';

    link.remove();
    button.remove();
    video.appendChild(iframe);
    video.classList.remove('training-gym__video--enabled');
  });

  link.removeAttribute('href');
  video.classList.add('training-gym__video--enabled');
};
