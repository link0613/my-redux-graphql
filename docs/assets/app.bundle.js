webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _About = __webpack_require__(971);

Object.defineProperty(exports, 'About', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_About).default;
  }
});

var _Home = __webpack_require__(972);

Object.defineProperty(exports, 'Home', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Home).default;
  }
});

var _PageNotFound = __webpack_require__(973);

Object.defineProperty(exports, 'PageNotFound', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PageNotFound).default;
  }
});

var _Login = __webpack_require__(974);

Object.defineProperty(exports, 'Login', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Login).default;
  }
});

var _Register = __webpack_require__(975);

Object.defineProperty(exports, 'Register', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Register).default;
  }
});

var _Protected = __webpack_require__(976);

Object.defineProperty(exports, 'Protected', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Protected).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

exports.receivedUserLoggedIn = receivedUserLoggedIn;
exports.errorUserLoggedIn = errorUserLoggedIn;
exports.setLoadingStateForUserLogin = setLoadingStateForUserLogin;
exports.unsetLoadingStateForUserLogin = unsetLoadingStateForUserLogin;
exports.receivedUserRegister = receivedUserRegister;
exports.errorUserRegister = errorUserRegister;
exports.setLoadingStateForUserRegister = setLoadingStateForUserRegister;
exports.unsetLoadingStateForUserRegister = unsetLoadingStateForUserRegister;
exports.setUserLogout = setUserLogout;
exports.checkIfUserIsAuthenticated = checkIfUserIsAuthenticated;
exports.resetLogError = resetLogError;

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

var _auth = __webpack_require__(164);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormat = 'DD/MM/YYYY HH:mm';

/* -----------------------------------------
  constants
 ------------------------------------------*/
var CHECK_IS_USER_IS_AUTHENTICATED = 'CHECK_IS_USER_IS_AUTHENTICATED';

var RECEIVED_USER_LOGGED_IN = 'RECEIVED_USER_LOGGED_IN';
var ERROR_USER_LOGGED_IN = 'ERROR_USER_LOGGED_IN';

var SET_LOADING_LOGGED_IN = 'SET_LOADING_LOGGED_IN';
var UNSET_LOADING_LOGGED_IN = 'UNSET_LOADING_LOGGED_IN';

var RECEIVED_USER_REGISTER = 'RECEIVED_USER_REGISTER';
var ERROR_USER_REGISTER = 'ERROR_USER_REGISTER';

var SET_LOADING_REGISTER = 'SET_LOADING_REGISTER';
var UNSET_LOADING_REGISTER = 'UNSET_LOADING_REGISTER';

var SET_USER_LOGOUT = 'SET_USER_LOGOUT';

var RESET_LOG_ERRORS = 'RESET_LOG_ERRORS';

/* -----------------------------------------
  Reducer
 ------------------------------------------*/
var emptyUser = {
  id: '',
  username: '',
  lastLogin: '',
  createdAt: '',
  modifiedAt: ''
};

var initialState = _extends({
  isAuthenticated: false,
  lastActionTime: null,
  mutationLoading: false,
  errors: null
}, emptyUser);

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case RECEIVED_USER_LOGGED_IN:
    case RECEIVED_USER_REGISTER:
      return _extends({}, state, {
        lastActionTime: action.time,
        isAuthenticated: action.isAuthenticated,
        id: action.user.id,
        username: action.user.username,
        lastLogin: action.user.lastLogin,
        createdAt: action.user.createdAt,
        modifiedAt: action.user.modifiedAt,
        lastRefreshTime: action.time,
        error: null
      });

    case ERROR_USER_LOGGED_IN:
    case ERROR_USER_REGISTER:
      return _extends({}, state, {
        lastActionTime: action.time,
        isAuthenticated: action.isAuthenticated,
        // errors:
        error: _extends({}, action.error),
        // user infos:
        id: initialState.id,
        username: initialState.username,
        lastLogin: initialState.lastLogin,
        createdAt: initialState.createdAt,
        modifiedAt: initialState.modifiedAt
      });

    case SET_LOADING_LOGGED_IN:
    case SET_LOADING_REGISTER:
    case UNSET_LOADING_LOGGED_IN:
    case UNSET_LOADING_REGISTER:
      return _extends({}, state, {
        lastActionTime: action.time,
        mutationLoading: action.loading
      });

    case CHECK_IS_USER_IS_AUTHENTICATED:
      return _extends({}, state, {
        lastActionTime: action.time,
        isAuthenticated: action.isAuthenticated,
        // user infos from storage if authenticated:
        id: action.user.id,
        username: action.user.username,
        lastLogin: action.user.lastLogin,
        createdAt: action.user.createdAt,
        modifiedAt: action.user.modifiedAt
      });

    case SET_USER_LOGOUT:
      return _extends({}, state, {
        lastActionTime: action.time,
        isAuthenticated: action.isAuthenticated,
        id: action.user.id,
        username: action.user.username,
        lastLogin: action.user.lastLogin,
        createdAt: action.user.createdAt,
        modifiedAt: action.user.modifiedAt
      });

    case RESET_LOG_ERRORS:
      return _extends({}, state, {
        error: null
      });

    default:
      return state;
  }
};

exports.default = _default;

/* -----------------------------------------
  action creators
 ------------------------------------------*/

// //////////////////
// login sucess:
// //////////////////

function receivedUserLoggedIn() {
  var userToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var user = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyUser;
  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _moment2.default)().format(dateFormat);

  var isAuthenticated = userToken ? true : false;

  _auth.auth.clearAllAppStorage(); // clear previous token
  _auth.auth.setToken(userToken); // set token to default store = localStorage and to default token key = 'token'
  _auth.auth.setUserInfo(user);

  return {
    type: RECEIVED_USER_LOGGED_IN,
    time: time,
    isAuthenticated: isAuthenticated,
    user: user
  };
}
// //////////////////
// login error:
// //////////////////
function errorUserLoggedIn() {
  var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _moment2.default)().format(dateFormat);

  _auth.auth.clearAllAppStorage(); // clear previous token

  return {
    type: ERROR_USER_LOGGED_IN,
    time: time,
    error: error,
    isAuthenticated: false
  };
}
// /////////////////////////////
// set loading state for login
// /////////////////////////////
function setLoadingStateForUserLogin() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  return {
    type: SET_LOADING_LOGGED_IN,
    time: time,
    loading: true
  };
}
// /////////////////////////////
// unset loading state for login
// /////////////////////////////
function unsetLoadingStateForUserLogin() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  return {
    type: UNSET_LOADING_LOGGED_IN,
    time: time,
    loading: false
  };
}
// //////////////////
// register sucess:
// //////////////////
function receivedUserRegister() {
  var userToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var user = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyUser;
  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _moment2.default)().format(dateFormat);

  var isAuthenticated = userToken ? true : false;

  _auth.auth.clearAllAppStorage(); // clear previous token
  _auth.auth.setToken(userToken); // set token to default store = localStorage and to default token key = 'token'
  _auth.auth.setUserInfo(user);

  return {
    type: RECEIVED_USER_REGISTER,
    time: time,
    isAuthenticated: isAuthenticated,
    user: user
  };
}
// //////////////////
// register error:
// //////////////////
function errorUserRegister() {
  var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _moment2.default)().format(dateFormat);

  _auth.auth.clearAllAppStorage(); // clear previous token

  return {
    type: ERROR_USER_REGISTER,
    time: time,
    error: error,
    isAuthenticated: false
  };
}
// /////////////////////////////
// set loading state for register
// /////////////////////////////
function setLoadingStateForUserRegister() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  return {
    type: SET_LOADING_REGISTER,
    time: time,
    loading: true
  };
}
// /////////////////////////////
// unset loading state for register
// /////////////////////////////
function unsetLoadingStateForUserRegister() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  return {
    type: UNSET_LOADING_REGISTER,
    time: time,
    loading: false
  };
}
// //////////////////
// user logout:
// //////////////////
function setUserLogout() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  _auth.auth.clearAllAppStorage();
  return {
    type: SET_USER_LOGOUT,
    time: time,
    isAuthenticated: false,
    user: emptyUser
  };
}
// //////////////////////////////
// check user auth (check token)
// //////////////////////////////
function checkIfUserIsAuthenticated() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().format(dateFormat);

  var user = _auth.auth.getUserInfo() ? _auth.auth.getUserInfo() : emptyUser;
  // need token and user info in localStorage to be authenticated
  var isAuthenticated = _auth.auth.isAuthenticated() && checkUserHasId(user) ? true : false;

  return {
    type: CHECK_IS_USER_IS_AUTHENTICATED,
    time: time,
    isAuthenticated: isAuthenticated,
    user: user
  };
}

function checkUserHasId(user) {
  return user && user.id && user.id.length > 0;
}

