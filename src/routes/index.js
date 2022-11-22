
const addressRouter = require('./address.route')
const privateInfoRouter = require('./privateInfo.route');
function route(app) {
   
    app.use('/address', addressRouter);
    app.use('/info', privateInfoRouter);
}
module.exports = route;