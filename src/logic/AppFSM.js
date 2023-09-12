import { createMachine } from 'xstate';

export const AppFSM = {
  "id": "AppFSM",
  "initial": "splash",
  "states": {
    "splash": {
      "on": {
        "PLAY_LOCAL": {
          "target": "open_local_play",
          "reenter": false
        },
        "LOGIN": {
          "target": "logging_in",
          "reenter": false
        }
      }
    },
    "open_local_play": {
      "on": {
        "EXIT": {
          "target": "splash",
          "reenter": false
        }
      }
    },
    "logging_in": {
      "on": {
        "CANCEL": {
          "target": "splash",
          "reenter": false
        }
      }
    },
    "auth_player": {
      "on": {
        "NEW_GAME": {
          "target": "remote_play",
          "reenter": false
        },
        "PLAY_LOCAL": {
          "target": "auth_local_play",
          "reenter": false
        },
        "JOIN_GAME": {
          "target": "remote_play",
          "reenter": false
        }
      }
    },
    "remote_play": {
      "on": {
        "EXIT": {
          "target": "auth_player",
          "reenter": false
        }
      }
    },
    "auth_local_play": {
      "on": {
        "CANCEL": {
          "target": "auth_player",
          "reenter": false
        }
      }
    }
  },
  "on": {
    "LOGOUT_COMPLETE": {
      "target": ".splash",
      "reenter": false
    },
    "LOGIN_COMPLETE": {
      "target": ".auth_player",
      "reenter": false
    }
  }
}

export const AppFSMfunc = {
    actions: {},
    actors: {},
    guards: {},
    delays: {},
}