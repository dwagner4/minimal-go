import { createMachine, assign, spawn } from 'xstate';


export const appMachine = createMachine({
  "id": "appMachine",
  "context": {
    log_status: "in"
  },
  "initial": "loading",
  "states": {
    "loading": {},
    "splash": {}
  },
  "on": {
    "LOGOUT": {
      target: "splash",
      actions: [ (ctx, evt) => console.log( ctx, evt ), assign( {log_status: "out"} ) ]
    }
  }
}, 
{
  actions: {},
  actors: {},
  guards: {},
  delays: {},
})

