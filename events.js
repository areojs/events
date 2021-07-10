class EventEmitter {
  constructor() {
    this._events = new Map(); 
  }
  
  on(event, listener) {
    if(typeof event !== 'string') throw new TypeError('First argument must be a string.');
    if(typeof listener !== 'function') throw new TypeError('second argument must be a function.');
    return this._events.set(event, listener);
    
  }
  
  emit(event, ...args) {
    if(!this._events.has(event)) return null;
    return this._events.get(event)
    .apply(this, args);
  }
}

module.exports = EventEmitter;
