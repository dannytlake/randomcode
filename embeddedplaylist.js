var i, c, y, v, s, n;
var im = new Array();
v = document.getElementsByClassName('youtube_embedded_playlist');

for (n = 0; n < v.length; n++) {
  im[n] = v[n].hasAttribute('src')
    ? v[n].getAttribute('src')
    : 'http://i.ytimg.com/vi/' + v[n].id + '/hqdefault.jpg';
}

for (n = 0; n < v.length; n++) {
  y = v[n];
  i = document.createElement('img');
  i.setAttribute('src', im[n]);
  i.setAttribute('class', 'thumb');
  c = document.createElement('div');
  c.setAttribute('class', 'play');
  y.appendChild(i);
  y.appendChild(c);
  y.onclick = function () {
    var t = document.createElement('iframe');
    t.setAttribute(
      'src',
      'https://www.youtube.com/embed/videoseries?list=' + this.id + param(this),
    );
    t.style.width = this.style.width;
    t.style.height = this.style.height;
    t.frameBorder = '0';
    t.allow = 'accelerometer; encrypted-media; gyroscope; picture-in-picture';
    t.allowFullscreen = true;

    this.parentNode.replaceChild(t, this);
  };
}
function param(x) {
  if (x.getAttribute('data-params') !== null) {
    return x.getAttribute('data-params');
  } else {
    return '?autoplay=1';
  }
}
