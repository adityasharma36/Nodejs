
import http from 'http'

const PORT = 3000;

const server = http.createServer( async (req,res)=>{

    if(req.method === 'GET'){

        res.end("GET Request get")
        
    }
    else if(req.method === 'POST'){
        res.end("POST Request")
    }
    else if(req.method === 'PATCH'){
        res.end("PATCH Request")
    }else{
        res.end("Other Request")

    }
});

server.listen(PORT,()=>{

    console.log("Hello World");

})