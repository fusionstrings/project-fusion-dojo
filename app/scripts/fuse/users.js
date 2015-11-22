import topic from 'dojo/topic';
topic.subscribe("get/post", function(){
        console.log("received:", arguments);
        
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
        console.log(response);
    });
});