// ////////////////////////////////
// reset ligon and register error:
// ////////////////////////////////
function resetLogError() {
  return {
    type: RESET_LOG_ERRORS
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(dateFormat, 'dateFormat', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(CHECK_IS_USER_IS_AUTHENTICATED, 'CHECK_IS_USER_IS_AUTHENTICATED', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(RECEIVED_USER_LOGGED_IN, 'RECEIVED_USER_LOGGED_IN', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(ERROR_USER_LOGGED_IN, 'ERROR_USER_LOGGED_IN', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(SET_LOADING_LOGGED_IN, 'SET_LOADING_LOGGED_IN', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(UNSET_LOADING_LOGGED_IN, 'UNSET_LOADING_LOGGED_IN', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(RECEIVED_USER_REGISTER, 'RECEIVED_USER_REGISTER', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(ERROR_USER_REGISTER, 'ERROR_USER_REGISTER', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(SET_LOADING_REGISTER, 'SET_LOADING_REGISTER', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(UNSET_LOADING_REGISTER, 'UNSET_LOADING_REGISTER', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(SET_USER_LOGOUT, 'SET_USER_LOGOUT', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(RESET_LOG_ERRORS, 'RESET_LOG_ERRORS', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(emptyUser, 'emptyUser', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(receivedUserLoggedIn, 'receivedUserLoggedIn', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(errorUserLoggedIn, 'errorUserLoggedIn', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(setLoadingStateForUserLogin, 'setLoadingStateForUserLogin', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(unsetLoadingStateForUserLogin, 'unsetLoadingStateForUserLogin', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(receivedUserRegister, 'receivedUserRegister', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(errorUserRegister, 'errorUserRegister', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(setLoadingStateForUserRegister, 'setLoadingStateForUserRegister', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(unsetLoadingStateForUserRegister, 'unsetLoadingStateForUserRegister', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(setUserLogout, 'setUserLogout', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(checkIfUserIsAuthenticated, 'checkIfUserIsAuthenticated', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(checkUserHasId, 'checkUserHasId', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(resetLogError, 'resetLogError', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/userAuth.js');
}();

;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//  weak

var TOKEN_KEY = 'token';
var USER_INFO = 'userInfo';

var APP_PERSIST_STORES_TYPES = ['localStorage', 'sessionStorage'];

var parse = JSON.parse;
var stringify = JSON.stringify;
/*
  auth object
  -> store "TOKEN_KEY"
  - default storage is "localStorage"
  - default token key is 'token'
 */
var auth = exports.auth = {
  // -------------------------
  // token
  // -------------------------
  getToken: function getToken() {
    var fromStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOKEN_KEY;

    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      return localStorage && localStorage.getItem(tokenKey) || null;
    }
    // sessionStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      return sessionStorage && sessionStorage.getItem(tokenKey) || null;
    }
    // default:
    return null;
  },
  setToken: function setToken() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var toStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : TOKEN_KEY;

    if (!value || value.length <= 0) {
      return;
    }
    // localStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage) {
        localStorage.setItem(tokenKey, value);
      }
    }
    // sessionStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage) {
        sessionStorage.setItem(tokenKey, value);
      }
    }
  },

  /*
      Note: 'isAuthenticated' just checks 'tokenKey' on store (localStorage by default or sessionStorage)
       You may think: 'ok I just put an empty token key and I have access to protected routes?''
          -> answer is:  YES^^
       BUT
       -> : your backend will not recognize a wrong token so private data or safe and you protected view could be a bit ugly without any data.
        => ON CONCLUSION: this aim of 'isAuthenticated'
          -> is to help for a better "user experience"  (= better than displaying a view with no data since server did not accept the user).
          -> it is not a security purpose (security comes from backend, since frontend is easily hackable => user has access to all your frontend)
   */
  isAuthenticated: function isAuthenticated() {
    var fromStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOKEN_KEY;

    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage && localStorage.getItem(tokenKey)) {
        return true;
      } else {
        return false;
      }
    }
    // sessionStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage && sessionStorage.getItem(tokenKey)) {
        return true;
      } else {
        return false;
      }
    }
    // default:
    return false;
  },
  clearToken: function clearToken() {
    var tokenKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : TOKEN_KEY;

    // localStorage:
    if (localStorage && localStorage[tokenKey]) {
      localStorage.removeItem(tokenKey);
    }
    // sessionStorage:
    if (sessionStorage && sessionStorage[tokenKey]) {
      sessionStorage.removeItem(tokenKey);
    }
  },


  // -------------------------
  // USER_INFO
  // -------------------------
  getUserInfo: function getUserInfo() {
    var fromStorage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var userInfoKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : USER_INFO;

    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      return localStorage && parse(localStorage.getItem(userInfoKey)) || null;
    }
    // sessionStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      return sessionStorage && parse(sessionStorage.getItem(userInfoKey)) || null;
    }
    // default:
    return null;
  },
  setUserInfo: function setUserInfo() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var toStorage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : APP_PERSIST_STORES_TYPES[0];
    var userInfoKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : USER_INFO;

    if (!value || value.length <= 0) {
      return;
    }
    // localStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage) {
        localStorage.setItem(userInfoKey, stringify(value));
      }
    }
    // sessionStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage) {
        sessionStorage.setItem(userInfoKey, stringify(value));
      }
    }
  },
  clearUserInfo: function clearUserInfo() {
    var userInfoKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : USER_INFO;

    // localStorage:
    if (localStorage && localStorage[userInfoKey]) {
      localStorage.removeItem(userInfoKey);
    }
    // sessionStorage:
    if (sessionStorage && sessionStorage[userInfoKey]) {
      sessionStorage.removeItem(userInfoKey);
    }
  },


  // ---------------------------
  // common
  // ---------------------------
  clearAllAppStorage: function clearAllAppStorage() {
    if (localStorage) {
      localStorage.clear();
    }
    if (sessionStorage) {
      sessionStorage.clear();
    }
  }
};

var _default = auth;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TOKEN_KEY, 'TOKEN_KEY', '/Volumes/Data/develop/mack-graphql-source/src/app/services/auth/index.js');

  __REACT_HOT_LOADER__.register(USER_INFO, 'USER_INFO', '/Volumes/Data/develop/mack-graphql-source/src/app/services/auth/index.js');

  __REACT_HOT_LOADER__.register(APP_PERSIST_STORES_TYPES, 'APP_PERSIST_STORES_TYPES', '/Volumes/Data/develop/mack-graphql-source/src/app/services/auth/index.js');

  __REACT_HOT_LOADER__.register(parse, 'parse', '/Volumes/Data/develop/mack-graphql-source/src/app/services/auth/index.js');

  __REACT_HOT_LOADER__.register(stringify, 'stringify', '/Volumes/Data/develop/mack-graphql-source/src/app/services/auth/index.js');

  __REACT_HOT_LOADER__.register(auth, 'auth', '/Volumes/Data/develop/mack-graphql-source/src/app/services/auth/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/services/auth/index.js');
}();

;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apolloClient = undefined;

var _reactApollo = __webpack_require__(103);

var _config = __webpack_require__(928);

//  weak


var networkInterface = (0, _reactApollo.createNetworkInterface)({
  uri: _config.appConfig.apollo.networkInterface
  // connectToDevTools: true
  // transportBatching: true
});

networkInterface.use([{
  applyMiddleware: function applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}; // Create the header object if needed.
    }
    // get the authentication token from local storage if it exists
    var token = localStorage.getItem('token');
    if (token) {
      req.options.headers.authorization = token ? 'Bearer ' + token : null;
    }
    next();
  }
}]);

var apolloClient = exports.apolloClient = new _reactApollo.ApolloClient({
  networkInterface: networkInterface
});

var _default = apolloClient;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(networkInterface, 'networkInterface', '/Volumes/Data/develop/mack-graphql-source/src/app/services/apollo/index.js');

  __REACT_HOT_LOADER__.register(apolloClient, 'apolloClient', '/Volumes/Data/develop/mack-graphql-source/src/app/services/apollo/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/services/apollo/index.js');
}();

;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Jumbotron = __webpack_require__(242);

Object.defineProperty(exports, 'Jumbotron', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Jumbotron).default;
  }
});

var _NavigationBar = __webpack_require__(938);

Object.defineProperty(exports, 'NavigationBar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NavigationBar).default;
  }
});

var _BackToTop = __webpack_require__(944);

Object.defineProperty(exports, 'BackToTop', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BackToTop).default;
  }
});

var _ErrorAlert = __webpack_require__(955);

Object.defineProperty(exports, 'ErrorAlert', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ErrorAlert).default;
  }
});

var _WarningAlert = __webpack_require__(956);

Object.defineProperty(exports, 'WarningAlert', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_WarningAlert).default;
  }
});

var _Alert = __webpack_require__(957);

Object.defineProperty(exports, 'Alert', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Alert).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var Jumbotron = function Jumbotron(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'jumbotron' },
    children
  );
};

Jumbotron.propTypes = {
  children: _propTypes2.default.node
};

var _default = Jumbotron;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Jumbotron, 'Jumbotron', '/Volumes/Data/develop/mack-graphql-source/src/app/components/jumbotron/Jumbotron.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/components/jumbotron/Jumbotron.js');
}();

;

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = __webpack_require__(241);

var _navigation = __webpack_require__(958);

var _navigation2 = _interopRequireDefault(_navigation);

var _redux = __webpack_require__(40);

var _reactRedux = __webpack_require__(88);

var _views = __webpack_require__(87);

var viewsActions = _interopRequireWildcard(_views);

var _userAuth = __webpack_require__(163);

var userAuthActions = _interopRequireWildcard(_userAuth);

var _MainRoutes = __webpack_require__(968);

var _MainRoutes2 = _interopRequireDefault(_MainRoutes);

var _reactRouterDom = __webpack_require__(45);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      navModel: _navigation2.default
    }, _this.handleLeftNavItemClick = function () {
      var _this2;

      return (_this2 = _this).__handleLeftNavItemClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handleRightNavItemClick = function () {
      var _this3;

      return (_this3 = _this).__handleRightNavItemClick__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var checkIfUserIsAuthenticated = this.props.actions.checkIfUserIsAuthenticated;


      checkIfUserIsAuthenticated();
    }
  }, {
    key: 'render',
    value: function render() {
      var navModel = this.state.navModel;
      var _props = this.props,
          children = _props.children,
          userIsAuthenticated = _props.userIsAuthenticated;


      return _react2.default.createElement(
        'div',
        { id: 'appContainer' },
        _react2.default.createElement(_components.NavigationBar, {
          brand: navModel.brand,
          navModel: navModel,
          userIsAuthenticated: userIsAuthenticated,
          handleLeftNavItemClick: this.handleLeftNavItemClick,
          handleRightNavItemClick: this.handleRightNavItemClick
        }),
        _react2.default.createElement('h1', null),
        _react2.default.createElement(
          'div',
          { className: 'container-fluid' },
          _react2.default.createElement(_MainRoutes2.default, null)
        ),
        _react2.default.createElement(_components.BackToTop, {
          minScrollY: 40,
          scrollTo: 'appContainer'
        })
      );
    }
  }, {
    key: '__handleLeftNavItemClick__REACT_HOT_LOADER__',
    value: function __handleLeftNavItemClick__REACT_HOT_LOADER__(event, viewName) {
      if (viewName === 'logout') {
        var setUserLogout = this.props.actions.setUserLogout;

        setUserLogout();
      }
    }
  }, {
    key: '__handleRightNavItemClick__REACT_HOT_LOADER__',
    value: function __handleRightNavItemClick__REACT_HOT_LOADER__(event, viewName) {
      if (viewName === 'logout') {
        var setUserLogout = this.props.actions.setUserLogout;

        setUserLogout();
      }
    }
  }]);

  return App;
}(_react.Component);

App.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  // userAuth
  userIsAuthenticated: _propTypes2.default.bool.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    // userAuth:
    userIsAuthenticated: state.userAuth.isAuthenticated
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(_extends({}, viewsActions, userAuthActions), dispatch)
  };
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App));

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/app/App.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/app/App.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/app/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/app/App.js');
}();

;

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(273);
module.exports = __webpack_require__(753);


/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactHotLoader = __webpack_require__(853);

var _reactTapEventPlugin = __webpack_require__(340);

var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

__webpack_require__(863);

__webpack_require__(31);

__webpack_require__(864);

__webpack_require__(865);

__webpack_require__(866);

__webpack_require__(867);

var _Root = __webpack_require__(868);

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ELEMENT_TO_BOOTSTRAP = 'root'; //  weak

var BootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);

(0, _reactTapEventPlugin2.default)();

var renderApp = function renderApp(RootComponent) {
  (0, _reactDom.render)(_react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    _react2.default.createElement(RootComponent, null)
  ), BootstrapedElement);
};

renderApp(_Root2.default);

if (false) {
  module.hot.accept('./Root', function () {
    var RootComponent = require('./Root').default;
    renderApp(RootComponent);
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ELEMENT_TO_BOOTSTRAP, 'ELEMENT_TO_BOOTSTRAP', '/Volumes/Data/develop/mack-graphql-source/src/app/index.js');

  __REACT_HOT_LOADER__.register(BootstrapedElement, 'BootstrapedElement', '/Volumes/Data/develop/mack-graphql-source/src/app/index.js');

  __REACT_HOT_LOADER__.register(renderApp, 'renderApp', '/Volumes/Data/develop/mack-graphql-source/src/app/index.js');
}();

;

/***/ }),

/***/ 853:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(854);


/***/ }),

/***/ 854:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable global-require */



if (true) {
  module.exports = __webpack_require__(855);
} else {
  module.exports = require('./index.dev');
}

/***/ }),

/***/ 855:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.AppContainer = __webpack_require__(856);

/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable global-require */



if (true) {
  module.exports = __webpack_require__(857);
} else {
  module.exports = require('./AppContainer.dev');
}

/***/ }),

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable react/prop-types */



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(0);
var Component = React.Component;

