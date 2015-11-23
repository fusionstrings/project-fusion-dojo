import topic from 'dojo/topic';
import '../dispatcher';

topic.publish("fetch/get", {url:'//jsonplaceholder.typicode.com/posts'});