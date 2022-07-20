let models =require('../models');
let asyncLib =require('async');
let bcrypt = require("bcrypt");

module.exports= {

    addUsers	:	(req,	res)	=>	{
        let	lastname	= req.body.lastname;
        let	firstname	= req.body.firstname;
        let	password	= req.body.password;
        let	role	= req.body.role;
console.log(req.body);
        asyncLib.waterfall([
            (done)	=>	{												
                            models.Users.findOne({
                                 attributes:	['nom'],
                                        where:	{	nom:	nom	}
                                    })
                                .then((UsersFound)	=>	{
                                            done(null,	UsersFound);
                                    })
                                    .catch((err)	=>	{
                                                    console.log(err)
                                            return res.status(500).json({	'error':	'unable	to	verify	Users'	});
                                                });
                                },
                                (UsersFound,	done)	=>	{
                                        if	(!UsersFound)	{
                                                                done(null,	UsersFound);
                                        }	else	{
                                                        return res.status(409).json({	'error':	'Users	already	exists'});
                                        }
                        
    }])}}