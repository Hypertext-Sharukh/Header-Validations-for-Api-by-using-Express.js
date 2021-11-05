
const express = require('express');
const app = express();
var approute =express.Router();

// Accept Json
approute.use( express.json());
// Accept formdata
approute.use( express.urlencoded({extended:false}));

// Globel svar
var result_sucess = {
                    "status":"Sucessful"
                    };

var result_unsucess = {
                        "status":"UnSucessful"
                      };


 var data = {
                "data":{}
            };
                    
//Get api with Params

approute.get("/fetch/:suppilerid",(res,resp) => {
        if(res.params.suppilerid=="41"){
            resp.status('200').json(data);
        }else{

            resp.status('200').send("no data found");
        }    

});
              
//Get api with query

approute.get('/fetch',(res,resp) => {
    if(res.query.suppilerid=="411"){
        resp.status('200').json(result_sucess);
    }else{

        resp.status('200').json(result_unsucess);
    }    

});
            

//post api with Params

approute.post('/send/:suppilerid',(res,resp) => {
    if(res.params.suppilerid=="41"){
        resp.status('200').json(result_sucess);
    }else{

        resp.status('200').json(result_unsucess);
    }    

});


//post api with query

approute.post('/send',(res,resp) => {
    if(res.query.suppilerid=="411"){
        resp.status('200').json(result_sucess);
    }else{

        resp.status('200').json(result_unsucess);
    }      

})

//PUT api with Params

approute.put('/modify/:suppilerid',(res,resp) => {
    if(res.params.suppilerid=="41"){
        resp.status('200').json(result_sucess);
    }else{

        resp.status('200').json(result_unsucess);
    }    

});


//PUT api with query

approute.put('/modify',(res,resp) => {
    if(res.query.suppilerid=="41"){
        resp.status('200').json(result_sucess);
    }else{

        resp.status('200').json(result_unsucess);
    }    
});

//DELETE api with Params

approute.delete('/delete/:photoid',(res,resp) => {
    if(res.params.photoid=="411"){
        resp.status('200').json(result_sucess);
    }else{

        resp.status('200').json(result_unsucess);
    }     

});


//DELETE api with query

approute.delete('/delete',(res,resp) => {
    if(res.query.photoid=="411"){
        resp.status('200').json(result_sucess);
    }else{

        resp.status('200').json(result_unsucess);
    }    

});


module.exports =approute;

