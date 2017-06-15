(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', document.body.getAttribute('data-page-google_analytics-tracking_id'), 'auto');
ga('send', 'pageview', {
    'page': document.getElementsByTagName('body')[0].getAttribute('data-page-url'),
    'title': document.getElementsByTagName("title")[0].innerHTML.replace("'", "\\\'")
});
