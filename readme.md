# @areojs/events

```javascript
const EventEmitter = require("@areojs/events");
const Events = new EventEmitter();
Events.on('newMessage', async message => {
  console.log(`${message.user.name}: ${message.content}`);
});
/* ... */
Events.emit('newMessage', {
     user: {
       name: 'Wz'
     },
     content: 'Hello guys!'
   });
/* Wz: hello guys! */
```
