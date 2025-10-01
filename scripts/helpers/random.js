// themes/stellar/scripts/helpers/random.js  (Node 端)
hexo.extend.filter.register('after_render:html', data => {
  const posts = [];
  hexo.locals.get('posts').forEach(p => {
    if (p.random !== false) posts.push('/' + p.path.replace(/index\.html$/, ''));
  });
  const script = `
<script>
  var posts=${JSON.stringify(posts)};
  function toRandomPost(){
    var url=posts[Math.floor(Math.random()*posts.length)];
    window.pjax?pjax.loadUrl(url):location.assign(url);
  }
</script>`;
  return data.replace('</body>', script + '</body>');
});