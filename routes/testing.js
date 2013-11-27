exports.testing = function (req, res) {
    var body = '<h1>This is a test of express app</h1><p>Seeing how it works.</p>';
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', body.length);
    res.end(body);
};