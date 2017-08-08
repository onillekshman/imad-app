var button = document.getElementById('counter');

button.onclick = function() {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        
        if(request.readyState === XMLHttpRequest.DONE){
            
            if(request.status === 200){
                
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                
            }
        }
    };
    request.open( 'GET' ,'http://oniljs93.imad.hasura-app.io/counter',true);
    request.send(null);
    
    };
    
    var submit = document.getElementById('submit_btn');
    submit.onclick = function() {
        var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        
        if(request.readyState === XMLHttpRequest.DONE){
            
            if(request.status === 200){
                
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i=0; i<names.length; i++){
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
        
        };
        var nameInput = document.getElementById('name');
        var name = nameInput.value;
        request.open( 'GET' ,'http://oniljs93.imad.hasura-app.io/submit-name?name='+ name, true);
        request.send(null);
        
    };
    var submit = document.getElementById('submit');
    submit.onclick = function() {
        var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        
        if(request.readyState === XMLHttpRequest.DONE){
            
            if(request.status === 200){
                var texts = request.responseText;
                texts = JSON.parse(texts);
                var list = ``;
                for(var i=0; i<texts.length; i++){
                    list += '<p>' + texts + '</p>';
                }
             
            }
            var div = document.getElementById('textdisp');
            div.innerHTML = list;
        }
    }
    };
    var textInput = document.getElementById('textarea');
    var text = textInput.value;
    request.open( 'GET' ,'http://oniljs93.imad.hasura-app.io/:articles/submit-text?text='+ text, true);
        request.send(null);