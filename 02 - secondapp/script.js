import APP from './Component1.js'
console.log(`export default ${APP}`);


import {banana as BANA, orange} from './Component2.js'
console.log(`export BANA ${BANA}`);
console.log(`export orange ${orange}`);



//or:

import * as fruits from './Component2.js'
console.log(`export * banana ${fruits.banana}`);
console.log(`export * oragne ${fruits.orange}`);
