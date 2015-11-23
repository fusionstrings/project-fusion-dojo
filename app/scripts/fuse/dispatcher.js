import topic from 'dojo/topic';
import {storePost} from './store/posts';
import './util/fetch/fetch';

//topic.publish("fetch/get", {url:'//jsonplaceholder.typicode.com/posts'});

// topic.subscribe('get/post', function(){
//     fetch('http://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         return response.json();
//     }).then(json =>{
//         storePost.data = json;
//     });
// });

topic.subscribe('render/view', function(args){
    topic.publish("fetch/get", {url:args.url});
});