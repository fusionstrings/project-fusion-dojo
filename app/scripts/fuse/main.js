import topic from 'dojo/topic';
import './dispatcher';
// topic.subscribe("get/post", function(){
//         console.log("received:", arguments);
//         
//     fetch('http://jsonplaceholder.typicode.com/posts')
//     .then(function(response) {
//         console.log(response);
//     });
// });
export default function init(){
    console.info('fuse module loaded');
    topic.publish("render/view", {view: 'posts', url:'//jsonplaceholder.typicode.com/posts'});
}