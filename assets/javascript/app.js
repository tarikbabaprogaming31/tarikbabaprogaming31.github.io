class _app {
  id = 0;
  videoElement = null;
  audioElement = null;
  musicVolume = 0.2;
  musicFadeIn = 0;
  skippedIntro = false;
  backgroundToggler = false;
  shouldIgnoreVideo = false;
  effects = ['bounce', 'flash', 'pulse', 'shake', 'swing', 'tada', 'wobble', 'jello'];
  brandDescription = ['tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!','tarik baba pro gaming!!!'];

  titleChanger = (text, delay) => {
    if (!text) return;

    delay = delay || 2000;

    let counter = 0;

    setInterval(() => {
      if (counter < text.length) document.title = text[counter++];
      else document.title = text[(counter = 0)];
    }, delay);
  };

  iconChanger = (urls, delay) => {
    if (!urls) return;

    delay = delay || 2000;

    let counter = 0;

    setInterval(() => {
      if (counter < urls.length) {
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');

        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = urls[counter];

        document.getElementsByTagName('head')[0].appendChild(link);
      } else counter = 0;

      ++counter;
    }, delay);
  };
}

const app = new _app();
