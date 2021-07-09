class EventEmitter {
  constructor() {
    
    this._events = new Map();
    
  }
  
  on(event, listiner) {
    
    if(typeof event !== 'string') throw new TypeError('First argument must be a string.');
    
    if(typeof listiner !== 'function') throw new TypeError('second argument must be a function.');
    
    return this._events.set(event, listiner);
    
  }
  
  emit(event, ...args) {
    
    if(!this._events.has(event)) return null;
    
    return this._events.get(event)
    .apply(this, args);
    
  }
}

module.exports = EventEmitter;