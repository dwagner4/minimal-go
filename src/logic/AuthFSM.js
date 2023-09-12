import { createMachine } from 'xstate';

export const AuthFSM = {
  "id": "AuthFSM",
  "initial": "unauthenticated",
  "states": {
    "unauthenticated": {
      "entry": {
        "type": "sendAppFSMlogout_completet",
        "params": {}
      },
      "on": {
        "login": {
          "target": "try_login"
        },
        "register": {
          "target": "try_register"
        }
      }
    },
    "try_login": {
      "on": {
        "success": {
          "target": "authenticated"
        },
        "error": {
          "target": "unauthenticated"
        },
        "cancel": {
          "target": "unauthenticated"
        },
        "login_error": {
          "internal": true
        }
      }
    },
    "try_register": {
      "on": {
        "success": {
          "target": "authenticated"
        },
        "cancel": {
          "target": "unauthenticated"
        },
        "register_error": {
          "actions": {
            "type": "changeregistrationmsg",
            "params": {}
          },
          "internal": true
        }
      }
    },
    "authenticated": {
      "entry": {
        "type": "senAppFSMloginsuccess",
        "params": {}
      },
      "on": {
        "edit": {
          "target": "editProfile"
        }
      }
    },
    "editProfile": {
      "on": {
        "return": {
          "target": "authenticated"
        },
        "profile_error": {
          "internal": true
        }
      }
    }
  },
  "on": {
    "logout": {
      "target": ".unauthenticated",
      "internal": true
    }
  },
  "predictableActionArguments": true,
  "preserveActionOrder": true
}

export const AuthFSMfunc = {
    actions: {
        "sendAppFSMlogout_completet": (context, event) => {},

        "senAppFSMloginsuccess": (context, event) => {},

        "changeregistrationmsg": (context, event) => {}},
    services: {},
    guards: {},
    delays: {},
}