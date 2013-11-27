/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.testing = function (req, res) {
    var body = '<h1>This is a test of express app</h1><p>Seeing how it works.</p>';
    res.setHeader('Content-Length', body.length);
    res.end(body);
};