import dom from 'dojo/dom';
import domConstruct from 'dojo/dom-construct';

import * as dojo from 'dojo';
console.log('dojo.version main', dojo.version);
let greetingNode = dom.byId('greeting');
domConstruct.place('<em> Dojo!</em>', greetingNode);
        
