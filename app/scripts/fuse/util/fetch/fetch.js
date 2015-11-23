import topic from 'dojo/topic';

topic.subscribe('fetch/get', function(arg){
    fetch(arg.url)
    .then(response => {
        return response.json();
    }).then(json =>{
        console.log(json);
        topic.publish("fetch/get/return", {data: json, url:arg.url});
    });
});