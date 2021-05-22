const express=require('express');
const router=express.Router();
const bcrypt =require('bcrypt');

const User= require('../models/User');
// The HTTP 409 Conflict response status code indicates a request conflict with current state of 
// the target resource. Conflicts are most likely to occur in response to a PUT request.

// 201 Created. The request has been fulfilled and resulted in a new resource being created. 
// The newly created resource can be referenced by the URI(s) returned in the entity of the response, 
// with the most specific URI for the resource given by a Location header field.

// The HyperText Transfer Protocol (HTTP) 422 Unprocessable Entity response status code 
// indicates that the server understands the content type of the request entity, and the syntax 
// of the request entity is correct, but it was unable to process the contained instructions.

// // The HTTP 401 Unauthorized client error status response code 
// indicates that the request has not been applied because it 
// lacks valid authentication credentials for the target resource

// The 500 Internal Server Error is a very general HTTP status code that means 
// something has gone wrong on the web 
// site's server but the server could not be more specific on what the exact problem is.

router.post('/', (req, res, next) => {
    User.find({ email:req.body.email })
    .exec()
    .then(user =>{
        if(user.length < 1){                              
            return res.status(401).json({
             message:'Auth Failed'
            });
        }
        bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
       if(err){
           return res.status(401).json({
               message:'Auth Failed'

           });
       }
       if (result){
           return res.status(200).json({
         message:'Auth Successful'
           });
       }
      res.status(401).json({
      message:'Auth Failed'
      });
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
});
  module.exports = router;
