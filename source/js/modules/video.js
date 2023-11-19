export const setupVideo = () => {
  const video = document.querySelector('.training-gym__video');
  const link = video.querySelector('.training-gym__video-link');
  const button = video.querySelector('.training-gym__button');

  video.addEventListener('click', () => {
    let iframe = document.createElement('iframe');

    if (button.hasAttribute('disabled')) {
      return;
    }

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?si=pbxpGhyXtSEgCP7r&autoplay=1');
    iframe.classList.add('training-gym__iframe');
    iframe.style.border = 'none';

    link.remove();
    button.remove();
    video.appendChild(iframe);
    video.classList.remove('training-gym__video--enabled');
  });

  link.removeAttribute('href');
  video.classList.add('training-gym__video--enabled');
};