var AppContainer = function (_Component) {
  _inherits(AppContainer, _Component);

  function AppContainer() {
    _classCallCheck(this, AppContainer);

    return _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).apply(this, arguments));
  }

  _createClass(AppContainer, [{
    key: 'render',
    value: function render() {
      if (this.props.component) {
        return React.createElement(this.props.component, this.props.props);
      }

      return React.Children.only(this.props.children);
    }
  }]);

  return AppContainer;
}(Component);

module.exports = AppContainer;

/***/ }),

/***/ 863:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 864:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 865:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(45);

var _history = __webpack_require__(227);

var _reactApollo = __webpack_require__(103);

var _apollo = __webpack_require__(239);

var _reactRouterRedux = __webpack_require__(240);

var _configureStore = __webpack_require__(931);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _App = __webpack_require__(498);

var _App2 = _interopRequireDefault(_App);

var _ScrollToTop = __webpack_require__(983);

var _ScrollToTop2 = _interopRequireDefault(_ScrollToTop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

// static website: uncomment createHashHistory, otherwise uncomment createBrowserHistory

// static website: uncomment createHashHistory, otherwise uncomment createBrowserHistory
// replace Provider from react-redux


var store = (0, _configureStore2.default)();
var history = (0, _history.createHashHistory)();
var syncedHistory = (0, _reactRouterRedux.syncHistoryWithStore)(history, store);

var client = _apollo.apolloClient;

var Root = function (_Component) {
  _inherits(Root, _Component);

  function Root() {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
  }

  _createClass(Root, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactApollo.ApolloProvider,
        { store: store, client: client },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.HashRouter,
            { history: syncedHistory },
            _react2.default.createElement(
              _ScrollToTop2.default,
              null,
              _react2.default.createElement(_App2.default, null)
            )
          )
        )
      );
    }
  }]);

  return Root;
}(_react.Component);

var _default = Root;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(store, 'store', '/Volumes/Data/develop/mack-graphql-source/src/app/Root.js');

  __REACT_HOT_LOADER__.register(history, 'history', '/Volumes/Data/develop/mack-graphql-source/src/app/Root.js');

  __REACT_HOT_LOADER__.register(syncedHistory, 'syncedHistory', '/Volumes/Data/develop/mack-graphql-source/src/app/Root.js');

  __REACT_HOT_LOADER__.register(client, 'client', '/Volumes/Data/develop/mack-graphql-source/src/app/Root.js');

  __REACT_HOT_LOADER__.register(Root, 'Root', '/Volumes/Data/develop/mack-graphql-source/src/app/Root.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/Root.js');
}();

;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

exports.enterHome = enterHome;
exports.leaveHome = leaveHome;
exports.enterAbout = enterAbout;
exports.leaveAbout = leaveAbout;
exports.enterLogin = enterLogin;
exports.leaveLogin = leaveLogin;
exports.enterRegister = enterRegister;
exports.leaveRegister = leaveRegister;
exports.enterProtected = enterProtected;
exports.leaveProtected = leaveProtected;

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dateFormat = 'DD/MM/YYYY HH:mm';

/* -----------------------------------------
  constants
 ------------------------------------------*/
// non protected views:
var ENTER_HOME_VIEW = 'ENTER_HOME_VIEW';
var LEAVE_HOME_VIEW = 'LEAVE_HOME_VIEW';
var ENTER_ABOUT_VIEW = 'ENTER_ABOUT_VIEW';
var LEAVE_ABOUT_VIEW = 'LEAVE_ABOUT_VIEW';
var ENTER_LOGIN_VIEW = 'ENTER_LOGIN_VIEW';
var LEAVE_LOGIN_VIEW = 'LEAVE_LOGIN_VIEW';
var ENTER_REGISTER_VIEW = 'ENTER_REGISTER_VIEW';
var LEAVE_REGISTER_VIEW = 'LEAVE_REGISTER_VIEW';
// protected views:
var ENTER_PROTECTED_VIEW = 'ENTER_PROTECTED_VIEW';
var LEAVE_PROTECTED_VIEW = 'LEAVE_PROTECTED_VIEW';

/* -----------------------------------------
  Reducer
 ------------------------------------------*/
var initialState = {
  currentView: 'not set',
  enterTime: null,
  leaveTime: null
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var currentTime = (0, _moment2.default)().format(dateFormat);

  switch (action.type) {
    // /////////////////////
    // non protected views:
    // /////////////////////
    case ENTER_HOME_VIEW:
    case ENTER_ABOUT_VIEW:
    case ENTER_LOGIN_VIEW:
    case ENTER_REGISTER_VIEW:
      // can't enter if you are already inside
      if (state.currentView !== action.currentView) {
        return _extends({}, state, {
          currentView: action.currentView,
          enterTime: currentTime
        });
      }
      return state;
    case LEAVE_HOME_VIEW:
    case LEAVE_ABOUT_VIEW:
    case LEAVE_LOGIN_VIEW:
    case LEAVE_REGISTER_VIEW:
      // can't leave if you aren't already inside
      if (state.currentView === action.currentView) {
        return _extends({}, state, {
          currentView: action.currentView,
          leaveTime: currentTime
        });
      }
      return state;
    // /////////////////////
    // protected views:
    // /////////////////////
    case ENTER_PROTECTED_VIEW:
      if (state.currentView !== action.currentView) {
        return _extends({}, state, {
          currentView: action.currentView,
          enterTime: currentTime
        });
      }
      return state;
    case LEAVE_PROTECTED_VIEW:
      if (state.currentView === action.currentView) {
        return _extends({}, state, {
          currentView: action.currentView,
          leaveTime: currentTime
        });
      }
      return state;

    default:
      return state;
  }
};

exports.default = _default;

/* -----------------------------------------
  Reducer
 ------------------------------------------*/

function enterHome() {
  return {
    type: ENTER_HOME_VIEW,
    currentView: 'home'
  };
}
function leaveHome() {
  return {
    type: LEAVE_HOME_VIEW,
    currentView: 'home'
  };
}

function enterAbout() {
  return {
    type: ENTER_ABOUT_VIEW,
    currentView: 'about'
  };
}
function leaveAbout() {
  return {
    type: LEAVE_ABOUT_VIEW,
    currentView: 'about'
  };
}

function enterLogin() {
  return {
    type: ENTER_LOGIN_VIEW,
    currentView: 'login'
  };
}
function leaveLogin() {
  return {
    type: LEAVE_LOGIN_VIEW,
    currentView: 'login'
  };
}

function enterRegister() {
  return {
    type: ENTER_REGISTER_VIEW,
    currentView: 'register'
  };
}
function leaveRegister() {
  return {
    type: LEAVE_REGISTER_VIEW,
    currentView: 'register'
  };
}

