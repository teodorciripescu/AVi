const render = require('../../utils/renderPage');

module.exports = async (req, res) => {
    res.statusCode = 200;
    const page = await render('./views/about_project/index.ejs', {user: req.user});
    return res.end(page);
}