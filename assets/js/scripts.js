function playGif(overlay) {
  let e = overlay.nextElementSibling;

  if (overlay.dataset.gif) {
    e = overlay;
  }

  if (!e.dataset.gif) return ;

  const bak = e.src;
  e.src = e.dataset.gif;
  e.dataset.gif = bak;

  if (e.dataset.playing) {
    e.removeAttribute('data-playing');
    if (e !== overlay)
      overlay.style.opacity = 1;
  } else {
    e.dataset.playing = true;
    if (e !== overlay)
      overlay.style.opacity = 0;
  }

  e.parentElement
    .nextElementSibling
    .firstElementChild
    .style.opacity = e.dataset.playing ? 0.2 : 1;
}
