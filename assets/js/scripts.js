function playGif(e) {
  if (!e.dataset.gif) return ;
  const bak = e.src;
  e.src = e.dataset.gif;
  e.dataset.gif = bak;
}