function enterProtected() {
  return {
    type: ENTER_PROTECTED_VIEW,
    currentView: 'protected'
  };
}
function leaveProtected() {
  return {
    type: LEAVE_PROTECTED_VIEW,
    currentView: 'protected'
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(dateFormat, 'dateFormat', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(ENTER_HOME_VIEW, 'ENTER_HOME_VIEW', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(LEAVE_HOME_VIEW, 'LEAVE_HOME_VIEW', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(ENTER_ABOUT_VIEW, 'ENTER_ABOUT_VIEW', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(LEAVE_ABOUT_VIEW, 'LEAVE_ABOUT_VIEW', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(ENTER_LOGIN_VIEW, 'ENTER_LOGIN_VIEW', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(LEAVE_LOGIN_VIEW, 'LEAVE_LOGIN_VIEW', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(ENTER_REGISTER_VIEW, 'ENTER_REGISTER_VIEW', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(LEAVE_REGISTER_VIEW, 'LEAVE_REGISTER_VIEW', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(ENTER_PROTECTED_VIEW, 'ENTER_PROTECTED_VIEW', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(LEAVE_PROTECTED_VIEW, 'LEAVE_PROTECTED_VIEW', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(initialState, 'initialState', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(enterHome, 'enterHome', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(leaveHome, 'leaveHome', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(enterAbout, 'enterAbout', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(leaveAbout, 'leaveAbout', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(enterLogin, 'enterLogin', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(leaveLogin, 'leaveLogin', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(enterRegister, 'enterRegister', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(leaveRegister, 'leaveRegister', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(enterProtected, 'enterProtected', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(leaveProtected, 'leaveProtected', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/views.js');
}();

;

/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//  weak

var appConfig = exports.appConfig = {
  // apollo client:
  apollo: {
    networkInterface: 'https://us-west-2.api.scaphold.io/graphql/flawless-basketball'
  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(appConfig, 'appConfig', '/Volumes/Data/develop/mack-graphql-source/src/app/config/index.js');
}();

;

/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-process-env:0 */
if (false) {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = __webpack_require__(932);
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(40);

var _reduxLogger = __webpack_require__(933);

var _reduxThunk = __webpack_require__(375);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(934);

var _reducers2 = _interopRequireDefault(_reducers);

var _apollo = __webpack_require__(239);

var _reduxDevtoolsExtension = __webpack_require__(937);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var loggerMiddleware = (0, _reduxLogger.createLogger)({
  level: 'info',
  collapsed: true
});

// createStore : enhancer
// NOTE: use now https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
var enhancer = (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default, _apollo.apolloClient.middleware(), // apollo middleware
loggerMiddleware));

// export default = "redux store"
function configureStore(initialState) {
  var store = (0, _redux.createStore)(_reducers2.default, initialState, enhancer);
  if (false) {
    module.hot.accept('../modules/reducers', function () {
      return store.replaceReducer(require('../modules/reducers').default);
    });
  }
  return store;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(loggerMiddleware, 'loggerMiddleware', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/store/configureStore.dev.js');

  __REACT_HOT_LOADER__.register(enhancer, 'enhancer', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/store/configureStore.dev.js');

  __REACT_HOT_LOADER__.register(configureStore, 'configureStore', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/store/configureStore.dev.js');
}();

;

/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.reduxLogger=e.reduxLogger||{})}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61)))

/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

var _redux = __webpack_require__(40);

var _reactRouterRedux = __webpack_require__(240);

var _apollo = __webpack_require__(239);

var _views = __webpack_require__(87);

var _views2 = _interopRequireDefault(_views);

var _userAuth = __webpack_require__(163);

var _userAuth2 = _interopRequireDefault(_userAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appReducers = {
  views: _views2.default,
  userAuth: _userAuth2.default
};

// combine reducers -> createStore reducer
var reducers = (0, _redux.combineReducers)(_extends({}, appReducers, {
  apollo: _apollo.apolloClient.reducer(), // apollo reducer
  routing: _reactRouterRedux.routerReducer
}));

var _default = reducers;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(appReducers, 'appReducers', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/reducers.js');

  __REACT_HOT_LOADER__.register(reducers, 'reducers', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/reducers.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/redux/modules/reducers.js');
}();

;

/***/ }),

/***/ 937:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(40).compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Humburger = __webpack_require__(939);

var _Humburger2 = _interopRequireDefault(_Humburger);

var _LeftNav = __webpack_require__(940);

var _LeftNav2 = _interopRequireDefault(_LeftNav);

var _RightNav = __webpack_require__(942);

var _RightNav2 = _interopRequireDefault(_RightNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationBar = function NavigationBar(_ref) {
  var brand = _ref.brand,
      navModel = _ref.navModel,
      handleLeftNavItemClick = _ref.handleLeftNavItemClick,
      handleRightNavItemClick = _ref.handleRightNavItemClick,
      userIsAuthenticated = _ref.userIsAuthenticated;

  return _react2.default.createElement(
    'nav',
    { className: 'navbar navbar-default' },
    _react2.default.createElement(
      'div',
      { className: 'containersCustom' },
      _react2.default.createElement(
        'div',
        { className: 'navbar-header' },
        _react2.default.createElement(_Humburger2.default, null),
        _react2.default.createElement(
          'a',
          { className: 'navbar-brand' },
          brand
        )
      ),
      _react2.default.createElement(
        'div',
        {
          className: 'collapse navbar-collapse',
          id: 'bs-example-navbar-collapse-1' },
        _react2.default.createElement(
          'ul',
          { className: 'nav navbar-nav' },
          _react2.default.createElement(_LeftNav2.default, {
            leftLinks: navModel.leftLinks,
            onLeftNavButtonClick: handleLeftNavItemClick,
            userIsAuthenticated: userIsAuthenticated
          })
        ),
        _react2.default.createElement(
          'ul',
          { className: 'nav navbar-nav navbar-right' },
          _react2.default.createElement(_RightNav2.default, {
            rightLinks: navModel.rightLinks,
            onRightNavButtonClick: handleRightNavItemClick,
            userIsAuthenticated: userIsAuthenticated
          })
        )
      )
    )
  );
}; //  weak

NavigationBar.propTypes = {
  brand: _propTypes2.default.string,
  userIsAuthenticated: _propTypes2.default.bool.isRequired,
  handleLeftNavItemClick: _propTypes2.default.func,
  handleRightNavItemClick: _propTypes2.default.func,
  navModel: _propTypes2.default.shape({
    leftLinks: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      label: _propTypes2.default.string.isRequired,
      link: _propTypes2.default.string.isRequired
    })).isRequired,
    rightLinks: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      label: _propTypes2.default.string.isRequired,
      link: _propTypes2.default.string.isRequired
    })).isRequired
  })
};

NavigationBar.defaultProps = {
  brand: 'brand'
};

var _default = NavigationBar;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NavigationBar, 'NavigationBar', '/Volumes/Data/develop/mack-graphql-source/src/app/components/navigation/NavigationBar.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/components/navigation/NavigationBar.js');
}();

;

/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Humburger = function Humburger() {
  return _react2.default.createElement(
    "button",
    {
      className: "navbar-toggle collapsed",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#bs-example-navbar-collapse-1" },
    _react2.default.createElement(
      "span",
      { className: "sr-only" },
      "Toggle navigation"
    ),
    _react2.default.createElement("span", { className: "icon-bar" }),
    _react2.default.createElement("span", { className: "icon-bar" }),
    _react2.default.createElement("span", { className: "icon-bar" })
  );
}; //  weak

var _default = Humburger;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Humburger, "Humburger", "/Volumes/Data/develop/mack-graphql-source/src/app/components/navigation/humburger/Humburger.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Volumes/Data/develop/mack-graphql-source/src/app/components/navigation/humburger/Humburger.js");
}();

;

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LeftNavButton = __webpack_require__(941);

var _LeftNavButton2 = _interopRequireDefault(_LeftNavButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LeftNav = function LeftNav(_ref) {
  var leftLinks = _ref.leftLinks,
      onLeftNavButtonClick = _ref.onLeftNavButtonClick;
  return _react2.default.createElement(
    'ul',
    { className: 'nav navbar-nav' },
    leftLinks.map(function (aLinkBtn, index) {
      return _react2.default.createElement(_LeftNavButton2.default, {
        key: index,
        link: aLinkBtn.link,
        label: aLinkBtn.label,
        viewName: aLinkBtn.view,
        onClick: onLeftNavButtonClick
      });
    })
  );
}; //  weak

LeftNav.propTypes = {
  leftLinks: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    link: _propTypes2.default.string,
    label: _propTypes2.default.string,
    viewName: _propTypes2.default.string
  })),
  onLeftNavButtonClick: _propTypes2.default.func
};

var _default = LeftNav;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LeftNav, 'LeftNav', '/Volumes/Data/develop/mack-graphql-source/src/app/components/navigation/leftNav/LeftNav.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/components/navigation/leftNav/LeftNav.js');
}();

;

/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

//  weak

var LeftNavButton = function (_PureComponent) {
  _inherits(LeftNavButton, _PureComponent);

  function LeftNavButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LeftNavButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LeftNavButton.__proto__ || Object.getPrototypeOf(LeftNavButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleLeftNavItemClick = function () {
      var _this2;

      return (_this2 = _this).__handleLeftNavItemClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LeftNavButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          link = _props.link,
          label = _props.label;


      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          {
            to: link,
            onClick: this.handleLeftNavItemClick },
          label
        )
      );
    }
  }, {
    key: '__handleLeftNavItemClick__REACT_HOT_LOADER__',
    value: function __handleLeftNavItemClick__REACT_HOT_LOADER__(event) {
      var _props2 = this.props,
          onClick = _props2.onClick,
          viewName = _props2.viewName;

      onClick(event, viewName);
    }
  }]);

  return LeftNavButton;
}(_react.PureComponent);

LeftNavButton.propTypes = {
  link: _propTypes2.default.string,
  label: _propTypes2.default.string,
  viewName: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};
var _default = LeftNavButton;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LeftNavButton, 'LeftNavButton', '/Volumes/Data/develop/mack-graphql-source/src/app/components/navigation/leftNav/leftNavButton/LeftNavButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/components/navigation/leftNav/leftNavButton/LeftNavButton.js');
}();

;

/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _RightNavButton = __webpack_require__(943);

var _RightNavButton2 = _interopRequireDefault(_RightNavButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RightNav = function RightNav(_ref) {
  var rightLinks = _ref.rightLinks,
      onRightNavButtonClick = _ref.onRightNavButtonClick,
      userIsAuthenticated = _ref.userIsAuthenticated;
  return _react2.default.createElement(
    'ul',
    { className: 'nav navbar-nav navbar-right' },
    userIsAuthenticated ? rightLinks.filter(function (btnLink) {
      return btnLink.showWhenUserAuth === true;
    }).map(function (aLinkBtn, index) {
      return _react2.default.createElement(_RightNavButton2.default, {
        key: index,
        link: aLinkBtn.link,
        label: aLinkBtn.label,
        viewName: aLinkBtn.view,
        onClick: onRightNavButtonClick
      });
    }) : rightLinks.filter(function (btnLink) {
      return btnLink.showWhenUserAuth === false || btnLink.alwaysShows === true;
    }).map(function (aLinkBtn, index) {
      return _react2.default.createElement(_RightNavButton2.default, {
        key: index,
        link: aLinkBtn.link,
        label: aLinkBtn.label,
        viewName: aLinkBtn.view,
        onClick: onRightNavButtonClick
      });
    })
  );
}; //  weak

RightNav.propTypes = {
  rightLinks: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    link: _propTypes2.default.string,
    label: _propTypes2.default.string,
    viewName: _propTypes2.default.string
  })),
  onRightNavButtonClick: _propTypes2.default.func,
  userIsAuthenticated: _propTypes2.default.bool.isRequired
};

var _default = RightNav;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RightNav, 'RightNav', '/Volumes/Data/develop/mack-graphql-source/src/app/components/navigation/rightNav/RightNav.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/components/navigation/rightNav/RightNav.js');
}();

;

/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var RightNavButton = function (_PureComponent) {
  _inherits(RightNavButton, _PureComponent);

  function RightNavButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RightNavButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RightNavButton.__proto__ || Object.getPrototypeOf(RightNavButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleRightNavItemClick = function () {
      var _this2;

      return (_this2 = _this).__handleRightNavItemClick__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RightNavButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          link = _props.link,
          label = _props.label;


      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          {
            to: link,
            onClick: this.handleRightNavItemClick },
          label
        )
      );
    }
  }, {
    key: '__handleRightNavItemClick__REACT_HOT_LOADER__',
    value: function __handleRightNavItemClick__REACT_HOT_LOADER__(event) {
      var _props2 = this.props,
          onClick = _props2.onClick,
          viewName = _props2.viewName;

      onClick(event, viewName);
    }
  }]);

  return RightNavButton;
}(_react.PureComponent);

RightNavButton.propTypes = {
  link: _propTypes2.default.string,
  label: _propTypes2.default.string,
  viewName: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};
var _default = RightNavButton;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RightNavButton, 'RightNavButton', '/Volumes/Data/develop/mack-graphql-source/src/app/components/navigation/rightNav/rightNavButton/RightNavButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/components/navigation/rightNav/rightNavButton/RightNavButton.js');
}();

;

/***/ }),

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _smoothScroll = __webpack_require__(945);

var _BackToTopButton = __webpack_require__(946);

var _BackToTopButton2 = _interopRequireDefault(_BackToTopButton);

var _reactMotion = __webpack_require__(126);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global $:true */
//  weak

var BackToTop = function (_Component) {
  _inherits(BackToTop, _Component);

  function BackToTop() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BackToTop);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BackToTop.__proto__ || Object.getPrototypeOf(BackToTop)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      windowScrollY: 0,
      showBackButton: false
    }, _this.handleWindowScroll = function () {
      var _this2;

      return (_this2 = _this).__handleWindowScroll__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.scrollDone = function () {
      var _this3;

      return (_this3 = _this).__scrollDone__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handlesOnBackButtonClick = function () {
      var _this4;

      return (_this4 = _this).__handlesOnBackButtonClick__REACT_HOT_LOADER__.apply(_this4, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BackToTop, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      window.addEventListener('scroll', this.handleWindowScroll);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleWindowScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var showBackButton = this.state.showBackButton;

      return _react2.default.createElement(
        _reactMotion.Motion,
        {
          style: {
            interpolatedX: (0, _reactMotion.spring)(showBackButton ? 0 : 120, _reactMotion.presets.stiff)
          } },
        function (_ref2) {
          var interpolatedX = _ref2.interpolatedX;
          return _react2.default.createElement(_BackToTopButton2.default, {
            position: 'bottom-right',
            onClick: _this5.handlesOnBackButtonClick,
            motionStyle: {
              WebkitTransform: 'translate3d(' + interpolatedX + 'px, 0, 0)',
              transform: 'translate3d(' + interpolatedX + 'px, 0, 0)'
            }
          });
        }
      );
    }
  }, {
    key: '__handleWindowScroll__REACT_HOT_LOADER__',
    value: function __handleWindowScroll__REACT_HOT_LOADER__() {
      if ($) {
        var windowScrollY = this.state.windowScrollY;
        var minScrollY = this.props.minScrollY;

        var currentWindowScrollY = $(window).scrollTop();

        if (windowScrollY !== currentWindowScrollY) {
          var shouldShowBackButton = currentWindowScrollY >= minScrollY ? true : false;

          this.setState({
            windowScrollY: currentWindowScrollY,
            showBackButton: shouldShowBackButton
          });
        }
      } else {
        /* eslint-disable no-throw-literal*/
        throw 'BackToTop component requires jQuery';
        /* eslint-enable no-throw-literal*/
      }
    }
  }, {
    key: '__scrollDone__REACT_HOT_LOADER__',
    value: function __scrollDone__REACT_HOT_LOADER__() {
      var onScrollDone = this.props.onScrollDone;

      if (onScrollDone) {
        onScrollDone();
      }
    }
  }, {
    key: '__handlesOnBackButtonClick__REACT_HOT_LOADER__',
    value: function __handlesOnBackButtonClick__REACT_HOT_LOADER__(event) {
      event.preventDefault();
      var _props = this.props,
          scrollTo = _props.scrollTo,
          minScrollY = _props.minScrollY;
      var windowScrollY = this.state.windowScrollY;


      if (windowScrollY && windowScrollY > minScrollY) {
        _smoothScroll.smoothScroll.scrollTo(scrollTo, this.scrollDone);
      }
    }
  }]);

  return BackToTop;
}(_react.Component);

