var express = require('express');
var usersCtrl = require('./route/usersCtrl');

//Router

exports.router = (() => 
{var apiRouter = express.Router();

    //Users routes// 
    
    apiRouter.route('/users/addUsers/').post(usersCtrl.addUsers)
    
    // apiRouter.route('/users/getUsers/').get(usersCtrl.getUsers)// apiRouter.route('/users/getAllUsers/').get(usersCtrl.getAllUsers)// apiRouter.route('/users/updateusers/').put(usersCtrl.updateusers)// apiRouter.route('/users/deleteusers/').delete(usersCtrl.deleteusers)
    
    return apiRouter;
})();