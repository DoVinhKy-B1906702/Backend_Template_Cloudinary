
const addressRouter = require('./address.route')
const privateInfoRouter = require('./privateInfo.route');
const authRouter = require('./Auth.route');
function route(app) {
   
    app.use('/address', addressRouter);
    app.use('/info', privateInfoRouter);
    app.use('/auth', authRouter);
}
module.exports = route;