BackToTop.propTypes = {
  minScrollY: _propTypes2.default.number,
  scrollTo: _propTypes2.default.string.isRequired,
  onScrollDone: _propTypes2.default.func
};
BackToTop.defaultProps = {
  minScrollY: 120
};
var _default = BackToTop;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BackToTop, 'BackToTop', '/Volumes/Data/develop/mack-graphql-source/src/app/components/backToTop/BackToTop.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/components/backToTop/BackToTop.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var smoothScroll = exports.smoothScroll = {
  timer: null,

  stop: function stop() {
    clearTimeout(this.timer);
  },
  scrollTo: function scrollTo(id, callback) {
    var settings = {
      duration: 1000,
      easing: {
        outQuint: function outQuint(x, t, b, c, d) {
          /* eslint-disable no-param-reassign*/
          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
          /* eslint-enable no-param-reassign*/
        }
      }
    };
    var percentage = void 0;
    var node = document.getElementById(id);
    var nodeTop = node.offsetTop;
    var nodeHeight = node.offsetHeight;
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    var windowHeight = window.innerHeight;
    var offset = window.pageYOffset;
    var delta = nodeTop - offset;
    var bottomScrollableY = height - windowHeight;
    var targetY = bottomScrollableY < delta ? bottomScrollableY - (height - nodeTop - nodeHeight + offset) : delta;

    var startTime = Date.now();
    percentage = 0;

    if (this.timer) {
      clearInterval(this.timer);
    }

    function step() {
      var yScroll = void 0;
      var elapsed = Date.now() - startTime;

      if (elapsed > settings.duration) {
        clearTimeout(this.timer);
      }

      percentage = elapsed / settings.duration;

      if (percentage > 1) {
        clearTimeout(this.timer);

        if (callback) {
          callback();
        }
      } else {
        yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
        window.scrollTo(0, yScroll);
        this.timer = setTimeout(step, 10);
      }
    }

    this.timer = setTimeout(step, 10);
  }
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(smoothScroll, "smoothScroll", "/Volumes/Data/develop/mack-graphql-source/src/app/components/backToTop/lib/smoothScroll.js");
}();

;

/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //  weak

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _UpIcon = __webpack_require__(947);

var _UpIcon2 = _interopRequireDefault(_UpIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultBackGroundColor = '#4A4A4A';
var sideOffset = '-10px';
var bottomOffset = '40px';
var defaultWidth = '100px';
var defaultZindex = 10;
var defaultOpacity = 0.5;
var defaultStyle = {
  position: 'fixed',
  right: sideOffset,
  left: '',
  bottom: bottomOffset,
  width: defaultWidth,
  zIndex: defaultZindex,
  opacity: defaultOpacity,
  backgroundColor: defaultBackGroundColor
};

var BackToTopButton = function BackToTopButton(_ref) {
  var onClick = _ref.onClick,
      position = _ref.position,
      children = _ref.children,
      motionStyle = _ref.motionStyle;

  var buttonStyle = setPosition(position, _extends({}, motionStyle, defaultStyle));

  return _react2.default.createElement(
    'button',
    {
      style: buttonStyle,
      className: (0, _classnames2.default)({
        'btn': true
      }),
      onClick: onClick },
    !children && _react2.default.createElement(
      'div',
      { style: { marginRight: '10px' } },
      _react2.default.createElement(_UpIcon2.default, { color: '#F1F1F1' })
    ),
    !!children && children
  );
};

BackToTopButton.propTypes = {
  position: _propTypes2.default.oneOf(['bottom-left', 'bottom-right']),
  onClick: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.node,
  motionStyle: _propTypes2.default.object
};

BackToTopButton.defaultProps = {
  position: 'bottom-right'
};

function setPosition() {
  var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'bottom-right';
  var refStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultStyle;

  var style = _extends({}, refStyle);

  switch (position) {
    case 'bottom-right':
      style.right = sideOffset;
      style.left = '';
      return style;

    case 'bottom-left':
      style.right = '';
      style.left = sideOffset;
      return style;

    default:
      return refStyle;
  }
}

var _default = BackToTopButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(defaultBackGroundColor, 'defaultBackGroundColor', '/Volumes/Data/develop/mack-graphql-source/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(sideOffset, 'sideOffset', '/Volumes/Data/develop/mack-graphql-source/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(bottomOffset, 'bottomOffset', '/Volumes/Data/develop/mack-graphql-source/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(defaultWidth, 'defaultWidth', '/Volumes/Data/develop/mack-graphql-source/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(defaultZindex, 'defaultZindex', '/Volumes/Data/develop/mack-graphql-source/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(defaultOpacity, 'defaultOpacity', '/Volumes/Data/develop/mack-graphql-source/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(defaultStyle, 'defaultStyle', '/Volumes/Data/develop/mack-graphql-source/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(BackToTopButton, 'BackToTopButton', '/Volumes/Data/develop/mack-graphql-source/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(setPosition, 'setPosition', '/Volumes/Data/develop/mack-graphql-source/src/app/components/backToTop/backToTopButton/BackToTopButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/components/backToTop/backToTopButton/BackToTopButton.js');
}();

;

/***/ }),

/***/ 947:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

var UpIcon = function UpIcon(_ref) {
  var color = _ref.color;
  return _react2.default.createElement(
    'svg',
    {
      width: '24px',
      height: '24px',
      viewBox: '0 0 512 512',
      fill: '' + color },
    _react2.default.createElement('path', { d: 'M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1 c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z' })
  );
};

UpIcon.propTypes = {
  color: _propTypes2.default.string
};

UpIcon.defaultProps = {
  color: '#F1F1F1'
};

var _default = UpIcon;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UpIcon, 'UpIcon', '/Volumes/Data/develop/mack-graphql-source/src/app/components/backToTop/backToTopButton/UpIcon.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/components/backToTop/backToTopButton/UpIcon.js');
}();

;

/***/ }),

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMotion = __webpack_require__(126);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var ErrorAlert = function (_PureComponent) {
  _inherits(ErrorAlert, _PureComponent);

  function ErrorAlert() {
    _classCallCheck(this, ErrorAlert);

    return _possibleConstructorReturn(this, (ErrorAlert.__proto__ || Object.getPrototypeOf(ErrorAlert)).apply(this, arguments));
  }

  _createClass(ErrorAlert, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          showAlert = _props.showAlert,
          errorTitle = _props.errorTitle,
          errorMessage = _props.errorMessage,
          onClose = _props.onClose;


      return _react2.default.createElement(
        _reactMotion.Motion,
        {
          style: {
            interpolatedScale: (0, _reactMotion.spring)(showAlert ? 1 : 0, _reactMotion.presets.stiff)
          } },
        function (_ref) {
          var interpolatedScale = _ref.interpolatedScale;
          return _react2.default.createElement(
            'div',
            {
              className: 'alert alert-dismissible alert-danger',
              style: {
                WebkitTransform: 'scale(' + interpolatedScale + ')',
                transform: 'scale(' + interpolatedScale + ')'
              } },
            _react2.default.createElement(
              'button',
              {
                type: 'button',
                className: 'close',
                onClick: onClose },
              '\xD7'
            ),
            errorTitle && errorTitle.length > 0 && _react2.default.createElement(
              'strong',
              null,
              errorTitle
            ),
            _react2.default.createElement(
              'p',
              null,
              errorMessage
            )
          );
        }
      );
    }
  }]);

  return ErrorAlert;
}(_react.PureComponent);

ErrorAlert.propTypes = {
  showAlert: _propTypes2.default.bool,
  errorTitle: _propTypes2.default.string,
  errorMessage: _propTypes2.default.string,
  onClose: _propTypes2.default.func.isRequired
};
ErrorAlert.defaultProps = {
  showAlert: false
};
var _default = ErrorAlert;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ErrorAlert, 'ErrorAlert', '/Volumes/Data/develop/mack-graphql-source/src/app/components/alert/ErrorAlert.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/components/alert/ErrorAlert.js');
}();

;

/***/ }),

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMotion = __webpack_require__(126);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var WarningAlert = function (_PureComponent) {
  _inherits(WarningAlert, _PureComponent);

  function WarningAlert() {
    _classCallCheck(this, WarningAlert);

    return _possibleConstructorReturn(this, (WarningAlert.__proto__ || Object.getPrototypeOf(WarningAlert)).apply(this, arguments));
  }

  _createClass(WarningAlert, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          showAlert = _props.showAlert,
          warningTitle = _props.warningTitle,
          warningMessage = _props.warningMessage,
          onClose = _props.onClose;


      return _react2.default.createElement(
        _reactMotion.Motion,
        {
          style: {
            interpolatedScale: (0, _reactMotion.spring)(showAlert ? 1 : 0, _reactMotion.presets.stiff)
          } },
        function (_ref) {
          var interpolatedScale = _ref.interpolatedScale;
          return _react2.default.createElement(
            'div',
            {
              className: 'alert alert-dismissible alert-warning',
              style: {
                WebkitTransform: 'scale(' + interpolatedScale + ')',
                transform: 'scale(' + interpolatedScale + ')'
              }
            },
            _react2.default.createElement(
              'button',
              {
                type: 'button',
                className: 'close',
                onClick: onClose },
              '\xD7'
            ),
            warningTitle && warningTitle.length > 0 && _react2.default.createElement(
              'strong',
              null,
              warningTitle
            ),
            _react2.default.createElement(
              'p',
              null,
              warningMessage
            )
          );
        }
      );
    }
  }]);

  return WarningAlert;
}(_react.PureComponent);

WarningAlert.propTypes = {
  showAlert: _propTypes2.default.bool,
  warningTitle: _propTypes2.default.string,
  warningMessage: _propTypes2.default.string,
  onClose: _propTypes2.default.func.isRequired
};
WarningAlert.defaultProps = {
  showAlert: false
};
var _default = WarningAlert;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(WarningAlert, 'WarningAlert', '/Volumes/Data/develop/mack-graphql-source/src/app/components/alert/WarningAlert.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/components/alert/WarningAlert.js');
}();

;

/***/ }),

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMotion = __webpack_require__(126);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var Alert = function (_PureComponent) {
  _inherits(Alert, _PureComponent);

  function Alert() {
    _classCallCheck(this, Alert);

    return _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).apply(this, arguments));
  }

  _createClass(Alert, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          showAlert = _props.showAlert,
          errorTitle = _props.errorTitle,
          errorMessage = _props.errorMessage,
          onClose = _props.onClose;


      return _react2.default.createElement(
        _reactMotion.Motion,
        {
          style: {
            interpolatedScale: (0, _reactMotion.spring)(showAlert ? 1 : 0, _reactMotion.presets.stiff)
          } },
        function (_ref) {
          var interpolatedScale = _ref.interpolatedScale;
          return _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)({
                'alert': true,
                'alert-dismissible': true,
                'alert-danger': type === 'error',
                'alert-warning': type === 'warning'
              }),
              style: {
                WebkitTransform: 'scale(' + interpolatedScale + ')',
                transform: 'scale(' + interpolatedScale + ')'
              } },
            _react2.default.createElement(
              'button',
              {
                type: 'button',
                className: 'close',
                onClick: onClose },
              '\xD7'
            ),
            errorTitle && errorTitle.length > 0 && _react2.default.createElement(
              'strong',
              null,
              errorTitle
            ),
            _react2.default.createElement(
              'p',
              null,
              errorMessage
            )
          );
        }
      );
    }
  }]);

  return Alert;
}(_react.PureComponent);

