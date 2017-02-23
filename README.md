# exceptional objects

create strict objects that will throw an exception if you try to get a property
from them that they don't have.

uses Proxy.

here's some typed up:

```js
const exceptional = require('exceptional-objects')
const dog = exceptional({bark: 'woof', color: 'tan'})
dog.bark
//-> 'woof'
dog.color
//-> 'tan'
dog.name
//-> throws "Error: Object does not contain name"
```

you can still set things like normal:

```js
const lol = exceptional({})
console.log(lol.dog) //-> throws "Error: Object does not contain dog"
lol.dog = 'henry'
console.log(lol.dog) //-> henry
```
