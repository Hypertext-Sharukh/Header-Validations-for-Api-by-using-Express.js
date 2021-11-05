
const express = require('express');
const app = express();
const handeler = require('./apihandler.js');
const port ='8080';
app.use(function (req, res, next) {
    
    // Set Headers for Response 

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS'); 
    res.setHeader('Content-Type','application/json');

    // required Request headers

   var Access_Control_Allow_Origin = req.header('Access-Control-Allow-Origin');
   var Access_Control_Allow_Headers = req.header('Access-Control-Allow-Headers');
   var Access_Control_Allow_Methods = req.header('Access-Control-Allow-Methods'); 
   var Content_Type = req.header('Content-Type'); 

   if( Content_Type == undefined||Access_Control_Allow_Origin == undefined || Access_Control_Allow_Headers == undefined || Access_Control_Allow_Methods  == undefined ){
        res.status("400").send('{"error":"Content-Type,Access-Control-Allow-Origin,Access-Control-Allow-Headers,Access-Control-Allow-Methods headers required" }'); 
   }else if(Content_Type != 'application/json'){  
    res.status("400").send('{"error":"Content-Type shouble be application/json"');
    
    }else if(Access_Control_Allow_Origin != '*'){  
        res.status("400").send('{"error":"Access-Control-Allow-Origin shouble be *"');
    }else if(Access_Control_Allow_Headers != 'Origin, X-Requested-With, Content-Type, Accept'){  
        res.status("400").send('{"error":"Access-Control-Allow-Headers should be Origin, X-Requested-With, Content-Type, Accept"');
    }else if(Access_Control_Allow_Methods  !='POST, GET, PATCH, DELETE, OPTIONS'){  
        res.status("400").send('{"error":"Access-Control-Allow-Methods should be POST, GET, PATCH, DELETE, OPTIONS"');
    }else{  
        next();
    }

});
app.use('/api',handeler);

app.listen(port);