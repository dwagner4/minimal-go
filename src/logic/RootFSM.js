import { createMachine, assign, spawn } from 'xstate';
import { AppFSM, AppFSMfunc } from './AppFSM.js'
import { AuthFSM, AuthFSMfunc } from './AuthFSM.js'

const appfsm = createMachine( AppFSM, AppFSMfunc )
const authfsm = createMachine( AuthFSM, AuthFSMfunc )

export const RootFSM = createMachine({
  "id": "RootFSM",
  "context": {
    "app-fsm": null,
    "auth-fsm": null,
    "chat-fsm": null,
    "db-client": null,
  },
  "initial": "Entry",
  "states": {
    "Entry": {
      "entry": assign({
        "app-fsm":() => spawn(appfsm), 
        "auth-fsm":() => spawn(authfsm), 
        // "chat-fsm":() => spawn(chatfsm), 
        // "db-client":() => spawn(dbfsm)
      }),
      "on": {
        "complete": {
          "target": "running",
          "reenter": false
        }
      }
    },
    "running": {}
  },
  "on": {
    "DB_UPDATE": {
      "target": ".running",
      "actions": {
        "type": "gamestateupdate",
        "params": {}
      },
      "reenter": false
    }
  }
}, {
    actions: {"gamestateupdate": ({ context, event }) => {}},
    actors: {},
    guards: {},
    delays: {},
})