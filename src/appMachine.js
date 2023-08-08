import { createMachine, assign, spawn } from 'xstate';


export const appMachine = createMachine({
  "id": "appMachine",
  "context": {
    
  },
  "initial": "loading",
  "states": {
    "loading": {}
  },
  "on": {
   
  }
}, 
{
  actions: {},
  actors: {},
  guards: {},
  delays: {},
})