Alert.propTypes = {
  showAlert: _propTypes2.default.bool,
  errorTitle: _propTypes2.default.string,
  errorMessage: _propTypes2.default.string,
  onClose: _propTypes2.default.func.isRequired,
  type: _propTypes2.default.oneOf(['warning', 'error'])
};
Alert.defaultProps = {
  showAlert: false,
  type: 'warning'
};
var _default = Alert;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Alert, 'Alert', '/Volumes/Data/develop/mack-graphql-source/src/app/components/alert/Alert.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/components/alert/Alert.js');
}();

;

/***/ }),

/***/ 958:
/***/ (function(module, exports) {

module.exports = {"brand":"V1 eCom","leftLinks":[],"rightLinks":[{"label":"Home","link":"/","view":"home","isRouteBtn":true,"alwaysShows":true,"showWhenUserAuth":true,"hideWhenUserAuth":false},{"label":"Login","link":"/login","view":"login","isRouteBtn":true,"alwaysShows":false,"showWhenUserAuth":false,"hideWhenUserAuth":true},{"label":"Register","link":"/register","view":"register","isRouteBtn":true,"alwaysShows":false,"showWhenUserAuth":false,"hideWhenUserAuth":true},{"label":"Logout","link":"/logout","view":"logout","isRouteBtn":true,"alwaysShows":false,"showWhenUserAuth":true,"hideWhenUserAuth":false},{"label":"About","link":"/about","view":"about","isRouteBtn":true,"alwaysShows":true,"showWhenUserAuth":true,"hideWhenUserAuth":false},{"label":"Protected","link":"/protected","view":"protected","isRouteBtn":true,"alwaysShows":true,"showWhenUserAuth":true,"hideWhenUserAuth":false}]}

/***/ }),

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainRoutes = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(45);

var _containers = __webpack_require__(969);

var _views = __webpack_require__(108);

var _auth = __webpack_require__(164);

var _PrivateRoute = __webpack_require__(981);

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

var _LogoutRoute = __webpack_require__(982);

var _LogoutRoute2 = _interopRequireDefault(_LogoutRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainRoutes = exports.MainRoutes = function MainRoutes() {
  return _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _containers.ConnectedHome }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _containers.ConnectedAbout }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _containers.ConnectedLogin }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/register', component: _containers.ConnectedRegister }),
    _react2.default.createElement(_LogoutRoute2.default, { path: '/logout' }),
    _react2.default.createElement(_PrivateRoute2.default, { path: '/protected', component: _containers.ConnectedProtected }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _views.PageNotFound })
  );
}; //  weak

var _default = MainRoutes;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MainRoutes, 'MainRoutes', '/Volumes/Data/develop/mack-graphql-source/src/app/routes/MainRoutes.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/routes/MainRoutes.js');
}();

;

/***/ }),

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = __webpack_require__(498);

Object.defineProperty(exports, 'App', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_App).default;
  }
});

var _Home = __webpack_require__(970);

Object.defineProperty(exports, 'ConnectedHome', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Home).default;
  }
});

var _About = __webpack_require__(977);

Object.defineProperty(exports, 'ConnectedAbout', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_About).default;
  }
});

var _Login = __webpack_require__(978);

Object.defineProperty(exports, 'ConnectedLogin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Login).default;
  }
});

var _Register = __webpack_require__(979);

Object.defineProperty(exports, 'ConnectedRegister', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Register).default;
  }
});

var _Protected = __webpack_require__(980);

Object.defineProperty(exports, 'ConnectedProtected', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Protected).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n query GetUser ($user: ID!) {\n   getUser (id: $user) {\n     id\n     username\n     createdAt\n     modifiedAt\n     lastLogin\n   }\n   getRole(id: $user) {\n     id\n     name\n     createdAt\n   }\n}\n'], ['\n query GetUser ($user: ID!) {\n   getUser (id: $user) {\n     id\n     username\n     createdAt\n     modifiedAt\n     lastLogin\n   }\n   getRole(id: $user) {\n     id\n     name\n     createdAt\n   }\n}\n']);

var _reactRedux = __webpack_require__(88);

var _redux = __webpack_require__(40);

var _views = __webpack_require__(87);

var viewsActions = _interopRequireWildcard(_views);

var _views2 = __webpack_require__(108);

var _graphqlTag = __webpack_require__(107);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactApollo = __webpack_require__(103);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } //  weak

/* -----------------------------------------
  GraphQL - Apollo client
 ------------------------------------------*/

var CurrentUser = (0, _graphqlTag2.default)(_templateObject);

// 1- add queries:
var HomeWithQuery = (0, _reactApollo.graphql)(CurrentUser, {
  options: function options(_ref) {
    var userAuth = _ref.userAuth;

    return {
      variables: {
        user: userAuth.id ? userAuth.id : ''
      }
    };
  },

  name: 'getCurrentUser',

  props: function props(_ref2) {
    var ownProps = _ref2.ownProps,
        _ref2$getCurrentUser = _ref2.getCurrentUser,
        loading = _ref2$getCurrentUser.loading,
        getUser = _ref2$getCurrentUser.getUser,
        getRole = _ref2$getCurrentUser.getRole,
        refetch = _ref2$getCurrentUser.refetch;

    // // TODO: find a better solution to dispatch redux action on query result to set 'state.userAuth.isAuthenticated'
    // setTimeout(
    //   () => ownProps.checkUserAuth(), 0
    // );
    return {
      userLoading: loading,
      user: _extends({}, getUser, getRole),
      refetchUser: refetch
    };
  }

})(_views2.Home);

/* -----------------------------------------
  Redux
 ------------------------------------------*/

var mapStateToProps = function mapStateToProps(state) {
  return {
    // view store:
    currentView: state.views.currentView,
    // userAuth:
    userAuth: state.userAuth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    // views actions
    enterHome: viewsActions.enterHome,
    leaveHome: viewsActions.leaveHome
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HomeWithQuery);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CurrentUser, 'CurrentUser', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/home/Home.js');

  __REACT_HOT_LOADER__.register(HomeWithQuery, 'HomeWithQuery', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/home/Home.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/home/Home.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/home/Home.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/home/Home.js');
}();

;

/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterDom = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var About = function (_PureComponent) {
  _inherits(About, _PureComponent);

  function About() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, About);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = About.__proto__ || Object.getPrototypeOf(About)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      viewEntersAnim: true
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(About, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var enterAbout = this.props.enterAbout;

      enterAbout();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var leaveAbout = this.props.leaveAbout;

      leaveAbout();
    }
  }, {
    key: 'render',
    value: function render() {
      var viewEntersAnim = this.state.viewEntersAnim;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)({ "view-enter": viewEntersAnim }) },
        _react2.default.createElement(
          'h1',
          null,
          'About'
        )
      );
    }
  }]);

  return About;
}(_react.PureComponent);

About.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  // views
  currentView: _propTypes2.default.string.isRequired,
  enterAbout: _propTypes2.default.func.isRequired,
  leaveAbout: _propTypes2.default.func.isRequired
};
var _default = About;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(About, 'About', '/Volumes/Data/develop/mack-graphql-source/src/app/views/about/About.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/views/about/About.js');
}();

;

/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Jumbotron = __webpack_require__(242);

var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterDom = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var Home = function (_PureComponent) {
  _inherits(Home, _PureComponent);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      viewEntersAnim: true
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var enterHome = this.props.enterHome;

      enterHome();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var leaveHome = this.props.leaveHome;

      leaveHome();
    }
  }, {
    key: 'render',
    value: function render() {
      var viewEntersAnim = this.state.viewEntersAnim;


      return _react2.default.createElement(
        'div',
        {
          key: 'homeView',
          className: (0, _classnames2.default)({ 'view-enter': viewEntersAnim }) },
        _react2.default.createElement(
          _Jumbotron2.default,
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Innovational V1 World Wide'
          ),
          _react2.default.createElement(
            'h2',
            null,
            'Builing E-world'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              {
                className: 'btn btn-success btn-lg',
                to: '/about' },
              _react2.default.createElement('i', { className: 'fa fa-info' }),
              '\xA0 go to about'
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.PureComponent);

Home.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  // view props:
  currentView: _propTypes2.default.string.isRequired,
  // view actions:
  enterHome: _propTypes2.default.func.isRequired,
  leaveHome: _propTypes2.default.func.isRequired
};
var _default = Home;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Home, 'Home', '/Volumes/Data/develop/mack-graphql-source/src/app/views/home/Home.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/views/home/Home.js');
}();

;

/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Jumbotron = __webpack_require__(242);

var _Jumbotron2 = _interopRequireDefault(_Jumbotron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var PageNotFound = function (_PureComponent) {
  _inherits(PageNotFound, _PureComponent);

  function PageNotFound() {
    _classCallCheck(this, PageNotFound);

    return _possibleConstructorReturn(this, (PageNotFound.__proto__ || Object.getPrototypeOf(PageNotFound)).apply(this, arguments));
  }

  _createClass(PageNotFound, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: cx({ "view-enter": true }) },
        _react2.default.createElement(
          _Jumbotron2.default,
          null,
          _react2.default.createElement(
            'h1',
            null,
            'Sorry this page does not exists...'
          )
        )
      );
    }
  }]);

  return PageNotFound;
}(_react.PureComponent);

PageNotFound.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired
};
var _default = PageNotFound;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PageNotFound, 'PageNotFound', '/Volumes/Data/develop/mack-graphql-source/src/app/views/pageNotFound/PageNotFound.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/views/pageNotFound/PageNotFound.js');
}();

;

/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterDom = __webpack_require__(45);

