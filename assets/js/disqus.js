var disqus_config = function () {
    this.page.url = document.getElementsByTagName('body')[0].getAttribute('data-page-url');
    this.page.identifier = document.getElementsByTagName('body')[0].getAttribute('data-page-disqus-identifier');
};
(function() {
    var name = document.getElementsByTagName('body')[0].getAttribute('data-page-disqus-name');
    var d = document, s = d.createElement('script');
    s.src = 'https://' + name + '.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();
