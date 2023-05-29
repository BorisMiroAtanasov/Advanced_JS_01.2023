function requestValidator(object){

    let patern = /([a-z.0-9]+)/gm;
    

    if (object.method !== 'GET' && object.method !== 'POST' && object.method !== 'DELETE' && object.method !== 'CONNECT' ){
        console.log(`Invalid request header: Invalid Method`);
    }else if(object.uri !== 1){
       
        

    }

/// dasdadadasdasddddgggdddadadaddddd

}

   
requestValidator({
  method: 'GET',
  uri: 'svn.public.catalog',
  version: 'HTTP/1.1',
  message: ''
});

requestValidator({
  method: 'OPTIONS',
  uri: 'git.master',
  version: 'HTTP/1.1',
  message: '-recursive'
});