var _components = __webpack_require__(241);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var Login = function (_PureComponent) {
  _inherits(Login, _PureComponent);

  function Login() {
    var _ref,
        _this4 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      viewEntersAnim: true,

      email: '',
      password: ''
    }, _this.handlesOnEmailChange = function () {
      var _this2;

      return (_this2 = _this).__handlesOnEmailChange__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handlesOnPasswordChange = function () {
      var _this3;

      return (_this3 = _this).__handlesOnPasswordChange__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handlesOnLogin = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var _this$props, loginUser, history, _this$state, email, password, variables;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this$props = _this.props, loginUser = _this$props.loginUser, history = _this$props.history;
                _this$state = _this.state, email = _this$state.email, password = _this$state.password;
                variables = {
                  user: {
                    username: email,
                    password: password
                  }
                };
                _context.prev = 4;
                _context.next = 7;
                return loginUser({ variables: variables });

              case 7:
                history.push({ pathname: '/protected' });
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](4);

                console.log('login went wrong..., error: ', _context.t0);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this4, [[4, 10]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.closeError = function () {
      var _this5;

      return (_this5 = _this).__closeError__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var enterLogin = this.props.enterLogin;

      enterLogin();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var leaveLogin = this.props.leaveLogin;

      leaveLogin();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          viewEntersAnim = _state.viewEntersAnim,
          email = _state.email,
          password = _state.password;
      var _props = this.props,
          mutationLoading = _props.mutationLoading,
          error = _props.error;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)({ "view-enter": viewEntersAnim }) },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-4 col-md-offset-4' },
            _react2.default.createElement(
              'form',
              {
                className: 'form-horizontal',
                noValidate: true },
              _react2.default.createElement(
                'fieldset',
                null,
                _react2.default.createElement(
                  'legend',
                  null,
                  'Login'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group' },
                  _react2.default.createElement(
                    'label',
                    {
                      htmlFor: 'inputEmail',
                      className: 'col-lg-2 control-label' },
                    'Email'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-lg-10' },
                    _react2.default.createElement('input', {
                      type: 'text',
                      className: 'form-control',
                      id: 'inputEmail',
                      placeholder: 'Email'
                      // autoComplete="nofill"
                      // role="presentation"
                      , value: email,
                      onChange: this.handlesOnEmailChange
                    })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group' },
                  _react2.default.createElement(
                    'label',
                    {
                      htmlFor: 'inputPassword',
                      className: 'col-lg-2 control-label' },
                    'Password'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-lg-10' },
                    _react2.default.createElement('input', {
                      type: 'password',
                      className: 'form-control',
                      id: 'inputPassword',
                      placeholder: 'Password',
                      value: password,
                      onChange: this.handlesOnPasswordChange
                    })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-lg-10 col-lg-offset-2' },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      {
                        className: 'btn btn-default',
                        to: '/' },
                      'Cancel'
                    ),
                    _react2.default.createElement(
                      'button',
                      {
                        className: 'btn btn-primary login-button',
                        disabled: mutationLoading,
                        onClick: this.handlesOnLogin },
                      'Login'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(_components.ErrorAlert, {
              showAlert: !!error,
              errorTitle: 'Error',
              errorMessage: error ? error.message : '',
              onClose: this.closeError
            })
          )
        )
      );
    }
  }, {
    key: '__handlesOnEmailChange__REACT_HOT_LOADER__',
    value: function __handlesOnEmailChange__REACT_HOT_LOADER__(event) {
      event.preventDefault();
      // should add some validator before setState in real use cases
      this.setState({ email: event.target.value });
    }
  }, {
    key: '__handlesOnPasswordChange__REACT_HOT_LOADER__',
    value: function __handlesOnPasswordChange__REACT_HOT_LOADER__(event) {
      event.preventDefault();
      // should add some validator before setState in real use cases
      this.setState({ password: event.target.value });
    }
  }, {
    key: '__closeError__REACT_HOT_LOADER__',
    value: function __closeError__REACT_HOT_LOADER__(event) {
      event.preventDefault();
      var resetError = this.props.resetError;

      resetError();
    }
  }]);

  return Login;
}(_react.PureComponent);

Login.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  // views props:
  currentView: _propTypes2.default.string.isRequired,
  enterLogin: _propTypes2.default.func.isRequired,
  leaveLogin: _propTypes2.default.func.isRequired,

  // apollo props:
  user: _propTypes2.default.shape({
    username: _propTypes2.default.string
  }),

  // auth props:
  userIsAuthenticated: _propTypes2.default.bool.isRequired,
  mutationLoading: _propTypes2.default.bool.isRequired,
  error: _propTypes2.default.object,

  // apollo actions
  loginUser: _propTypes2.default.func.isRequired,

  // redux actions
  onUserLoggedIn: _propTypes2.default.func.isRequired,
  resetError: _propTypes2.default.func.isRequired
};
var _default = Login;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Login, 'Login', '/Volumes/Data/develop/mack-graphql-source/src/app/views/login/Login.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/views/login/Login.js');
}();

;

/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterDom = __webpack_require__(45);

var _components = __webpack_require__(241);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var Register = function (_PureComponent) {
  _inherits(Register, _PureComponent);

  function Register() {
    var _ref,
        _this4 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Register);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Register.__proto__ || Object.getPrototypeOf(Register)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      viewEntersAnim: true,

      email: '',
      password: '',

      warning: null
    }, _this.handlesOnEmailChange = function () {
      var _this2;

      return (_this2 = _this).__handlesOnEmailChange__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _this.handlesOnPasswordChange = function () {
      var _this3;

      return (_this3 = _this).__handlesOnPasswordChange__REACT_HOT_LOADER__.apply(_this3, arguments);
    }, _this.handlesOnRegister = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var _this$props, registerUser, history, _this$state, email, password, variables, resetError;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this$props = _this.props, registerUser = _this$props.registerUser, history = _this$props.history;
                _this$state = _this.state, email = _this$state.email, password = _this$state.password;
                variables = {
                  user: {
                    username: email,
                    password: password
                  }
                };
                resetError = _this.props.resetError;

                resetError();
                _this.setState({ warning: null });

                if (_this.isValidEmail(email)) {
                  _context.next = 10;
                  break;
                }

                _this.setState({ warning: { message: 'Email is not valid.' } });
                return _context.abrupt('return');

              case 10:
                if (_this.isValidPassword(password)) {
                  _context.next = 13;
                  break;
                }

                _this.setState({ warning: { message: 'Password is empty or not valid.' } });
                return _context.abrupt('return');

              case 13:
                _context.prev = 13;
                _context.next = 16;
                return registerUser({ variables: variables });

              case 16:
                history.push({ pathname: '/protected' });
                _context.next = 22;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context['catch'](13);

                console.log('register user went wrong..., error: ', _context.t0);

              case 22:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this4, [[13, 19]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.closeError = function () {
      var _this5;

      return (_this5 = _this).__closeError__REACT_HOT_LOADER__.apply(_this5, arguments);
    }, _this.closeWarning = function () {
      var _this6;

      return (_this6 = _this).__closeWarning__REACT_HOT_LOADER__.apply(_this6, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Register, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var enterRegister = this.props.enterRegister;

      enterRegister();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var leaveRegister = this.props.leaveRegister;

      leaveRegister();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          viewEntersAnim = _state.viewEntersAnim,
          email = _state.email,
          password = _state.password,
          warning = _state.warning;
      var _props = this.props,
          mutationLoading = _props.mutationLoading,
          error = _props.error;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)({ "view-enter": viewEntersAnim }) },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-4 col-md-offset-4' },
            _react2.default.createElement(
              'form',
              {
                className: 'form-horizontal',
                noValidate: true },
              _react2.default.createElement(
                'fieldset',
                null,
                _react2.default.createElement(
                  'legend',
                  null,
                  'Register'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group' },
                  _react2.default.createElement(
                    'label',
                    {
                      htmlFor: 'inputEmail',
                      className: 'col-lg-2 control-label' },
                    'Email'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-lg-10' },
                    _react2.default.createElement('input', {
                      type: 'text',
                      className: 'form-control',
                      id: 'inputEmail',
                      placeholder: 'Email',
                      value: email,
                      onChange: this.handlesOnEmailChange
                    })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group' },
                  _react2.default.createElement(
                    'label',
                    {
                      htmlFor: 'inputPassword',
                      className: 'col-lg-2 control-label' },
                    'Password'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-lg-10' },
                    _react2.default.createElement('input', {
                      type: 'password',
                      className: 'form-control',
                      id: 'inputPassword',
                      placeholder: 'Password',
                      value: password,
                      onChange: this.handlesOnPasswordChange
                    })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-lg-10 col-lg-offset-2' },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      {
                        className: 'btn btn-default',
                        to: '/' },
                      'Cancel'
                    ),
                    _react2.default.createElement(
                      'button',
                      {
                        className: 'btn btn-primary register-button',
                        disabled: mutationLoading,
                        onClick: this.handlesOnRegister },
                      'Register'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { style: { height: '150px' } },
              _react2.default.createElement(_components.WarningAlert, {
                showAlert: !!warning,
                warningTitle: 'Warning',
                warningMessage: warning ? warning.message : '',
                onClose: this.closeWarning
              }),
              _react2.default.createElement(_components.ErrorAlert, {
                showAlert: !!error,
                errorTitle: 'Error',
                errorMessage: error ? error.message : '',
                onClose: this.closeError
              })
            )
          )
        )
      );
    }
  }, {
    key: '__handlesOnEmailChange__REACT_HOT_LOADER__',
    value: function __handlesOnEmailChange__REACT_HOT_LOADER__(event) {
      event.preventDefault();
      // should add some validator before setState in real use cases
      var email = event.target.value;
      this.setState({ email: email });
    }
  }, {
    key: '__handlesOnPasswordChange__REACT_HOT_LOADER__',
    value: function __handlesOnPasswordChange__REACT_HOT_LOADER__(event) {
      event.preventDefault();
      // should add some validator before setState in real use cases
      this.setState({ password: event.target.value });
    }
  }, {
    key: 'isValidEmail',
    value: function isValidEmail() {
      var email = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      // basic validation, better user "validate.js" for real validation
      if (email && email.trim().length > 0) {
        return true;
      }
      return false;
    }
  }, {
    key: 'isValidPassword',
    value: function isValidPassword() {
      var password = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      // basic validation, better user "validate.js" for real validation
      if (password && password.trim().length > 0) {
        return true;
      }
      return false;
    }
  }, {
    key: '__closeError__REACT_HOT_LOADER__',
    value: function __closeError__REACT_HOT_LOADER__(event) {
      event.preventDefault();
      var resetError = this.props.resetError;

      resetError();
    }
  }, {
    key: '__closeWarning__REACT_HOT_LOADER__',
    value: function __closeWarning__REACT_HOT_LOADER__(event) {
      event.preventDefault();
      this.setState({ warning: null });
    }
  }]);

  return Register;
}(_react.PureComponent);

Register.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  // views props:
  currentView: _propTypes2.default.string.isRequired,
  enterRegister: _propTypes2.default.func.isRequired,
  leaveRegister: _propTypes2.default.func.isRequired,
  // auth props:
  userIsAuthenticated: _propTypes2.default.bool.isRequired,
  mutationLoading: _propTypes2.default.bool.isRequired,
  error: _propTypes2.default.object,

  // apollo actions
  registerUser: _propTypes2.default.func.isRequired,
  resetError: _propTypes2.default.func.isRequired
};
var _default = Register;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Register, 'Register', '/Volumes/Data/develop/mack-graphql-source/src/app/views/register/Register.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/views/register/Register.js');
}();

;

/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var Protected = function (_PureComponent) {
  _inherits(Protected, _PureComponent);

  function Protected() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Protected);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Protected.__proto__ || Object.getPrototypeOf(Protected)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      viewEntersAnim: true
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Protected, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var enterProtected = this.props.enterProtected;

      enterProtected();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var leaveProtected = this.props.leaveProtected;

      leaveProtected();
    }
  }, {
    key: 'render',
    value: function render() {
      var viewEntersAnim = this.state.viewEntersAnim;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)({ "view-enter": viewEntersAnim }) },
        _react2.default.createElement(
          'h1',
          { className: 'text-danger' },
          'Here is a protected view!'
        ),
        _react2.default.createElement(
          'h2',
          { className: 'text-danger' },
          'You\'ve just logged in to be able to enter this view.'
        )
      );
    }
  }]);

  return Protected;
}(_react.PureComponent);

