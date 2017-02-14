'use strict'

class Events {
    on(event, fn) {
        if('function' !== typeof fn){
            console.error('callback function is required && must be a function')
            return
        }

        this._cbs = this._cbs || {};

        (this._cbs[event] = this._cbs[event] || []).push(fn)
    }

    emit(event) {
        this._cbs = this._cbs || {}
        let callbacks = this._cbs[event],
            args = ([]).slice.call(arguments, 1)
        
        if(callbacks) {
            callbacks = callbacks.slice(0)
            callbacks.forEach(cb => {
                cb.apply(null, args)
            })
        }
    }

    off(event, fn) {
        if(!fn) {

        }

        if(arguments.length === 1) {
            
        }
    }
}

module.exports = Events
