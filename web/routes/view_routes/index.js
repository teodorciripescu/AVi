const Router = require('router');
const ejs = require('ejs');
var router = Router();

//Middlewares
const {set_headers, require_auth} = require('../../middlewares');
router.use(set_headers.forPages());
router.use(require_auth);
const {mainPageController} = require('../../controllers');
router.get('/', mainPageController);

const auth = require('./auth');
router.use('/',auth);

const statistics = require('./statistics');
router.use('/statistics', statistics);

const columnsDescription = require('./columnsDescription');
router.use('/columns', columnsDescription);

const table = require('./table');
router.use('/table', table);

const detailedAccident = require('./detailedAccident');
router.use('/accident', detailedAccident);

module.exports = router;