Protected.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  // views
  currentView: _propTypes2.default.string.isRequired,
  enterProtected: _propTypes2.default.func.isRequired,
  leaveProtected: _propTypes2.default.func.isRequired
};
var _default = Protected;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Protected, 'Protected', '/Volumes/Data/develop/mack-graphql-source/src/app/views/protected/Protected.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/views/protected/Protected.js');
}();

;

/***/ }),

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(88);

var _redux = __webpack_require__(40);

var _views = __webpack_require__(87);

var viewsActions = _interopRequireWildcard(_views);

var _views2 = __webpack_require__(108);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/* -----------------------------------------
  Redux
 ------------------------------------------*/
//  weak

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    enterAbout: viewsActions.enterAbout,
    leaveAbout: viewsActions.leaveAbout
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_views2.About);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/about/About.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/about/About.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/about/About.js');
}();

;

/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  mutation LoginUser($user: LoginUserInput!) {\n    loginUser(input: $user) {\n      token,\n      user {\n        id,\n        username,\n        createdAt,\n        modifiedAt,\n        lastLogin\n      }\n    }\n  }\n'], ['\n  mutation LoginUser($user: LoginUserInput!) {\n    loginUser(input: $user) {\n      token,\n      user {\n        id,\n        username,\n        createdAt,\n        modifiedAt,\n        lastLogin\n      }\n    }\n  }\n']);

var _reactRedux = __webpack_require__(88);

var _redux = __webpack_require__(40);

var _views = __webpack_require__(87);

var viewsActions = _interopRequireWildcard(_views);

var _userAuth = __webpack_require__(163);

var userAuthActions = _interopRequireWildcard(_userAuth);

var _views2 = __webpack_require__(108);

var _graphqlTag = __webpack_require__(107);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactApollo = __webpack_require__(103);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } //  weak

/* eslint no-unused-vars:0 */


/* -----------------------------------------
  GraphQL - Apollo client
 ------------------------------------------*/

var logUser = (0, _graphqlTag2.default)(_templateObject);

// 1- add queries:

// 2- add mutation "logUser":
var LoginWithMutation = (0, _reactApollo.graphql)(logUser, {
  name: 'logUserMutation',
  props: function props(_ref) {
    var ownProps = _ref.ownProps,
        logUserMutation = _ref.logUserMutation;
    return {
      loginUser: function loginUser(user) {
        ownProps.setMutationLoading();

        return logUserMutation(user).then(function (_ref2) {
          var loginUser = _ref2.data.loginUser;

          ownProps.onUserLoggedIn(loginUser.token, loginUser.user);
          ownProps.unsetMutationLoading();
          return Promise.resolve();
        }).catch(function (error) {
          ownProps.onUserLogError(error);
          ownProps.unsetMutationLoading();
          return Promise.reject();
        });
      }
    };
  }
})(_views2.Login);

/* -----------------------------------------
  Redux
 ------------------------------------------*/

var mapStateToProps = function mapStateToProps(state) {
  return {
    // views props:
    currentView: state.views.currentView,
    // user Auth props:
    userIsAuthenticated: state.userAuth.isAuthenticated,
    mutationLoading: state.userAuth.mutationLoading,
    // errors:
    error: state.userAuth.error
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    // views actions:
    enterLogin: viewsActions.enterLogin,
    leaveLogin: viewsActions.leaveLogin,

    // userAuth actions:
    onUserLoggedIn: userAuthActions.receivedUserLoggedIn,
    onUserLogError: userAuthActions.errorUserLoggedIn,
    setMutationLoading: userAuthActions.setLoadingStateForUserLogin,
    unsetMutationLoading: userAuthActions.unsetLoadingStateForUserLogin,
    resetError: userAuthActions.resetLogError
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LoginWithMutation);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(logUser, 'logUser', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/login/Login.js');

  __REACT_HOT_LOADER__.register(LoginWithMutation, 'LoginWithMutation', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/login/Login.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/login/Login.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/login/Login.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/login/Login.js');
}();

;

/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\nmutation CreateUser ($user: CreateUserInput!) {\n   createUser (input: $user) {\n       changedUser {\n         id,\n         username,\n         createdAt,\n         modifiedAt,\n         lastLogin\n       }\n       token\n   }\n}\n'], ['\nmutation CreateUser ($user: CreateUserInput!) {\n   createUser (input: $user) {\n       changedUser {\n         id,\n         username,\n         createdAt,\n         modifiedAt,\n         lastLogin\n       }\n       token\n   }\n}\n']);

var _reactRedux = __webpack_require__(88);

var _redux = __webpack_require__(40);

var _views = __webpack_require__(87);

var viewsActions = _interopRequireWildcard(_views);

var _userAuth = __webpack_require__(163);

var userAuthActions = _interopRequireWildcard(_userAuth);

var _views2 = __webpack_require__(108);

var _graphqlTag = __webpack_require__(107);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _reactApollo = __webpack_require__(103);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } //  weak

/* -----------------------------------------
  GraphQL - Apollo client
 ------------------------------------------*/

var CreateUser = (0, _graphqlTag2.default)(_templateObject);
// 1- add mutation "CreateUser":
var RegisterWithCreatUserMutation = (0, _reactApollo.graphql)(CreateUser, {
  name: 'createUserMutation',
  props: function props(_ref) {
    var ownProps = _ref.ownProps,
        createUserMutation = _ref.createUserMutation;
    return {
      registerUser: function registerUser(user) {
        ownProps.setMutationLoading();

        return createUserMutation(user).then(function (_ref2) {
          var _ref2$data$createUser = _ref2.data.createUser,
              changedUser = _ref2$data$createUser.changedUser,
              token = _ref2$data$createUser.token;

          ownProps.onUserRegisterSuccess(token, changedUser);
          ownProps.unsetMutationLoading();
          return Promise.resolve();
        }).catch(function (error) {
          ownProps.onUserRegisterError(error);
          ownProps.unsetMutationLoading();
          return Promise.reject(error);
        });
      }
    };
  }
})(_views2.Register);

/* -----------------------------------------
  Redux
 ------------------------------------------*/
var mapStateToProps = function mapStateToProps(state) {
  return {
    // views props:
    currentView: state.views.currentView,
    // user Auth props:
    userIsAuthenticated: state.userAuth.isAuthenticated,
    mutationLoading: state.userAuth.mutationLoading,
    // errors:
    error: state.userAuth.error
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    // views actions:
    enterRegister: viewsActions.enterRegister,
    leaveRegister: viewsActions.leaveRegister,
    // userAuth actions:
    onUserRegisterSuccess: userAuthActions.receivedUserRegister,
    onUserRegisterError: userAuthActions.errorUserRegister,
    resetError: userAuthActions.resetLogError,

    setMutationLoading: userAuthActions.setLoadingStateForUserRegister,
    unsetMutationLoading: userAuthActions.unsetLoadingStateForUserRegister
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RegisterWithCreatUserMutation);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CreateUser, 'CreateUser', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/register/Register.js');

  __REACT_HOT_LOADER__.register(RegisterWithCreatUserMutation, 'RegisterWithCreatUserMutation', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/register/Register.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/register/Register.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/register/Register.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/register/Register.js');
}();

;

/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(88);

var _redux = __webpack_require__(40);

var _views = __webpack_require__(87);

var viewsActions = _interopRequireWildcard(_views);

var _views2 = __webpack_require__(108);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/* -----------------------------------------
  Redux
 ------------------------------------------*/
//  weak

var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    enterProtected: viewsActions.enterProtected,
    leaveProtected: viewsActions.leaveProtected
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_views2.Protected);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/protected/Protected.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/protected/Protected.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/containers/protected/Protected.js');
}();

;

/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(45);

var _auth = __webpack_require__(164);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var PrivateRoute = function (_Component) {
  _inherits(PrivateRoute, _Component);

  function PrivateRoute() {
    _classCallCheck(this, PrivateRoute);

    return _possibleConstructorReturn(this, (PrivateRoute.__proto__ || Object.getPrototypeOf(PrivateRoute)).apply(this, arguments));
  }

  _createClass(PrivateRoute, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Component = _props.component,
          rest = _objectWithoutProperties(_props, ['component']);

      var location = this.props.location;


      var isUserAuthenticated = this.isAuthenticated();

      return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
        render: function render(props) {
          return isUserAuthenticated ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: "/login", state: { from: location } } });
        }
      }));
    }
  }, {
    key: 'isAuthenticated',
    value: function isAuthenticated() {
      var checkUserHasId = function checkUserHasId(user) {
        return user && user.id && user.id.length > 0;
      };
      var user = _auth2.default.getUserInfo() ? _auth2.default.getUserInfo() : null;
      var isAuthenticated = _auth2.default.getToken() && checkUserHasId(user) ? true : false;

      return isAuthenticated;
    }
  }]);

  return PrivateRoute;
}(_react.Component);

PrivateRoute.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  component: _propTypes2.default.any.isRequired,
  path: _propTypes2.default.string
};

var _default = (0, _reactRouterDom.withRouter)(PrivateRoute);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PrivateRoute, 'PrivateRoute', '/Volumes/Data/develop/mack-graphql-source/src/app/components/privateRoute/PrivateRoute.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/components/privateRoute/PrivateRoute.js');
}();

;

/***/ }),

/***/ 982:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(45);

var _auth = __webpack_require__(164);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var LogoutRoute = function (_PureComponent) {
  _inherits(LogoutRoute, _PureComponent);

  function LogoutRoute() {
    _classCallCheck(this, LogoutRoute);

    return _possibleConstructorReturn(this, (LogoutRoute.__proto__ || Object.getPrototypeOf(LogoutRoute)).apply(this, arguments));
  }

  _createClass(LogoutRoute, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _auth2.default.clearAllAppStorage();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.Route,
        this.props,
        _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: '/login' } })
      );
    }
  }]);

  return LogoutRoute;
}(_react.PureComponent);

LogoutRoute.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired
};

var _default = (0, _reactRouterDom.withRouter)(LogoutRoute);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LogoutRoute, "LogoutRoute", "/Volumes/Data/develop/mack-graphql-source/src/app/components/logoutRoute/LogoutRoute.js");

  __REACT_HOT_LOADER__.register(_default, "default", "/Volumes/Data/develop/mack-graphql-source/src/app/components/logoutRoute/LogoutRoute.js");
}();

;

/***/ }),

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(504);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //  weak

var ScrollToTop = function (_Component) {
  _inherits(ScrollToTop, _Component);

  function ScrollToTop() {
    _classCallCheck(this, ScrollToTop);

    return _possibleConstructorReturn(this, (ScrollToTop.__proto__ || Object.getPrototypeOf(ScrollToTop)).apply(this, arguments));
  }

  _createClass(ScrollToTop, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (window) {
        var prevLocation = prevProps.location;
        var nextLocation = this.props.location;


        if (prevLocation !== nextLocation) {
          window.scrollTo(0, 0);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return children;
    }
  }]);

  return ScrollToTop;
}(_react.Component);

ScrollToTop.propTypes = {
  // react-router 4:
  match: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,

  children: _propTypes2.default.node
};

var _default = (0, _reactRouter.withRouter)(ScrollToTop);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ScrollToTop, 'ScrollToTop', '/Volumes/Data/develop/mack-graphql-source/src/app/components/scrollToTop/ScrollToTop.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Volumes/Data/develop/mack-graphql-source/src/app/components/scrollToTop/ScrollToTop.js');
}();

;

/***/ })

},[551]);
//# sourceMappingURL=app.bundle.js.map