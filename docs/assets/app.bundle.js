webpackJsonp([0],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["receivedUserLoggedIn"] = receivedUserLoggedIn;
/* harmony export (immutable) */ __webpack_exports__["errorUserLoggedIn"] = errorUserLoggedIn;
/* harmony export (immutable) */ __webpack_exports__["setLoadingStateForUserLogin"] = setLoadingStateForUserLogin;
/* harmony export (immutable) */ __webpack_exports__["unsetLoadingStateForUserLogin"] = unsetLoadingStateForUserLogin;
/* harmony export (immutable) */ __webpack_exports__["receivedUserRegister"] = receivedUserRegister;
/* harmony export (immutable) */ __webpack_exports__["errorUserRegister"] = errorUserRegister;
/* harmony export (immutable) */ __webpack_exports__["setLoadingStateForUserRegister"] = setLoadingStateForUserRegister;
/* harmony export (immutable) */ __webpack_exports__["unsetLoadingStateForUserRegister"] = unsetLoadingStateForUserRegister;
/* harmony export (immutable) */ __webpack_exports__["setUserLogout"] = setUserLogout;
/* harmony export (immutable) */ __webpack_exports__["checkIfUserIsAuthenticated"] = checkIfUserIsAuthenticated;
/* harmony export (immutable) */ __webpack_exports__["resetLogError"] = resetLogError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth__ = __webpack_require__(181);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// #region imports


// #endregion

// #region constants
var dateFormat = 'DD/MM/YYYY HH:mm';

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
// #endregion

// #region  Reducer
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

/* harmony default export */ __webpack_exports__["default"] = (function () {
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
});
// #endregion

// #region  action creators

// //////////////////
// login sucess:
// //////////////////
function receivedUserLoggedIn() {
  var userToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var user = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyUser;
  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_0_moment___default()().format(dateFormat);

  var isAuthenticated = userToken ? true : false;

  __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].clearAllAppStorage(); // clear previous token
  __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].setToken(userToken); // set token to default store = localStorage and to default token key = 'token'
  __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].setUserInfo(user);

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
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_0_moment___default()().format(dateFormat);

  __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].clearAllAppStorage(); // clear previous token

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
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0_moment___default()().format(dateFormat);

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
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0_moment___default()().format(dateFormat);

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
  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_0_moment___default()().format(dateFormat);

  var isAuthenticated = userToken ? true : false;

  __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].clearAllAppStorage(); // clear previous token
  __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].setToken(userToken); // set token to default store = localStorage and to default token key = 'token'
  __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].setUserInfo(user);

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
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_0_moment___default()().format(dateFormat);

  __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].clearAllAppStorage(); // clear previous token

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
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0_moment___default()().format(dateFormat);

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
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0_moment___default()().format(dateFormat);

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
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0_moment___default()().format(dateFormat);

  __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].clearAllAppStorage();
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
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0_moment___default()().format(dateFormat);

  var user = __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].getUserInfo() ? __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].getUserInfo() : emptyUser;
  // need token and user info in localStorage to be authenticated
  var isAuthenticated = __WEBPACK_IMPORTED_MODULE_1__services_auth__["a" /* auth */].isAuthenticated() && checkUserHasId(user) ? true : false;

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
// reset login and register error:
// ////////////////////////////////
function resetLogError() {
  return {
    type: RESET_LOG_ERRORS
  };
}

// #endregion

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jwt_decode__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);





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
var auth = {
  // /////////////////////////////////////////////////////////////
  // TOKEN
  // /////////////////////////////////////////////////////////////

  /**
   * get token from localstorage
   *
   * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
   * @param {any} [tokenKey=TOKEN_KEY]  optionnal parameter to specify a token key
   * @returns {string} token value
   */
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


  /**
   * set the token value into localstorage (managed by localforage)
   *
   * @param {string} [value=''] token value
   * @param {'localStorage' | 'sessionStorage'} [toStorage='localStorage'] specify storage
   * @param {any} [tokenKey='token'] token key
   * @returns {boolean} success/failure flag
   */
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


  /**
   * check
   * - if token key contains a valid token value (defined and not an empty value)
   * - if the token expiration date is passed
   *
   *
   * Note: 'isAuthenticated' just checks 'tokenKey' on store (localStorage by default or sessionStorage)
   *
   * You may think: 'ok I just put an empty token key and I have access to protected routes?''
   *    -> answer is:  YES^^
   * BUT
   * -> : your backend will not recognize a wrong token so private data or safe and you protected view could be a bit ugly without any data.
   *
   * => ON CONCLUSION: this aim of 'isAuthenticated'
   *    -> is to help for a better "user experience"  (= better than displaying a view with no data since server did not accept the user).
   *    -> it is not a security purpose (security comes from backend, since frontend is easily hackable => user has access to all your frontend)
   *
   * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
   * @param {any} [tokenKey=TOKEN_KEY] token key
   * @returns {bool} is authenticed response
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


  /**
   * delete token
   *
   * @param {any} [tokenKey='token'] token key
   * @returns {bool} success/failure flag
   */
  clearToken: function clearToken() {
    var storage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : APP_PERSIST_STORES_TYPES[0];
    var tokenKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TOKEN_KEY;

    // localStorage:
    if (localStorage && localStorage[tokenKey]) {
      localStorage.removeItem(tokenKey);
      return true;
    }
    // sessionStorage:
    if (sessionStorage && sessionStorage[tokenKey]) {
      sessionStorage.removeItem(tokenKey);
      return true;
    }

    return false;
  },


  /**
   * return expiration date from token
   *
   * @param {string} encodedToken - base 64 token received from server and stored in local storage
   * @returns {date | null} returns expiration date or null id expired props not found in decoded token
   */
  getTokenExpirationDate: function getTokenExpirationDate(encodedToken) {
    if (!encodedToken) {
      return new Date(0); // is expired
    }

    var token = __WEBPACK_IMPORTED_MODULE_0_jwt_decode___default()(encodedToken);
    if (!token.exp) {
      return new Date(0); // is expired
    }
    var expirationDate = new Date(token.exp * 1000);
    return expirationDate;
  },


  /**
   * tell is token is expired (compared to now)
   *
   * @param {string} encodedToken - base 64 token received from server and stored in local storage
   * @returns {bool} returns true if expired else false
   */
  isExpiredToken: function isExpiredToken(encodedToken) {
    var expirationDate = this.getTokenExpirationDate(encodedToken);
    var rightNow = __WEBPACK_IMPORTED_MODULE_1_moment___default()();
    var isExpiredToken = __WEBPACK_IMPORTED_MODULE_1_moment___default()(rightNow).isAfter(__WEBPACK_IMPORTED_MODULE_1_moment___default()(expirationDate));

    return isExpiredToken;
  },


  // /////////////////////////////////////////////////////////////
  // USER_INFO
  // /////////////////////////////////////////////////////////////
  /**
   * get user info from localstorage
   *
   * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
   * @param {any} [userInfoKey='userInfo']  optionnal parameter to specify a token key
   * @returns {string} token value
   */
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


  /**
   * set the userInfo value into localstorage
   *
   * @param {object} [value=''] token value
   * @param {'localStorage' | 'sessionStorage'} [toStorage='localStorage'] specify storage
   * @param {any} [userInfoKey='userInfo'] token key
   * @returns {boolean} success/failure flag
   */
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


  /**
   * delete userInfo
   *
   * @param {string} [userInfoKey='userInfo'] token key
   * @returns {bool} success/failure flag
   */
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


  // /////////////////////////////////////////////////////////////
  // COMMON
  // /////////////////////////////////////////////////////////////

  /**
   * forget me method: clear all
   * @returns {bool} success/failure flag
   */
  clearAllAppStorage: function clearAllAppStorage() {
    if (localStorage) {
      localStorage.clear();
    }
    if (sessionStorage) {
      sessionStorage.clear();
    }
  }
};

/* harmony default export */ __webpack_exports__["b"] = (auth);

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectCache; });
/* harmony export (immutable) */ __webpack_exports__["b"] = defaultNormalizedCacheFactory;
var ObjectCache = (function () {
    function ObjectCache(data) {
        if (data === void 0) { data = {}; }
        this.data = data;
    }
    ObjectCache.prototype.toObject = function () {
        return this.data;
    };
    ObjectCache.prototype.get = function (dataId) {
        return this.data[dataId];
    };
    ObjectCache.prototype.set = function (dataId, value) {
        this.data[dataId] = value;
    };
    ObjectCache.prototype.delete = function (dataId) {
        this.data[dataId] = undefined;
    };
    ObjectCache.prototype.clear = function () {
        this.data = {};
    };
    ObjectCache.prototype.replace = function (newData) {
        this.data = newData || {};
    };
    return ObjectCache;
}());

function defaultNormalizedCacheFactory(seed) {
    return new ObjectCache(seed);
}
//# sourceMappingURL=objectCache.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jumbotron_Jumbotron__ = __webpack_require__(190);
/* unused harmony reexport Jumbotron */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_NavigationBar__ = __webpack_require__(801);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__navigation_NavigationBar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backToTop_BackToTop__ = __webpack_require__(807);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__backToTop_BackToTop__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_ErrorAlert__ = __webpack_require__(817);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__alert_ErrorAlert__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_WarningAlert__ = __webpack_require__(818);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__alert_WarningAlert__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert_Alert__ = __webpack_require__(819);
/* unused harmony reexport Alert */







/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


// #region imports

// #endregion

// #region flow types

// #endregion

var Jumbotron = function Jumbotron(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'jumbotron' },
    children
  );
};

// #region static props
Jumbotron.displayName = 'Jumbotron';
// #endregion

/* harmony default export */ __webpack_exports__["a"] = (Jumbotron);

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

/* eslint no-process-env:0 */
if (false) {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = __webpack_require__(754);
}

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeuristicFragmentMatcher; });
/* unused harmony export IntrospectionFragmentMatcher */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_utilities__ = __webpack_require__(36);

var haveWarned = false;
var HeuristicFragmentMatcher = (function () {
    function HeuristicFragmentMatcher() {
    }
    HeuristicFragmentMatcher.prototype.ensureReady = function () {
        return Promise.resolve();
    };
    HeuristicFragmentMatcher.prototype.canBypassInit = function () {
        return true;
    };
    HeuristicFragmentMatcher.prototype.match = function (idValue, typeCondition, context) {
        var obj = context.store.get(idValue.id);
        if (!obj) {
            return false;
        }
        if (!obj.__typename) {
            if (!haveWarned) {
                console.warn("You're using fragments in your queries, but either don't have the addTypename:\n  true option set in Apollo Client, or you are trying to write a fragment to the store without the __typename.\n   Please turn on the addTypename option and include __typename when writing fragments so that Apollo Client\n   can accurately match fragments.");
                console.warn('Could not find __typename on Fragment ', typeCondition, obj);
                console.warn("DEPRECATION WARNING: using fragments without __typename is unsupported behavior " +
                    "and will be removed in future versions of Apollo client. You should fix this and set addTypename to true now.");
                if (!Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["w" /* isTest */])()) {
                    haveWarned = true;
                }
            }
            context.returnPartialData = true;
            return true;
        }
        if (obj.__typename === typeCondition) {
            return true;
        }
        Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["E" /* warnOnceInDevelopment */])("You are using the simple (heuristic) fragment matcher, but your queries contain union or interface types.\n     Apollo Client will not be able to able to accurately map fragments." +
            "To make this error go away, use the IntrospectionFragmentMatcher as described in the docs: " +
            "https://www.apollographql.com/docs/react/recipes/fragment-matching.html", 'error');
        context.returnPartialData = true;
        return true;
    };
    return HeuristicFragmentMatcher;
}());

var IntrospectionFragmentMatcher = (function () {
    function IntrospectionFragmentMatcher(options) {
        if (options && options.introspectionQueryResultData) {
            this.possibleTypesMap = this.parseIntrospectionResult(options.introspectionQueryResultData);
            this.isReady = true;
        }
        else {
            this.isReady = false;
        }
        this.match = this.match.bind(this);
    }
    IntrospectionFragmentMatcher.prototype.match = function (idValue, typeCondition, context) {
        if (!this.isReady) {
            throw new Error('FragmentMatcher.match() was called before FragmentMatcher.init()');
        }
        var obj = context.store.get(idValue.id);
        if (!obj) {
            return false;
        }
        if (!obj.__typename) {
            throw new Error("Cannot match fragment because __typename property is missing: " + JSON.stringify(obj));
        }
        if (obj.__typename === typeCondition) {
            return true;
        }
        var implementingTypes = this.possibleTypesMap[typeCondition];
        if (implementingTypes && implementingTypes.indexOf(obj.__typename) > -1) {
            return true;
        }
        return false;
    };
    IntrospectionFragmentMatcher.prototype.parseIntrospectionResult = function (introspectionResultData) {
        var typeMap = {};
        introspectionResultData.__schema.types.forEach(function (type) {
            if (type.kind === 'UNION' || type.kind === 'INTERFACE') {
                typeMap[type.name] = type.possibleTypes.map(function (implementingType) { return implementingType.name; });
            }
        });
        return typeMap;
    };
    return IntrospectionFragmentMatcher;
}());

//# sourceMappingURL=fragmentMatcher.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WriteError */
/* unused harmony export enhanceErrorWithDocument */
/* unused harmony export writeQueryToStore */
/* harmony export (immutable) */ __webpack_exports__["a"] = writeResultToStore;
/* unused harmony export writeSelectionSetToStore */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_language_printer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_language_printer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_language_printer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_utilities__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectCache__ = __webpack_require__(188);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var WriteError = (function (_super) {
    __extends(WriteError, _super);
    function WriteError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'WriteError';
        return _this;
    }
    return WriteError;
}(Error));

function enhanceErrorWithDocument(error, document) {
    var enhancedError = new WriteError("Error writing result to store for query:\n " + Object(__WEBPACK_IMPORTED_MODULE_0_graphql_language_printer__["print"])(document));
    enhancedError.message += '\n' + error.message;
    enhancedError.stack = error.stack;
    return enhancedError;
}
function writeQueryToStore(_a) {
    var result = _a.result, query = _a.query, _b = _a.storeFactory, storeFactory = _b === void 0 ? __WEBPACK_IMPORTED_MODULE_2__objectCache__["b" /* defaultNormalizedCacheFactory */] : _b, _c = _a.store, store = _c === void 0 ? storeFactory() : _c, variables = _a.variables, dataIdFromObject = _a.dataIdFromObject, _d = _a.fragmentMap, fragmentMap = _d === void 0 ? {} : _d, fragmentMatcherFunction = _a.fragmentMatcherFunction;
    var queryDefinition = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["m" /* getQueryDefinition */])(query);
    variables = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["c" /* assign */])({}, Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["e" /* getDefaultValues */])(queryDefinition), variables);
    try {
        return writeSelectionSetToStore({
            dataId: 'ROOT_QUERY',
            result: result,
            selectionSet: queryDefinition.selectionSet,
            context: {
                store: store,
                storeFactory: storeFactory,
                processedData: {},
                variables: variables,
                dataIdFromObject: dataIdFromObject,
                fragmentMap: fragmentMap,
                fragmentMatcherFunction: fragmentMatcherFunction,
            },
        });
    }
    catch (e) {
        throw enhanceErrorWithDocument(e, query);
    }
}
function writeResultToStore(_a) {
    var dataId = _a.dataId, result = _a.result, document = _a.document, _b = _a.storeFactory, storeFactory = _b === void 0 ? __WEBPACK_IMPORTED_MODULE_2__objectCache__["b" /* defaultNormalizedCacheFactory */] : _b, _c = _a.store, store = _c === void 0 ? storeFactory() : _c, variables = _a.variables, dataIdFromObject = _a.dataIdFromObject, fragmentMatcherFunction = _a.fragmentMatcherFunction;
    var operationDefinition = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["k" /* getOperationDefinition */])(document);
    var selectionSet = operationDefinition.selectionSet;
    var fragmentMap = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["d" /* createFragmentMap */])(Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["g" /* getFragmentDefinitions */])(document));
    variables = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["c" /* assign */])({}, Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["e" /* getDefaultValues */])(operationDefinition), variables);
    try {
        return writeSelectionSetToStore({
            result: result,
            dataId: dataId,
            selectionSet: selectionSet,
            context: {
                store: store,
                storeFactory: storeFactory,
                processedData: {},
                variables: variables,
                dataIdFromObject: dataIdFromObject,
                fragmentMap: fragmentMap,
                fragmentMatcherFunction: fragmentMatcherFunction,
            },
        });
    }
    catch (e) {
        throw enhanceErrorWithDocument(e, document);
    }
}
function writeSelectionSetToStore(_a) {
    var result = _a.result, dataId = _a.dataId, selectionSet = _a.selectionSet, context = _a.context;
    var variables = context.variables, store = context.store, fragmentMap = context.fragmentMap;
    selectionSet.selections.forEach(function (selection) {
        var included = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["A" /* shouldInclude */])(selection, variables);
        if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["r" /* isField */])(selection)) {
            var resultFieldKey = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["z" /* resultKeyNameFromField */])(selection);
            var value = result[resultFieldKey];
            if (included) {
                if (typeof value !== 'undefined') {
                    writeFieldToStore({
                        dataId: dataId,
                        value: value,
                        field: selection,
                        context: context,
                    });
                }
                else {
                    var isDefered = selection.directives &&
                        selection.directives.length &&
                        selection.directives.some(function (directive) { return directive.name && directive.name.value === 'defer'; });
                    if (!isDefered && context.fragmentMatcherFunction) {
                        if (!Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["v" /* isProduction */])()) {
                            console.warn("Missing field " + resultFieldKey + " in " + JSON.stringify(result, null, 2).substring(0, 100));
                        }
                    }
                }
            }
        }
        else {
            var fragment = void 0;
            if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["t" /* isInlineFragment */])(selection)) {
                fragment = selection;
            }
            else {
                fragment = (fragmentMap || {})[selection.name.value];
                if (!fragment) {
                    throw new Error("No fragment named " + selection.name.value + ".");
                }
            }
            var matches = true;
            if (context.fragmentMatcherFunction && fragment.typeCondition) {
                var idValue = { type: 'id', id: 'self', generated: false };
                var fakeContext = {
                    store: new __WEBPACK_IMPORTED_MODULE_2__objectCache__["a" /* ObjectCache */]({ self: result }),
                    returnPartialData: false,
                    hasMissingField: false,
                    cacheRedirects: {},
                };
                matches = context.fragmentMatcherFunction(idValue, fragment.typeCondition.name.value, fakeContext);
                if (!Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["v" /* isProduction */])() && fakeContext.returnPartialData) {
                    console.error('WARNING: heuristic fragment matching going on!');
                }
            }
            if (included && matches) {
                writeSelectionSetToStore({
                    result: result,
                    selectionSet: fragment.selectionSet,
                    dataId: dataId,
                    context: context,
                });
            }
        }
    });
    return store;
}
function isGeneratedId(id) {
    return id[0] === '$';
}
function mergeWithGenerated(generatedKey, realKey, cache) {
    var generated = cache.get(generatedKey);
    var real = cache.get(realKey);
    Object.keys(generated).forEach(function (key) {
        var value = generated[key];
        var realValue = real[key];
        if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["s" /* isIdValue */])(value) && isGeneratedId(value.id) && Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["s" /* isIdValue */])(realValue)) {
            mergeWithGenerated(value.id, realValue.id, cache);
        }
        cache.delete(generatedKey);
        cache.set(realKey, __assign({}, generated, real));
    });
}
function isDataProcessed(dataId, field, processedData) {
    if (!processedData) {
        return false;
    }
    if (processedData[dataId]) {
        if (processedData[dataId].indexOf(field) >= 0) {
            return true;
        }
        else {
            processedData[dataId].push(field);
        }
    }
    else {
        processedData[dataId] = [field];
    }
    return false;
}
function writeFieldToStore(_a) {
    var field = _a.field, value = _a.value, dataId = _a.dataId, context = _a.context;
    var variables = context.variables, dataIdFromObject = context.dataIdFromObject, store = context.store;
    var storeValue;
    var storeObject;
    var storeFieldName = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["B" /* storeKeyNameFromField */])(field, variables);
    var shouldMerge = false;
    var generatedKey = '';
    if (!field.selectionSet || value === null) {
        storeValue =
            value != null && typeof value === 'object'
                ?
                    { type: 'json', json: value }
                :
                    value;
    }
    else if (Array.isArray(value)) {
        var generatedId = dataId + "." + storeFieldName;
        storeValue = processArrayValue(value, generatedId, field.selectionSet, context);
    }
    else {
        var valueDataId = dataId + "." + storeFieldName;
        var generated = true;
        if (!isGeneratedId(valueDataId)) {
            valueDataId = '$' + valueDataId;
        }
        if (dataIdFromObject) {
            var semanticId = dataIdFromObject(value);
            if (semanticId && isGeneratedId(semanticId)) {
                throw new Error('IDs returned by dataIdFromObject cannot begin with the "$" character.');
            }
            if (semanticId) {
                valueDataId = semanticId;
                generated = false;
            }
        }
        if (!isDataProcessed(valueDataId, field, context.processedData)) {
            writeSelectionSetToStore({
                dataId: valueDataId,
                result: value,
                selectionSet: field.selectionSet,
                context: context,
            });
        }
        storeValue = {
            type: 'id',
            id: valueDataId,
            generated: generated,
        };
        storeObject = store.get(dataId);
        if (storeObject && storeObject[storeFieldName] !== storeValue) {
            var escapedId = storeObject[storeFieldName];
            if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["s" /* isIdValue */])(storeValue) &&
                storeValue.generated &&
                Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["s" /* isIdValue */])(escapedId) &&
                !escapedId.generated) {
                throw new Error("Store error: the application attempted to write an object with no provided id" +
                    (" but the store already contains an id of " + escapedId.id + " for this object. The selectionSet") +
                    " that was trying to be written is:\n" +
                    Object(__WEBPACK_IMPORTED_MODULE_0_graphql_language_printer__["print"])(field));
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["s" /* isIdValue */])(escapedId) && escapedId.generated) {
                generatedKey = escapedId.id;
                shouldMerge = true;
            }
        }
    }
    var newStoreObj = __assign({}, store.get(dataId), (_b = {}, _b[storeFieldName] = storeValue, _b));
    if (shouldMerge) {
        mergeWithGenerated(generatedKey, storeValue.id, store);
    }
    storeObject = store.get(dataId);
    if (!storeObject || storeValue !== storeObject[storeFieldName]) {
        store.set(dataId, newStoreObj);
    }
    var _b;
}
function processArrayValue(value, generatedId, selectionSet, context) {
    return value.map(function (item, index) {
        if (item === null) {
            return null;
        }
        var itemDataId = generatedId + "." + index;
        if (Array.isArray(item)) {
            return processArrayValue(item, itemDataId, selectionSet, context);
        }
        var generated = true;
        if (context.dataIdFromObject) {
            var semanticId = context.dataIdFromObject(item);
            if (semanticId) {
                itemDataId = semanticId;
                generated = false;
            }
        }
        if (!isDataProcessed(itemDataId, selectionSet, context.processedData)) {
            writeSelectionSetToStore({
                dataId: itemDataId,
                result: item,
                selectionSet: selectionSet,
                context: context,
            });
        }
        var idStoreValue = {
            type: 'id',
            id: itemDataId,
            generated: generated,
        };
        return idStoreValue;
    });
}
//# sourceMappingURL=writeToStore.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ID_KEY */
/* harmony export (immutable) */ __webpack_exports__["b"] = readQueryFromStore;
/* harmony export (immutable) */ __webpack_exports__["a"] = diffQueryAgainstStore;
/* unused harmony export assertIdValue */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_anywhere__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_utilities__ = __webpack_require__(36);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var ID_KEY = typeof Symbol !== 'undefined' ? Symbol('id') : '@@id';
function readQueryFromStore(options) {
    var optsPatch = { returnPartialData: false };
    return diffQueryAgainstStore(__assign({}, options, optsPatch)).result;
}
var readStoreResolver = function (fieldName, idValue, args, context, _a) {
    var resultKey = _a.resultKey, directives = _a.directives;
    assertIdValue(idValue);
    var objId = idValue.id;
    var obj = context.store.get(objId);
    var storeKeyName = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["n" /* getStoreKeyName */])(fieldName, args, directives);
    var fieldValue = (obj || {})[storeKeyName];
    if (typeof fieldValue === 'undefined') {
        if (context.cacheRedirects &&
            obj &&
            (obj.__typename || objId === 'ROOT_QUERY')) {
            var typename = obj.__typename || 'Query';
            var type = context.cacheRedirects[typename];
            if (type) {
                var resolver = type[fieldName];
                if (resolver) {
                    fieldValue = resolver(obj, args, {
                        getCacheKey: function (obj) {
                            return Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["C" /* toIdValue */])(context.dataIdFromObject(obj));
                        },
                    });
                }
            }
        }
    }
    if (typeof fieldValue === 'undefined') {
        if (!context.returnPartialData) {
            throw new Error("Can't find field " + storeKeyName + " on object (" + objId + ") " + JSON.stringify(obj, null, 2) + ".");
        }
        context.hasMissingField = true;
        return fieldValue;
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["u" /* isJsonValue */])(fieldValue)) {
        if (idValue.previousResult &&
            Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["q" /* isEqual */])(idValue.previousResult[resultKey], fieldValue.json)) {
            return idValue.previousResult[resultKey];
        }
        return fieldValue.json;
    }
    if (idValue.previousResult) {
        fieldValue = addPreviousResultToIdValues(fieldValue, idValue.previousResult[resultKey]);
    }
    return fieldValue;
};
function diffQueryAgainstStore(_a) {
    var store = _a.store, query = _a.query, variables = _a.variables, previousResult = _a.previousResult, _b = _a.returnPartialData, returnPartialData = _b === void 0 ? true : _b, _c = _a.rootId, rootId = _c === void 0 ? 'ROOT_QUERY' : _c, fragmentMatcherFunction = _a.fragmentMatcherFunction, config = _a.config;
    var queryDefinition = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["m" /* getQueryDefinition */])(query);
    variables = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["c" /* assign */])({}, Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["e" /* getDefaultValues */])(queryDefinition), variables);
    var context = {
        store: store,
        returnPartialData: returnPartialData,
        dataIdFromObject: (config && config.dataIdFromObject) || null,
        cacheRedirects: (config && config.cacheRedirects) || {},
        hasMissingField: false,
    };
    var rootIdValue = {
        type: 'id',
        id: rootId,
        previousResult: previousResult,
    };
    var result = Object(__WEBPACK_IMPORTED_MODULE_0_graphql_anywhere__["a" /* default */])(readStoreResolver, query, rootIdValue, context, variables, {
        fragmentMatcher: fragmentMatcherFunction,
        resultMapper: resultMapper,
    });
    return {
        result: result,
        complete: !context.hasMissingField,
    };
}
function assertIdValue(idValue) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["s" /* isIdValue */])(idValue)) {
        throw new Error("Encountered a sub-selection on the query, but the store doesn't have an object reference. This should never happen during normal use unless you have custom code that is directly manipulating the store; please file an issue.");
    }
}
function addPreviousResultToIdValues(value, previousResult) {
    if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["s" /* isIdValue */])(value)) {
        return __assign({}, value, { previousResult: previousResult });
    }
    else if (Array.isArray(value)) {
        var idToPreviousResult_1 = new Map();
        if (Array.isArray(previousResult)) {
            previousResult.forEach(function (item) {
                if (item && item[ID_KEY]) {
                    idToPreviousResult_1.set(item[ID_KEY], item);
                }
            });
        }
        return value.map(function (item, i) {
            var itemPreviousResult = previousResult && previousResult[i];
            if (Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["s" /* isIdValue */])(item)) {
                itemPreviousResult =
                    idToPreviousResult_1.get(item.id) || itemPreviousResult;
            }
            return addPreviousResultToIdValues(item, itemPreviousResult);
        });
    }
    return value;
}
function resultMapper(resultFields, idValue) {
    if (idValue.previousResult) {
        var currentResultKeys_1 = Object.keys(resultFields);
        var sameAsPreviousResult = Object.keys(idValue.previousResult).reduce(function (sameKeys, key) { return sameKeys && currentResultKeys_1.indexOf(key) > -1; }, true) &&
            currentResultKeys_1.every(function (key) {
                return areNestedArrayItemsStrictlyEqual(resultFields[key], idValue.previousResult[key]);
            });
        if (sameAsPreviousResult) {
            return idValue.previousResult;
        }
    }
    Object.defineProperty(resultFields, ID_KEY, {
        enumerable: false,
        configurable: false,
        writable: false,
        value: idValue.id,
    });
    return resultFields;
}
function areNestedArrayItemsStrictlyEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) {
        return false;
    }
    return a.every(function (item, i) { return areNestedArrayItemsStrictlyEqual(item, b[i]); });
}
//# sourceMappingURL=readFromStore.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = graphql;
/* unused harmony export merge */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_utilities__ = __webpack_require__(36);

function graphql(resolver, document, rootValue, contextValue, variableValues, execOptions) {
    if (execOptions === void 0) { execOptions = {}; }
    var mainDefinition = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["i" /* getMainDefinition */])(document);
    var fragments = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["g" /* getFragmentDefinitions */])(document);
    var fragmentMap = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["d" /* createFragmentMap */])(fragments);
    var resultMapper = execOptions.resultMapper;
    var fragmentMatcher = execOptions.fragmentMatcher || (function () { return true; });
    var execContext = {
        fragmentMap: fragmentMap,
        contextValue: contextValue,
        variableValues: variableValues,
        resultMapper: resultMapper,
        resolver: resolver,
        fragmentMatcher: fragmentMatcher,
    };
    return executeSelectionSet(mainDefinition.selectionSet, rootValue, execContext);
}
function executeSelectionSet(selectionSet, rootValue, execContext) {
    var fragmentMap = execContext.fragmentMap, contextValue = execContext.contextValue, variables = execContext.variableValues;
    var result = {};
    selectionSet.selections.forEach(function (selection) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["A" /* shouldInclude */])(selection, variables)) {
            return;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["r" /* isField */])(selection)) {
            var fieldResult = executeField(selection, rootValue, execContext);
            var resultFieldKey = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["z" /* resultKeyNameFromField */])(selection);
            if (fieldResult !== undefined) {
                if (result[resultFieldKey] === undefined) {
                    result[resultFieldKey] = fieldResult;
                }
                else {
                    merge(result[resultFieldKey], fieldResult);
                }
            }
        }
        else {
            var fragment = void 0;
            if (Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["t" /* isInlineFragment */])(selection)) {
                fragment = selection;
            }
            else {
                fragment = fragmentMap[selection.name.value];
                if (!fragment) {
                    throw new Error("No fragment named " + selection.name.value);
                }
            }
            var typeCondition = fragment.typeCondition.name.value;
            if (execContext.fragmentMatcher(rootValue, typeCondition, contextValue)) {
                var fragmentResult = executeSelectionSet(fragment.selectionSet, rootValue, execContext);
                merge(result, fragmentResult);
            }
        }
    });
    if (execContext.resultMapper) {
        return execContext.resultMapper(result, rootValue);
    }
    return result;
}
function executeField(field, rootValue, execContext) {
    var variables = execContext.variableValues, contextValue = execContext.contextValue, resolver = execContext.resolver;
    var fieldName = field.name.value;
    var args = Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["b" /* argumentsObjectFromField */])(field, variables);
    var info = {
        isLeaf: !field.selectionSet,
        resultKey: Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["z" /* resultKeyNameFromField */])(field),
        directives: Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["f" /* getDirectiveInfoFromField */])(field, variables),
    };
    var result = resolver(fieldName, rootValue, args, contextValue, info);
    if (!field.selectionSet) {
        return result;
    }
    if (result == null) {
        return result;
    }
    if (Array.isArray(result)) {
        return executeSubSelectedArray(field, result, execContext);
    }
    return executeSelectionSet(field.selectionSet, result, execContext);
}
function executeSubSelectedArray(field, result, execContext) {
    return result.map(function (item) {
        if (item === null) {
            return null;
        }
        if (Array.isArray(item)) {
            return executeSubSelectedArray(field, item, execContext);
        }
        return executeSelectionSet(field.selectionSet, item, execContext);
    });
}
function merge(dest, src) {
    if (src === null || typeof src !== 'object') {
        return src;
    }
    Object.keys(dest).forEach(function (destKey) {
        if (src.hasOwnProperty(destKey)) {
            merge(dest[destKey], src[destKey]);
        }
    });
    Object.keys(src).forEach(function (srcKey) {
        if (!dest.hasOwnProperty(srcKey)) {
            dest[srcKey] = src[srcKey];
        }
    });
}
//# sourceMappingURL=graphql.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RecordingCache */
/* harmony export (immutable) */ __webpack_exports__["a"] = record;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var RecordingCache = (function () {
    function RecordingCache(data) {
        if (data === void 0) { data = {}; }
        this.data = data;
        this.recordedData = {};
    }
    RecordingCache.prototype.record = function (transaction) {
        transaction(this);
        var recordedData = this.recordedData;
        this.recordedData = {};
        return recordedData;
    };
    RecordingCache.prototype.toObject = function () {
        return __assign({}, this.data, this.recordedData);
    };
    RecordingCache.prototype.get = function (dataId) {
        if (this.recordedData.hasOwnProperty(dataId)) {
            return this.recordedData[dataId];
        }
        return this.data[dataId];
    };
    RecordingCache.prototype.set = function (dataId, value) {
        if (this.get(dataId) !== value) {
            this.recordedData[dataId] = value;
        }
    };
    RecordingCache.prototype.delete = function (dataId) {
        this.recordedData[dataId] = undefined;
    };
    RecordingCache.prototype.clear = function () {
        var _this = this;
        Object.keys(this.data).forEach(function (dataId) { return _this.delete(dataId); });
        this.recordedData = {};
    };
    RecordingCache.prototype.replace = function (newData) {
        this.clear();
        this.recordedData = __assign({}, newData);
    };
    return RecordingCache;
}());

function record(startingState, transaction) {
    var recordingCache = new RecordingCache(startingState);
    return recordingCache.record(transaction);
}
//# sourceMappingURL=recordingCache.js.map

/***/ }),

/***/ 429:
/***/ (function(module, exports) {



/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose_compose__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hoc_withEnterAnimation__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PageNotFound__ = __webpack_require__(846);


// #region imports



// #endregion

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_recompose_compose___default()(Object(__WEBPACK_IMPORTED_MODULE_1__hoc_withEnterAnimation__["a" /* default */])())(__WEBPACK_IMPORTED_MODULE_2__PageNotFound__["a" /* default */]));

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(224);
module.exports = __webpack_require__(680);


/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_hot_loader__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_hot_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_hot_loader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_tap_event_plugin__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_tap_event_plugin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_tap_event_plugin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_smoothscroll_polyfill__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_smoothscroll_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_smoothscroll_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_animate_css__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_animate_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_animate_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_font_awesome_css_font_awesome_min_css__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_font_awesome_css_font_awesome_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_font_awesome_css_font_awesome_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_bootstrap_dist_css_bootstrap_min_css__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_bootstrap_dist_css_bootstrap_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_bootstrap_dist_css_bootstrap_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_bootstrap_dist_js_bootstrap_min_js__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_bootstrap_dist_js_bootstrap_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_bootstrap_dist_js_bootstrap_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__style_index_scss__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__style_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__style_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Root__ = __webpack_require__(710);


// #region imports












// #endregion

// #region smoothscroll polyfill
__WEBPACK_IMPORTED_MODULE_4_smoothscroll_polyfill___default.a.polyfill();
// force polyfill (even if browser partially implements it)
window.__forceSmoothScrollPolyfill__ = true;
// #endregion

// #region constants
var ELEMENT_TO_BOOTSTRAP = 'root';
var BootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);
// #endregion

__WEBPACK_IMPORTED_MODULE_3_react_tap_event_plugin___default()();

var renderApp = function renderApp(RootComponent) {
  Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_hot_loader__["AppContainer"],
    { warnings: false },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(RootComponent, null)
  ), BootstrapedElement);
};

renderApp(__WEBPACK_IMPORTED_MODULE_11__Root__["a" /* default */]);

if (false) {
  module.hot.accept('./Root', function () {
    var RootComponent = require('./Root').default;
    renderApp(RootComponent);
  });
}

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(696)


/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require */

if (true) {
  module.exports = __webpack_require__(697);
} else {
  module.exports = require('./index.dev');
}

/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.AppContainer = __webpack_require__(698);

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable global-require */

if (true) {
  module.exports = __webpack_require__(699);
} else {
  module.exports = require('./AppContainer.dev');
}

/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/prop-types */

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

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

/* smoothscroll v0.4.0 - 2018 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      var isBody;

      do {
        el = el.parentNode;

        isBody = el === d.body;
      } while (isBody === false && isScrollable(el) === false);

      isBody = null;

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (true) {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {
    // global
    polyfill();
  }

}());


/***/ }),

/***/ 705:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)))

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_store_configureStore__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_store_configureStore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__redux_store_configureStore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_apollo__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_app_App__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_scrollToTop_ScrollToTop__ = __webpack_require__(847);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_login__ = __webpack_require__(848);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_pageNotFound__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_logoutRoute_LogoutRoute__ = __webpack_require__(850);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports

// Router, // using now ConnectedRouter from react-router-redux v5.x (the only one compatible react-router 4)










 // not connected to redux (no index.js)

// #endregion

// #region flow types

// #endregion

// #region constants
var store = __WEBPACK_IMPORTED_MODULE_4__redux_store_configureStore___default()();
// #endregion

var Root = function (_Component) {
  _inherits(Root, _Component);

  function Root() {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
  }

  _createClass(Root, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_react_redux__["Provider"],
        { store: store },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_react_apollo__["ApolloProvider"],
          { client: __WEBPACK_IMPORTED_MODULE_6__services_apollo__["a" /* default */] },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_react_router_redux__["ConnectedRouter"],
              { history: __WEBPACK_IMPORTED_MODULE_4__redux_store_configureStore__["history"] },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_8__components_scrollToTop_ScrollToTop__["a" /* default */],
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/login', component: __WEBPACK_IMPORTED_MODULE_9__views_login__["a" /* default */] }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__containers_app_App__["a" /* default */], null),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_logoutRoute_LogoutRoute__["a" /* default */], { path: '/logout' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { component: __WEBPACK_IMPORTED_MODULE_10__views_pageNotFound__["a" /* default */] })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Root;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Root);

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["enterHome"] = enterHome;
/* harmony export (immutable) */ __webpack_exports__["leaveHome"] = leaveHome;
/* harmony export (immutable) */ __webpack_exports__["enterAbout"] = enterAbout;
/* harmony export (immutable) */ __webpack_exports__["leaveAbout"] = leaveAbout;
/* harmony export (immutable) */ __webpack_exports__["enterLogin"] = enterLogin;
/* harmony export (immutable) */ __webpack_exports__["leaveLogin"] = leaveLogin;
/* harmony export (immutable) */ __webpack_exports__["enterRegister"] = enterRegister;
/* harmony export (immutable) */ __webpack_exports__["leaveRegister"] = leaveRegister;
/* harmony export (immutable) */ __webpack_exports__["enterProtected"] = enterProtected;
/* harmony export (immutable) */ __webpack_exports__["leaveProtected"] = leaveProtected;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// #region imports

var dateFormat = 'DD/MM/YYYY HH:mm';
// #endregion

// #region constants

// #region non protected views:
var ENTER_HOME_VIEW = 'ENTER_HOME_VIEW';
var LEAVE_HOME_VIEW = 'LEAVE_HOME_VIEW';
var ENTER_ABOUT_VIEW = 'ENTER_ABOUT_VIEW';
var LEAVE_ABOUT_VIEW = 'LEAVE_ABOUT_VIEW';
var ENTER_LOGIN_VIEW = 'ENTER_LOGIN_VIEW';
var LEAVE_LOGIN_VIEW = 'LEAVE_LOGIN_VIEW';
var ENTER_REGISTER_VIEW = 'ENTER_REGISTER_VIEW';
var LEAVE_REGISTER_VIEW = 'LEAVE_REGISTER_VIEW';
// #endregion

// #region protected views:
var ENTER_PROTECTED_VIEW = 'ENTER_PROTECTED_VIEW';
var LEAVE_PROTECTED_VIEW = 'LEAVE_PROTECTED_VIEW';
// #endregion
// #endregion

// #region Reducer
var initialState = {
  currentView: 'not set',
  enterTime: null,
  leaveTime: null
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var currentTime = __WEBPACK_IMPORTED_MODULE_0_moment___default()().format(dateFormat);

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
});
// #endregion

// #region action creators
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
// #endregion

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony export (immutable) */ __webpack_exports__["default"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_history_createHashHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_thunk__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_reducers__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux_devtools_extension__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_redux_devtools_extension__);


// #region imports



// #region import createHistory from hashHistory or BrowserHistory:

// import createHistory            from 'history/createBrowserHistory';
// #endregion



// #endregion

var loggerMiddleware = Object(__WEBPACK_IMPORTED_MODULE_1_redux_logger__["createLogger"])({
  level: 'info',
  collapsed: true
});

var history = __WEBPACK_IMPORTED_MODULE_3_history_createHashHistory___default()();

// createStore : enhancer
// NOTE: use now https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
var enhancer = Object(__WEBPACK_IMPORTED_MODULE_6_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_4_redux_thunk___default.a, Object(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerMiddleware"])(history), loggerMiddleware));

// export default = "redux store"
function configureStore(initialState) {
  var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_5__modules_reducers__["a" /* default */], initialState, enhancer);
  if (false) {
    module.hot.accept('../modules/reducers', function () {
      return store.replaceReducer(require('../modules/reducers').default);
    });
  }
  return store;
}

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.reduxLogger=e.reduxLogger||{})}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)))

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_redux__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userAuth__ = __webpack_require__(131);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var appReducers = {
  views: __WEBPACK_IMPORTED_MODULE_2__views__["default"],
  userAuth: __WEBPACK_IMPORTED_MODULE_3__userAuth__["default"]
};

// combine reducers -> createStore reducer
var reducers = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(_extends({}, appReducers, {
  routing: __WEBPACK_IMPORTED_MODULE_1_react_router_redux__["routerReducer"]
}));

/* harmony default export */ __webpack_exports__["a"] = (reducers);

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var base64_url_decode = __webpack_require__(759);

function InvalidTokenError(message) {
  this.message = message;
}

InvalidTokenError.prototype = new Error();
InvalidTokenError.prototype.name = 'InvalidTokenError';

module.exports = function (token,options) {
  if (typeof token !== 'string') {
    throw new InvalidTokenError('Invalid token specified');
  }

  options = options || {};
  var pos = options.header === true ? 0 : 1;
  try {
    return JSON.parse(base64_url_decode(token.split('.')[pos]));
  } catch (e) {
    throw new InvalidTokenError('Invalid token specified: ' + e.message);
  }
};

module.exports.InvalidTokenError = InvalidTokenError;


/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

var atob = __webpack_require__(760);

function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
    var code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = '0' + code;
    }
    return '%' + code;
  }));
}

module.exports = function(str) {
  var output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw "Illegal base64url string!";
  }

  try{
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
};


/***/ }),

/***/ 760:
/***/ (function(module, exports) {

/**
 * The code was extracted from:
 * https://github.com/davidchambers/Base64.js
 */

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function InvalidCharacterError(message) {
  this.message = message;
}

InvalidCharacterError.prototype = new Error();
InvalidCharacterError.prototype.name = 'InvalidCharacterError';

function polyfill (input) {
  var str = String(input).replace(/=+$/, '');
  if (str.length % 4 == 1) {
    throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  for (
    // initialize result and counters
    var bc = 0, bs, buffer, idx = 0, output = '';
    // get next character
    buffer = str.charAt(idx++);
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
      // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
  ) {
    // try to find character in table (0-63, not found => -1)
    buffer = chars.indexOf(buffer);
  }
  return output;
}


module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;


/***/ }),

/***/ 761:
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

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_cache_inmemory__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_link_context__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_link__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_apollo_link_http__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_apollo_link_error__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(799);
var _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// cached token to access localStorage just once
var getUserToken = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!token) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', token);

          case 2:
            return _context.abrupt('return', new Promise(function (resolve, reject) {
              var storedToken = window.localStorage.getItem('token');
              resolve(storedToken);
            }));

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getUserToken() {
    return _ref.apply(this, arguments);
  };
}();
// #endregion

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// #region imports







// #endregion

// #region link, middleware
var uri = __WEBPACK_IMPORTED_MODULE_6__config__["a" /* appConfig */].apollo.networkInterface;

var httplink = Object(__WEBPACK_IMPORTED_MODULE_4_apollo_link_http__["a" /* createHttpLink */])({
  uri: uri
});

// #region get user token from localStorage
var token = void 0;var authMiddleware = Object(__WEBPACK_IMPORTED_MODULE_2_apollo_link_context__["a" /* setContext */])(function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(operation, _ref3) {
    var headers = _ref3.headers;
    var currentUsertoken, authorization;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getUserToken();

          case 2:
            currentUsertoken = _context2.sent;
            authorization = currentUsertoken ? 'Bearer ' + currentUsertoken : null;
            return _context2.abrupt('return', {
              headers: _extends({}, headers, {
                authorization: authorization
              })
            });

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}());
// #endregion

// #region cache
var cache = new __WEBPACK_IMPORTED_MODULE_1_apollo_cache_inmemory__["a" /* InMemoryCache */]();
// #endregion

// #region afterware (lanage token expiration for exmaple)
var errorLink = Object(__WEBPACK_IMPORTED_MODULE_5_apollo_link_error__["a" /* onError */])(function (_ref4) {
  var graphQLErrors = _ref4.graphQLErrors,
      networkError = _ref4.networkError;

  console.log('error afterware, graphQLErrors: ', graphQLErrors);
  console.log('error afterware, networkError: ', networkError);

  if (networkError && networkError.statusCode === 401) {
    throw new Error('Unauthorized');
  }
});
// #endregion

var link = Object(__WEBPACK_IMPORTED_MODULE_3_apollo_link__["d" /* from */])([authMiddleware, errorLink, httplink]);
// #region apollo client instanciation
var client = new __WEBPACK_IMPORTED_MODULE_0_apollo_client__["ApolloClient"]({
  link: link,
  cache: cache,
  queryDeduplication: true
});
// #endregion

/* harmony default export */ __webpack_exports__["a"] = (client);

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__inMemoryCache__ = __webpack_require__(786);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__inMemoryCache__["a"]; });
/* unused harmony reexport defaultDataIdFromObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__readFromStore__ = __webpack_require__(421);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__writeToStore__ = __webpack_require__(420);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fragmentMatcher__ = __webpack_require__(419);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objectCache__ = __webpack_require__(188);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recordingCache__ = __webpack_require__(423);
/* unused harmony namespace reexport */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultDataIdFromObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryCache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_cache__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_utilities__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fragmentMatcher__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__writeToStore__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__readFromStore__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__objectCache__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recordingCache__ = __webpack_require__(423);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};







var defaultConfig = {
    fragmentMatcher: new __WEBPACK_IMPORTED_MODULE_2__fragmentMatcher__["a" /* HeuristicFragmentMatcher */](),
    dataIdFromObject: defaultDataIdFromObject,
    addTypename: true,
    storeFactory: __WEBPACK_IMPORTED_MODULE_5__objectCache__["b" /* defaultNormalizedCacheFactory */],
};
function defaultDataIdFromObject(result) {
    if (result.__typename) {
        if (result.id !== undefined) {
            return result.__typename + ":" + result.id;
        }
        if (result._id !== undefined) {
            return result.__typename + ":" + result._id;
        }
    }
    return null;
}
var InMemoryCache = (function (_super) {
    __extends(InMemoryCache, _super);
    function InMemoryCache(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this) || this;
        _this.optimistic = [];
        _this.watches = [];
        _this.silenceBroadcast = false;
        _this.config = __assign({}, defaultConfig, config);
        if (_this.config.customResolvers) {
            console.warn('customResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating customResolvers in the next major version.');
            _this.config.cacheRedirects = _this.config.customResolvers;
        }
        if (_this.config.cacheResolvers) {
            console.warn('cacheResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating cacheResolvers in the next major version.');
            _this.config.cacheRedirects = _this.config.cacheResolvers;
        }
        _this.addTypename = _this.config.addTypename;
        _this.data = _this.config.storeFactory();
        return _this;
    }
    InMemoryCache.prototype.restore = function (data) {
        if (data)
            this.data.replace(data);
        return this;
    };
    InMemoryCache.prototype.extract = function (optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        if (optimistic && this.optimistic.length > 0) {
            var patches = this.optimistic.map(function (opt) { return opt.data; });
            return Object.assign.apply(Object, [{}, this.data.toObject()].concat(patches));
        }
        return this.data.toObject();
    };
    InMemoryCache.prototype.read = function (query) {
        if (query.rootId && this.data.get(query.rootId) === undefined) {
            return null;
        }
        return Object(__WEBPACK_IMPORTED_MODULE_4__readFromStore__["b" /* readQueryFromStore */])({
            store: this.config.storeFactory(this.extract(query.optimistic)),
            query: this.transformDocument(query.query),
            variables: query.variables,
            rootId: query.rootId,
            fragmentMatcherFunction: this.config.fragmentMatcher.match,
            previousResult: query.previousResult,
            config: this.config,
        });
    };
    InMemoryCache.prototype.write = function (write) {
        Object(__WEBPACK_IMPORTED_MODULE_3__writeToStore__["a" /* writeResultToStore */])({
            dataId: write.dataId,
            result: write.result,
            variables: write.variables,
            document: this.transformDocument(write.query),
            store: this.data,
            dataIdFromObject: this.config.dataIdFromObject,
            fragmentMatcherFunction: this.config.fragmentMatcher.match,
        });
        this.broadcastWatches();
    };
    InMemoryCache.prototype.diff = function (query) {
        return Object(__WEBPACK_IMPORTED_MODULE_4__readFromStore__["a" /* diffQueryAgainstStore */])({
            store: this.config.storeFactory(this.extract(query.optimistic)),
            query: this.transformDocument(query.query),
            variables: query.variables,
            returnPartialData: query.returnPartialData,
            previousResult: query.previousResult,
            fragmentMatcherFunction: this.config.fragmentMatcher.match,
            config: this.config,
        });
    };
    InMemoryCache.prototype.watch = function (watch) {
        var _this = this;
        this.watches.push(watch);
        return function () {
            _this.watches = _this.watches.filter(function (c) { return c !== watch; });
        };
    };
    InMemoryCache.prototype.evict = function (query) {
        throw new Error("eviction is not implemented on InMemory Cache");
    };
    InMemoryCache.prototype.reset = function () {
        this.data.clear();
        this.broadcastWatches();
        return Promise.resolve();
    };
    InMemoryCache.prototype.removeOptimistic = function (id) {
        var _this = this;
        var toPerform = this.optimistic.filter(function (item) { return item.id !== id; });
        this.optimistic = [];
        toPerform.forEach(function (change) {
            _this.recordOptimisticTransaction(change.transaction, change.id);
        });
        this.broadcastWatches();
    };
    InMemoryCache.prototype.performTransaction = function (transaction) {
        var alreadySilenced = this.silenceBroadcast;
        this.silenceBroadcast = true;
        transaction(this);
        if (!alreadySilenced) {
            this.silenceBroadcast = false;
        }
        this.broadcastWatches();
    };
    InMemoryCache.prototype.recordOptimisticTransaction = function (transaction, id) {
        var _this = this;
        this.silenceBroadcast = true;
        var patch = Object(__WEBPACK_IMPORTED_MODULE_6__recordingCache__["a" /* record */])(this.extract(true), function (recordingCache) {
            var dataCache = _this.data;
            _this.data = recordingCache;
            _this.performTransaction(transaction);
            _this.data = dataCache;
        });
        this.optimistic.push({
            id: id,
            transaction: transaction,
            data: patch,
        });
        this.silenceBroadcast = false;
        this.broadcastWatches();
    };
    InMemoryCache.prototype.transformDocument = function (document) {
        if (this.addTypename)
            return Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["a" /* addTypenameToDocument */])(document);
        return document;
    };
    InMemoryCache.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.read({
            query: options.query,
            variables: options.variables,
            optimistic: optimistic,
        });
    };
    InMemoryCache.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.read({
            query: this.transformDocument(Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["h" /* getFragmentQueryDocument */])(options.fragment, options.fragmentName)),
            variables: options.variables,
            rootId: options.id,
            optimistic: optimistic,
        });
    };
    InMemoryCache.prototype.writeQuery = function (options) {
        this.write({
            dataId: 'ROOT_QUERY',
            result: options.data,
            query: this.transformDocument(options.query),
            variables: options.variables,
        });
    };
    InMemoryCache.prototype.writeFragment = function (options) {
        this.write({
            dataId: options.id,
            result: options.data,
            query: this.transformDocument(Object(__WEBPACK_IMPORTED_MODULE_1_apollo_utilities__["h" /* getFragmentQueryDocument */])(options.fragment, options.fragmentName)),
            variables: options.variables,
        });
    };
    InMemoryCache.prototype.broadcastWatches = function () {
        var _this = this;
        if (this.silenceBroadcast)
            return;
        this.watches.forEach(function (c) {
            var newData = _this.diff({
                query: c.query,
                variables: c.variables,
                previousResult: c.previousResult && c.previousResult(),
                optimistic: c.optimistic,
            });
            c.callback(newData);
        });
    };
    return InMemoryCache;
}(__WEBPACK_IMPORTED_MODULE_0_apollo_cache__["a" /* ApolloCache */]));

//# sourceMappingURL=inMemoryCache.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cache__ = __webpack_require__(788);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cache__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(790);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApolloCache; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_utilities__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(789);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var ApolloCache = (function () {
    function ApolloCache() {
    }
    ApolloCache.prototype.transformDocument = function (document) {
        return document;
    };
    ApolloCache.prototype.transformForLink = function (document) {
        return document;
    };
    ApolloCache.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.read({
            query: options.query,
            variables: options.variables,
            optimistic: optimistic,
        });
    };
    ApolloCache.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.read({
            query: Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["h" /* getFragmentQueryDocument */])(options.fragment, options.fragmentName),
            variables: options.variables,
            rootId: options.id,
            optimistic: optimistic,
        });
    };
    ApolloCache.prototype.writeQuery = function (options) {
        this.write({
            dataId: 'ROOT_QUERY',
            result: options.data,
            query: options.query,
            variables: options.variables,
        });
    };
    ApolloCache.prototype.writeFragment = function (options) {
        this.write({
            dataId: options.id,
            result: options.data,
            variables: options.variables,
            query: Object(__WEBPACK_IMPORTED_MODULE_0_apollo_utilities__["h" /* getFragmentQueryDocument */])(options.fragment, options.fragmentName),
        });
    };
    ApolloCache.prototype.writeData = function (_a) {
        var id = _a.id, data = _a.data;
        if (typeof id !== 'undefined') {
            var typenameResult = null;
            try {
                typenameResult = this.read({
                    rootId: id,
                    optimistic: false,
                    query: __WEBPACK_IMPORTED_MODULE_1__utils__["b" /* justTypenameQuery */],
                });
            }
            catch (e) {
            }
            var __typename = (typenameResult && typenameResult.__typename) || '__ClientData';
            var dataToWrite = __assign({ __typename: __typename }, data);
            this.writeFragment({
                id: id,
                fragment: Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* fragmentFromPojo */])(dataToWrite, __typename),
                data: dataToWrite,
            });
        }
        else {
            this.writeQuery({ query: Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* queryFromPojo */])(data), data: data });
        }
    };
    return ApolloCache;
}());

//# sourceMappingURL=cache.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = queryFromPojo;
/* harmony export (immutable) */ __webpack_exports__["a"] = fragmentFromPojo;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return justTypenameQuery; });
function queryFromPojo(obj) {
    var op = {
        kind: 'OperationDefinition',
        operation: 'query',
        name: {
            kind: 'Name',
            value: 'GeneratedClientQuery',
        },
        selectionSet: selectionSetFromObj(obj),
    };
    var out = {
        kind: 'Document',
        definitions: [op],
    };
    return out;
}
function fragmentFromPojo(obj, typename) {
    var frag = {
        kind: 'FragmentDefinition',
        typeCondition: {
            kind: 'NamedType',
            name: {
                kind: 'Name',
                value: typename || '__FakeType',
            },
        },
        name: {
            kind: 'Name',
            value: 'GeneratedClientQuery',
        },
        selectionSet: selectionSetFromObj(obj),
    };
    var out = {
        kind: 'Document',
        definitions: [frag],
    };
    return out;
}
function selectionSetFromObj(obj) {
    if (typeof obj === 'number' ||
        typeof obj === 'boolean' ||
        typeof obj === 'string' ||
        typeof obj === 'undefined' ||
        obj === null) {
        return null;
    }
    if (Array.isArray(obj)) {
        return selectionSetFromObj(obj[0]);
    }
    var selections = [];
    Object.keys(obj).forEach(function (key) {
        var field = {
            kind: 'Field',
            name: {
                kind: 'Name',
                value: key,
            },
        };
        var nestedSelSet = selectionSetFromObj(obj[key]);
        if (nestedSelSet) {
            field.selectionSet = nestedSelSet;
        }
        selections.push(field);
    });
    var selectionSet = {
        kind: 'SelectionSet',
        selections: selections,
    };
    return selectionSet;
}
var justTypenameQuery = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: null,
            variableDefinitions: null,
            directives: [],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        alias: null,
                        name: {
                            kind: 'Name',
                            value: '__typename',
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null,
                    },
                ],
            },
        },
    ],
};
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cache__ = __webpack_require__(791);
/* unused harmony namespace reexport */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Cache */
var Cache;
(function (Cache) {
})(Cache || (Cache = {}));
//# sourceMappingURL=Cache.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities__ = __webpack_require__(793);
/* unused harmony reexport filter */
/* unused harmony reexport check */
/* unused harmony reexport propType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphql__ = __webpack_require__(422);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1__graphql__["a" /* graphql */]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export filter */
/* unused harmony export check */
/* unused harmony export propType */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graphql__ = __webpack_require__(422);

function filter(doc, data) {
    var resolver = function (fieldName, root, args, context, info) {
        return root[info.resultKey];
    };
    return Object(__WEBPACK_IMPORTED_MODULE_0__graphql__["a" /* graphql */])(resolver, doc, data);
}
function check(doc, data) {
    var resolver = function (fieldName, root, args, context, info) {
        if (!{}.hasOwnProperty.call(root, info.resultKey)) {
            throw new Error(info.resultKey + " missing on " + root);
        }
        return root[info.resultKey];
    };
    Object(__WEBPACK_IMPORTED_MODULE_0__graphql__["a" /* graphql */])(resolver, doc, data, {}, {}, {
        fragmentMatcher: function () { return false; },
    });
}
var ANONYMOUS = '<<anonymous>>';
function PropTypeError(message) {
    this.message = message;
    this.stack = '';
}
PropTypeError.prototype = Error.prototype;
var reactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context',
};
function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;
        if (props[propName] == null) {
            var locationName = reactPropTypeLocationNames[location];
            if (isRequired) {
                if (props[propName] === null) {
                    return new PropTypeError("The " + locationName + " `" + propFullName + "` is marked as required " +
                        ("in `" + componentName + "`, but its value is `null`."));
                }
                return new PropTypeError("The " + locationName + " `" + propFullName + "` is marked as required in " +
                    ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
        }
        else {
            return validate(props, propName, componentName, location, propFullName);
        }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
}
function propType(doc) {
    return createChainableTypeChecker(function (props, propName) {
        var prop = props[propName];
        try {
            check(doc, prop);
            return null;
        }
        catch (e) {
            return e;
        }
    });
}
//# sourceMappingURL=utilities.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_link__ = __webpack_require__(58);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};

var setContext = function (setter) {
    return new __WEBPACK_IMPORTED_MODULE_0_apollo_link__["a" /* ApolloLink */](function (operation, forward) {
        var request = __rest(operation, []);
        return new __WEBPACK_IMPORTED_MODULE_0_apollo_link__["b" /* Observable */](function (observer) {
            var handle;
            Promise.resolve(request)
                .then(function (req) { return setter(req, operation.getContext()); })
                .then(operation.setContext)
                .then(function () {
                handle = forward(operation).subscribe({
                    next: observer.next.bind(observer),
                    error: observer.error.bind(observer),
                    complete: observer.complete.bind(observer),
                });
            })
                .catch(observer.error.bind(observer));
            return function () {
                if (handle)
                    handle.unsubscribe();
            };
        });
    });
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__httpLink__ = __webpack_require__(796);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__httpLink__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createHttpLink; });
/* unused harmony export HttpLink */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_link__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http_common__ = __webpack_require__(797);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};


var createHttpLink = function (linkOptions) {
    if (linkOptions === void 0) { linkOptions = {}; }
    var _a = linkOptions.uri, uri = _a === void 0 ? '/graphql' : _a, fetcher = linkOptions.fetch, includeExtensions = linkOptions.includeExtensions, useGETForQueries = linkOptions.useGETForQueries, requestOptions = __rest(linkOptions, ["uri", "fetch", "includeExtensions", "useGETForQueries"]);
    Object(__WEBPACK_IMPORTED_MODULE_1_apollo_link_http_common__["a" /* checkFetcher */])(fetcher);
    if (!fetcher) {
        fetcher = fetch;
    }
    var linkConfig = {
        http: { includeExtensions: includeExtensions },
        options: requestOptions.fetchOptions,
        credentials: requestOptions.credentials,
        headers: requestOptions.headers,
    };
    return new __WEBPACK_IMPORTED_MODULE_0_apollo_link__["a" /* ApolloLink */](function (operation) {
        var chosenURI = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_link_http_common__["f" /* selectURI */])(operation, uri);
        var context = operation.getContext();
        var contextConfig = {
            http: context.http,
            options: context.fetchOptions,
            credentials: context.credentials,
            headers: context.headers,
        };
        var _a = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_link_http_common__["e" /* selectHttpOptionsAndBody */])(operation, __WEBPACK_IMPORTED_MODULE_1_apollo_link_http_common__["c" /* fallbackHttpConfig */], linkConfig, contextConfig), options = _a.options, body = _a.body;
        var _b = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_link_http_common__["b" /* createSignalIfSupported */])(), controller = _b.controller, signal = _b.signal;
        if (controller)
            options.signal = signal;
        var definitionIsMutation = function (d) {
            return d.kind === 'OperationDefinition' && d.operation === 'mutation';
        };
        if (useGETForQueries &&
            !operation.query.definitions.some(definitionIsMutation)) {
            options.method = 'GET';
        }
        if (options.method === 'GET') {
            var _c = rewriteURIForGET(chosenURI, body), newURI = _c.newURI, parseError = _c.parseError;
            if (parseError) {
                return Object(__WEBPACK_IMPORTED_MODULE_0_apollo_link__["e" /* fromError */])(parseError);
            }
            chosenURI = newURI;
        }
        else {
            try {
                options.body = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_link_http_common__["g" /* serializeFetchParameter */])(body, 'Payload');
            }
            catch (parseError) {
                return Object(__WEBPACK_IMPORTED_MODULE_0_apollo_link__["e" /* fromError */])(parseError);
            }
        }
        return new __WEBPACK_IMPORTED_MODULE_0_apollo_link__["b" /* Observable */](function (observer) {
            fetcher(chosenURI, options)
                .then(function (response) {
                operation.setContext({ response: response });
                return response;
            })
                .then(Object(__WEBPACK_IMPORTED_MODULE_1_apollo_link_http_common__["d" /* parseAndCheckHttpResponse */])(operation))
                .then(function (result) {
                observer.next(result);
                observer.complete();
                return result;
            })
                .catch(function (err) {
                if (err.name === 'AbortError')
                    return;
                if (err.result && err.result.errors && err.result.data) {
                    observer.next(err.result);
                }
                observer.error(err);
            });
            return function () {
                if (controller)
                    controller.abort();
            };
        });
    });
};
function rewriteURIForGET(chosenURI, body) {
    var queryParams = [];
    var addQueryParam = function (key, value) {
        queryParams.push(key + "=" + encodeURIComponent(value));
    };
    if ('query' in body) {
        addQueryParam('query', body.query);
    }
    if (body.operationName) {
        addQueryParam('operationName', body.operationName);
    }
    if (body.variables) {
        var serializedVariables = void 0;
        try {
            serializedVariables = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_link_http_common__["g" /* serializeFetchParameter */])(body.variables, 'Variables map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('variables', serializedVariables);
    }
    if (body.extensions) {
        var serializedExtensions = void 0;
        try {
            serializedExtensions = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_link_http_common__["g" /* serializeFetchParameter */])(body.extensions, 'Extensions map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('extensions', serializedExtensions);
    }
    var fragment = '', preFragment = chosenURI;
    var fragmentStart = chosenURI.indexOf('#');
    if (fragmentStart !== -1) {
        fragment = chosenURI.substr(fragmentStart);
        preFragment = chosenURI.substr(0, fragmentStart);
    }
    var queryParamsPrefix = preFragment.indexOf('?') === -1 ? '?' : '&';
    var newURI = preFragment + queryParamsPrefix + queryParams.join('&') + fragment;
    return { newURI: newURI };
}
var HttpLink = (function (_super) {
    __extends(HttpLink, _super);
    function HttpLink(opts) {
        return _super.call(this, createHttpLink(opts).request) || this;
    }
    return HttpLink;
}(__WEBPACK_IMPORTED_MODULE_0_apollo_link__["a" /* ApolloLink */]));

//# sourceMappingURL=httpLink.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fallbackHttpConfig; });
/* unused harmony export throwServerError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return parseAndCheckHttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkFetcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createSignalIfSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return selectHttpOptionsAndBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return serializeFetchParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return selectURI; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_language_printer__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_language_printer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_language_printer__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false,
};
var defaultHeaders = {
    accept: '*/*',
    'content-type': 'application/json',
};
var defaultOptions = {
    method: 'POST',
};
var fallbackHttpConfig = {
    http: defaultHttpOptions,
    headers: defaultHeaders,
    options: defaultOptions,
};
var throwServerError = function (response, result, message) {
    var error = new Error(message);
    error.response = response;
    error.statusCode = response.status;
    error.result = result;
    throw error;
};
var parseAndCheckHttpResponse = function (operations) { return function (response) {
    return (response
        .text()
        .then(function (bodyText) {
        try {
            return JSON.parse(bodyText);
        }
        catch (err) {
            var parseError = err;
            parseError.response = response;
            parseError.statusCode = response.status;
            parseError.bodyText = bodyText;
            return Promise.reject(parseError);
        }
    })
        .then(function (result) {
        if (response.status >= 300) {
            throwServerError(response, result, "Response not successful: Received status code " + response.status);
        }
        if (!Array.isArray(result) &&
            !result.hasOwnProperty('data') &&
            !result.hasOwnProperty('errors')) {
            throwServerError(response, result, "Server response was missing for query '" + (Array.isArray(operations)
                ? operations.map(function (op) { return op.operationName; })
                : operations.operationName) + "'.");
        }
        return result;
    }));
}; };
var checkFetcher = function (fetcher) {
    if (!fetcher && typeof fetch === 'undefined') {
        var library = 'unfetch';
        if (typeof window === 'undefined')
            library = 'node-fetch';
        throw new Error("\nfetch is not found globally and no fetcher passed, to fix pass a fetch for\nyour environment like https://www.npmjs.com/package/" + library + ".\n\nFor example:\nimport fetch from '" + library + "';\nimport { createHttpLink } from 'apollo-link-http';\n\nconst link = createHttpLink({ uri: '/graphql', fetch: fetch });");
    }
};
var createSignalIfSupported = function () {
    if (typeof AbortController === 'undefined')
        return { controller: false, signal: false };
    var controller = new AbortController();
    var signal = controller.signal;
    return { controller: controller, signal: signal };
};
var selectHttpOptionsAndBody = function (operation, fallbackConfig) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    var options = __assign({}, fallbackConfig.options, { headers: fallbackConfig.headers, credentials: fallbackConfig.credentials });
    var http = fallbackConfig.http;
    configs.forEach(function (config) {
        options = __assign({}, options, config.options, { headers: __assign({}, options.headers, config.headers) });
        if (config.credentials)
            options.credentials = config.credentials;
        http = __assign({}, http, config.http);
    });
    var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
    var body = { operationName: operationName, variables: variables };
    if (http.includeExtensions)
        body.extensions = extensions;
    if (http.includeQuery)
        body.query = Object(__WEBPACK_IMPORTED_MODULE_0_graphql_language_printer__["print"])(query);
    return {
        options: options,
        body: body,
    };
};
var serializeFetchParameter = function (p, label) {
    var serialized;
    try {
        serialized = JSON.stringify(p);
    }
    catch (e) {
        var parseError = new Error("Network request failed. " + label + " is not serializable: " + e.message);
        parseError.parseError = e;
        throw parseError;
    }
    return serialized;
};
var selectURI = function (operation, fallbackURI) {
    var context = operation.getContext();
    var contextURI = context.uri;
    if (contextURI) {
        return contextURI;
    }
    else if (typeof fallbackURI === 'function') {
        return fallbackURI(operation);
    }
    else {
        return fallbackURI || '/graphql';
    }
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onError; });
/* unused harmony export ErrorLink */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_link__ = __webpack_require__(58);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var onError = function (errorHandler) {
    return new __WEBPACK_IMPORTED_MODULE_0_apollo_link__["a" /* ApolloLink */](function (operation, forward) {
        return new __WEBPACK_IMPORTED_MODULE_0_apollo_link__["b" /* Observable */](function (observer) {
            var sub;
            try {
                sub = forward(operation).subscribe({
                    next: function (result) {
                        if (result.errors) {
                            errorHandler({
                                graphQLErrors: result.errors,
                                response: result,
                                operation: operation,
                            });
                        }
                        observer.next(result);
                    },
                    error: function (networkError) {
                        errorHandler({
                            operation: operation,
                            networkError: networkError,
                            graphQLErrors: networkError.result && networkError.result.errors,
                        });
                        observer.error(networkError);
                    },
                    complete: observer.complete.bind(observer),
                });
            }
            catch (e) {
                errorHandler({ networkError: e, operation: operation });
                observer.error(e);
            }
            return function () {
                if (sub)
                    sub.unsubscribe();
            };
        });
    });
};
var ErrorLink = (function (_super) {
    __extends(ErrorLink, _super);
    function ErrorLink(errorHandler) {
        var _this = _super.call(this) || this;
        _this.link = onError(errorHandler);
        return _this;
    }
    ErrorLink.prototype.request = function (operation, forward) {
        return this.link.request(operation, forward);
    };
    return ErrorLink;
}(__WEBPACK_IMPORTED_MODULE_0_apollo_link__["a" /* ApolloLink */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appConfig; });
var appConfig = {
  // apollo client:
  apollo: {
    networkInterface: 'https://us-west-2.api.scaphold.io/graphql/juicy-sky'

  }
};

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_navigation_json__ = __webpack_require__(820);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_navigation_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__models_navigation_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_modules_views__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__redux_modules_userAuth__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes_MainRoutes__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router_dom__ = __webpack_require__(49);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports










// #endregion

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
      navModel: __WEBPACK_IMPORTED_MODULE_3__models_navigation_json___default.a
    }, _this.handleLeftNavItemClick = function (event, viewName) {
      if (viewName === 'logout') {
        var setUserLogout = _this.props.actions.setUserLogout;

        setUserLogout();
      }
    }, _this.handleRightNavItemClick = function (event, viewName) {
      if (viewName === 'logout') {
        var setUserLogout = _this.props.actions.setUserLogout;

        setUserLogout();
      }
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
      var userIsAuthenticated = this.props.userIsAuthenticated;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'appContainer' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components__["c" /* NavigationBar */], {
          brand: navModel.brand,
          navModel: navModel,
          userIsAuthenticated: userIsAuthenticated,
          handleLeftNavItemClick: this.handleLeftNavItemClick,
          handleRightNavItemClick: this.handleRightNavItemClick
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h1', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container-fluid' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__routes_MainRoutes__["a" /* default */], null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components__["a" /* BackToTop */], { minScrollY: 40, scrollTo: 'appContainer' })
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

App.propTypes = {
  // react-router 4:
  match: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,

  // userAuth
  userIsAuthenticated: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    // userAuth:
    userIsAuthenticated: state.userAuth.isAuthenticated
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(__WEBPACK_IMPORTED_MODULE_4_redux__["bindActionCreators"])(_extends({}, __WEBPACK_IMPORTED_MODULE_6__redux_modules_views__, __WEBPACK_IMPORTED_MODULE_7__redux_modules_userAuth__), dispatch)
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_9_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(App)));

/***/ }),

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__humburger_Humburger__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__leftNav_LeftNav__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rightNav_RightNav__ = __webpack_require__(805);


// #region imports





// #endregion

// #region flow types

// #endregion

var NavigationBar = function NavigationBar(_ref) {
  var brand = _ref.brand,
      navModel = _ref.navModel,
      handleLeftNavItemClick = _ref.handleLeftNavItemClick,
      handleRightNavItemClick = _ref.handleRightNavItemClick,
      userIsAuthenticated = _ref.userIsAuthenticated;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'nav',
    { className: 'navbar navbar-default' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'containersCustom' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'navbar-header' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__humburger_Humburger__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'navbar-brand' },
          brand
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          className: 'collapse navbar-collapse',
          id: 'bs-example-navbar-collapse-1'
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'nav navbar-nav' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__leftNav_LeftNav__["a" /* default */], {
            leftLinks: navModel.leftLinks,
            onLeftNavButtonClick: handleLeftNavItemClick,
            userIsAuthenticated: userIsAuthenticated
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          { className: 'nav navbar-nav navbar-right' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__rightNav_RightNav__["a" /* default */], {
            rightLinks: navModel.rightLinks,
            onRightNavButtonClick: handleRightNavItemClick,
            userIsAuthenticated: userIsAuthenticated
          })
        )
      )
    )
  );
};

// #region static props
NavigationBar.propTypes = {
  brand: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  userIsAuthenticated: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  handleLeftNavItemClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  handleRightNavItemClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  navModel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    leftLinks: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      label: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
      link: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
    })).isRequired,
    rightLinks: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
      label: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
      link: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
    })).isRequired
  })
};

NavigationBar.defaultProps = {
  brand: 'brand'
};

NavigationBar.displayName = 'NavigationBar';
// #endregion

/* harmony default export */ __webpack_exports__["a"] = (NavigationBar);

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


// #region imports

// #endregion

// #region flow types

// #endregion

var Humburger = function Humburger() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "button",
    {
      className: "navbar-toggle collapsed",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#bs-example-navbar-collapse-1"
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "span",
      { className: "sr-only" },
      "Toggle navigation"
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "icon-bar" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "icon-bar" }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "icon-bar" })
  );
};

// #region static props
Humburger.displayName = 'Humburger';
// #endregion

/* harmony default export */ __webpack_exports__["a"] = (Humburger);

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__leftNavButton_LeftNavButton__ = __webpack_require__(804);


// #region imports


// #endregion

// #region flow types

// #endregion

var LeftNav = function LeftNav(_ref) {
  var leftLinks = _ref.leftLinks,
      onLeftNavButtonClick = _ref.onLeftNavButtonClick;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: 'nav navbar-nav' },
    leftLinks.map(function (_ref2, index) {
      var link = _ref2.link,
          label = _ref2.label,
          viewName = _ref2.viewName;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__leftNavButton_LeftNavButton__["a" /* default */], {
        key: index,
        link: link,
        label: label,
        viewName: viewName,
        onClick: onLeftNavButtonClick
      });
    })
  );
};

// #region static props
LeftNav.displayName = 'LeftNav';
// #endregion

/* harmony default export */ __webpack_exports__["a"] = (LeftNav);

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(49);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports


// #endregion

// #region flow types

// #endregion

var LeftNavButton = function (_PureComponent) {
  _inherits(LeftNavButton, _PureComponent);

  function LeftNavButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LeftNavButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LeftNavButton.__proto__ || Object.getPrototypeOf(LeftNavButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleLeftNavItemClick = function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          viewName = _this$props.viewName;

      onClick(event, viewName);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LeftNavButton, [{
    key: 'render',

    // #region lifecycle

    // #endregion
    value: function render() {
      var _props = this.props,
          link = _props.link,
          label = _props.label;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
          { to: link, onClick: this.handleLeftNavItemClick },
          label
        )
      );
    }
    // #endregion

    // #region on Link click event

  }]);

  return LeftNavButton;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (LeftNavButton);

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rightNavButton_RightNavButton__ = __webpack_require__(806);


// #region imports



// #endregion

// #region flow types

// #endregion

var RightNav = function RightNav(_ref) {
  var rightLinks = _ref.rightLinks,
      onRightNavButtonClick = _ref.onRightNavButtonClick,
      userIsAuthenticated = _ref.userIsAuthenticated;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: 'nav navbar-nav navbar-right' },
    userIsAuthenticated ? rightLinks.filter(function (btnLink) {
      return btnLink.showWhenUserAuth === true;
    }).map(function (aLinkBtn, index) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__rightNavButton_RightNavButton__["a" /* default */], {
        key: index,
        link: aLinkBtn.link,
        label: aLinkBtn.label,
        viewName: aLinkBtn.view,
        onClick: onRightNavButtonClick
      });
    }) : rightLinks.filter(function (btnLink) {
      return btnLink.showWhenUserAuth === false || btnLink.alwaysShows === true;
    }).map(function (aLinkBtn, index) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__rightNavButton_RightNavButton__["a" /* default */], {
        key: index,
        link: aLinkBtn.link,
        label: aLinkBtn.label,
        viewName: aLinkBtn.view,
        onClick: onRightNavButtonClick
      });
    })
  );
};

// #region static props
RightNav.propTypes = {
  rightLinks: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    link: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    label: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
    viewName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
  })),
  onRightNavButtonClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  userIsAuthenticated: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
};

RightNav.displayName = 'RightNav';
// #endregion

/* harmony default export */ __webpack_exports__["a"] = (RightNav);

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(49);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports



// #endregion

// #region flow types

// #endregion

var RightNavButton = function (_PureComponent) {
  _inherits(RightNavButton, _PureComponent);

  function RightNavButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RightNavButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RightNavButton.__proto__ || Object.getPrototypeOf(RightNavButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleRightNavItemClick = function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          viewName = _this$props.viewName;

      onClick(event, viewName);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RightNavButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          link = _props.link,
          label = _props.label;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
          { to: link, onClick: this.handleRightNavItemClick },
          label
        )
      );
    }
  }]);

  return RightNavButton;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (RightNavButton);

/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backToTopButton_BackToTopButton__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_motion__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_motion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_motion__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports



// #endregion

// #region flow types

// #endregion

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
      showBackButton: false,
      tickingScrollObserve: false
    }, _this.handleWindowScroll = function () {
      if (window) {
        var _this$state = _this.state,
            _windowScrollY = _this$state.windowScrollY,
            _tickingScrollObserve = _this$state.tickingScrollObserve;
        var _minScrollY = _this.props.minScrollY;

        /* eslint-disable no-undefined */

        var currentWindowScrollY = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scollTop;
        /* eslint-enable no-undefined */

        if (!_tickingScrollObserve) {
          window.requestAnimationFrame(function () {
            if (_windowScrollY !== currentWindowScrollY) {
              var shouldShowBackButton = currentWindowScrollY >= _minScrollY ? true : false;

              _this.setState({
                windowScrollY: currentWindowScrollY,
                showBackButton: shouldShowBackButton
              });
            }
            _this.setState({ tickingScrollObserve: false });
          });
        }
        _this.setState({ tickingScrollObserve: true });
      }
    }, _this.handlesOnBackButtonClick = function (event) {
      if (event) {
        event.preventDefault();
      }
      var minScrollY = _this.props.minScrollY;
      var windowScrollY = _this.state.windowScrollY;


      if (window && windowScrollY && windowScrollY > minScrollY) {
        // using here smoothscroll-polyfill
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        // smoothScroll.scrollTo(scrollTo, this.scrollDone);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BackToTop, [{
    key: 'componentWillMount',


    // #region lifecycle
    value: function componentWillMount() {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', this.handleWindowScroll);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', this.handleWindowScroll);
      }
    }
  }, {
    key: 'render',

    // #endregion
    value: function render() {
      var _this2 = this;

      var showBackButton = this.state.showBackButton;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_motion__["Motion"],
        {
          style: {
            interpolatedX: Object(__WEBPACK_IMPORTED_MODULE_2_react_motion__["spring"])(showBackButton ? 0 : 120, __WEBPACK_IMPORTED_MODULE_2_react_motion__["presets"].stiff)
          }
        },
        function (_ref2) {
          var interpolatedX = _ref2.interpolatedX;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__backToTopButton_BackToTopButton__["a" /* default */], {
            position: 'bottom-right',
            onClick: _this2.handlesOnBackButtonClick,
            motionStyle: {
              WebkitTransform: 'translate3d(' + interpolatedX + 'px, 0, 0)',
              transform: 'translate3d(' + interpolatedX + 'px, 0, 0)'
            }
          });
        }
      );
    }
    // #endregion

    // #region on window scroll callback

    // #endregion

    // #region on button click (smooth scroll)

  }]);

  return BackToTop;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

BackToTop.defaultProps = {
  minScrollY: 120
};


/* harmony default export */ __webpack_exports__["a"] = (BackToTop);

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UpIcon__ = __webpack_require__(809);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// #region imports



// #endregion

// #region flow types

// #endregion

// #region constants
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
// #endregion

var BackToTopButton = function BackToTopButton(_ref) {
  var onClick = _ref.onClick,
      position = _ref.position,
      children = _ref.children,
      motionStyle = _ref.motionStyle;

  var buttonStyle = setPosition(position, _extends({}, motionStyle, defaultStyle));

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'button',
    { style: buttonStyle, className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()({ btn: true }), onClick: onClick },
    !children && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { style: { marginRight: '10px' } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__UpIcon__["a" /* default */], { color: '#F1F1F1' })
    ),
    !!children && children
  );
};

// #region static props
BackToTopButton.defaultProps = {
  position: 'bottom-right'
};

BackToTopButton.displayName = 'BackToTopButton';
// #endregion

// #region helper
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
// #endregion

/* harmony default export */ __webpack_exports__["a"] = (BackToTopButton);

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


// #region imports

// #endregion

// #region flow types

// #endregion

var UpIcon = function UpIcon(_ref) {
  var color = _ref.color;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    { width: "24px", height: "24px", viewBox: "0 0 512 512", fill: "" + color },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1 c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z" })
  );
};

// #region static props
UpIcon.defaultProps = {
  color: '#F1F1F1'
};

UpIcon.displayName = 'UpIcon';
// #endregion

/* harmony default export */ __webpack_exports__["a"] = (UpIcon);

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_motion__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports


// #endregion

// #region flow types

// #endregion

var ErrorAlert = function (_PureComponent) {
  _inherits(ErrorAlert, _PureComponent);

  function ErrorAlert() {
    _classCallCheck(this, ErrorAlert);

    return _possibleConstructorReturn(this, (ErrorAlert.__proto__ || Object.getPrototypeOf(ErrorAlert)).apply(this, arguments));
  }

  _createClass(ErrorAlert, [{
    key: 'render',


    // #region lifecycle methods
    value: function render() {
      var _props = this.props,
          showAlert = _props.showAlert,
          errorTitle = _props.errorTitle,
          errorMessage = _props.errorMessage,
          onClose = _props.onClose;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_motion__["Motion"],
        {
          style: {
            interpolatedScale: Object(__WEBPACK_IMPORTED_MODULE_1_react_motion__["spring"])(showAlert ? 1 : 0, __WEBPACK_IMPORTED_MODULE_1_react_motion__["presets"].stiff)
          }
        },
        function (_ref) {
          var interpolatedScale = _ref.interpolatedScale;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              className: 'alert alert-dismissible alert-danger',
              style: {
                WebkitTransform: 'scale(' + interpolatedScale + ')',
                transform: 'scale(' + interpolatedScale + ')'
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { type: 'button', className: 'close', onClick: onClose },
              '\xD7'
            ),
            errorTitle && errorTitle.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              errorTitle
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              errorMessage
            )
          );
        }
      );
    }
    // #endregion

  }]);

  return ErrorAlert;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

ErrorAlert.defaultProps = {
  showAlert: false
};


/* harmony default export */ __webpack_exports__["a"] = (ErrorAlert);

/***/ }),

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_motion__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports


// #endregion

// #region flow types

// #endregion

var WarningAlert = function (_PureComponent) {
  _inherits(WarningAlert, _PureComponent);

  function WarningAlert() {
    _classCallCheck(this, WarningAlert);

    return _possibleConstructorReturn(this, (WarningAlert.__proto__ || Object.getPrototypeOf(WarningAlert)).apply(this, arguments));
  }

  _createClass(WarningAlert, [{
    key: 'render',


    // #region lifecycle methods
    value: function render() {
      var _props = this.props,
          showAlert = _props.showAlert,
          warningTitle = _props.warningTitle,
          warningMessage = _props.warningMessage,
          onClose = _props.onClose;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_motion__["Motion"],
        {
          style: {
            interpolatedScale: Object(__WEBPACK_IMPORTED_MODULE_1_react_motion__["spring"])(showAlert ? 1 : 0, __WEBPACK_IMPORTED_MODULE_1_react_motion__["presets"].stiff)
          }
        },
        function (_ref) {
          var interpolatedScale = _ref.interpolatedScale;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              className: 'alert alert-dismissible alert-warning',
              style: {
                WebkitTransform: 'scale(' + interpolatedScale + ')',
                transform: 'scale(' + interpolatedScale + ')'
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { type: 'button', className: 'close', onClick: onClose },
              '\xD7'
            ),
            warningTitle && warningTitle.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              warningTitle
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              warningMessage
            )
          );
        }
      );
    }
    // #endregion

  }]);

  return WarningAlert;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

WarningAlert.defaultProps = {
  showAlert: false
};


/* harmony default export */ __webpack_exports__["a"] = (WarningAlert);

/***/ }),

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_motion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_motion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports



// #endregion

// #region flow types

// #endregion

var Alert = function (_PureComponent) {
  _inherits(Alert, _PureComponent);

  function Alert() {
    _classCallCheck(this, Alert);

    return _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).apply(this, arguments));
  }

  _createClass(Alert, [{
    key: 'render',


    // #region lifecycle methods
    value: function render() {
      var _props = this.props,
          type = _props.type,
          showAlert = _props.showAlert,
          errorTitle = _props.errorTitle,
          errorMessage = _props.errorMessage,
          onClose = _props.onClose;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_motion__["Motion"],
        {
          style: {
            interpolatedScale: Object(__WEBPACK_IMPORTED_MODULE_1_react_motion__["spring"])(showAlert ? 1 : 0, __WEBPACK_IMPORTED_MODULE_1_react_motion__["presets"].stiff)
          }
        },
        function (_ref) {
          var interpolatedScale = _ref.interpolatedScale;
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({
                alert: true,
                'alert-dismissible': true,
                'alert-danger': type === 'error',
                'alert-warning': type === 'warning'
              }),
              style: {
                WebkitTransform: 'scale(' + interpolatedScale + ')',
                transform: 'scale(' + interpolatedScale + ')'
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { type: 'button', className: 'close', onClick: onClose },
              '\xD7'
            ),
            errorTitle && errorTitle.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'strong',
              null,
              errorTitle
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              null,
              errorMessage
            )
          );
        }
      );
    }
    // #endregion

  }]);

  return Alert;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

Alert.defaultProps = {
  showAlert: false,
  type: 'warning'
};


/* unused harmony default export */ var _unused_webpack_default_export = (Alert);

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = {"brand":"React Redux Bootstrap Starter","leftLinks":[],"rightLinks":[{"label":"Home","link":"/","view":"home","isRouteBtn":true,"alwaysShows":true,"showWhenUserAuth":true,"hideWhenUserAuth":false},{"label":"Login","link":"/login","view":"login","isRouteBtn":true,"alwaysShows":false,"showWhenUserAuth":false,"hideWhenUserAuth":true},{"label":"Register","link":"/register","view":"register","isRouteBtn":true,"alwaysShows":false,"showWhenUserAuth":false,"hideWhenUserAuth":true},{"label":"Logout","link":"/logout","view":"logout","isRouteBtn":true,"alwaysShows":false,"showWhenUserAuth":true,"hideWhenUserAuth":false},{"label":"About","link":"/about","view":"about","isRouteBtn":true,"alwaysShows":true,"showWhenUserAuth":true,"hideWhenUserAuth":false},{"label":"Protected","link":"/protected","view":"protected","isRouteBtn":true,"alwaysShows":true,"showWhenUserAuth":true,"hideWhenUserAuth":false}]}

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MainRoutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_home__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_about__ = __webpack_require__(836);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_register__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_protected__ = __webpack_require__(842);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_privateRoute_PrivateRoute__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_pageNotFound__ = __webpack_require__(430);


// #region imports








// #endregion

var MainRoutes = function MainRoutes() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_router__["Switch"],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_2__views_home__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/about', component: __WEBPACK_IMPORTED_MODULE_3__views_about__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/register', component: __WEBPACK_IMPORTED_MODULE_4__views_register__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_privateRoute_PrivateRoute__["a" /* default */], { path: '/protected', component: __WEBPACK_IMPORTED_MODULE_5__views_protected__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '*', component: __WEBPACK_IMPORTED_MODULE_7__views_pageNotFound__["a" /* default */] })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (MainRoutes);

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose_compose__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_modules_views__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Home__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hoc_withEnterAnimation__ = __webpack_require__(86);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  query GetUser($user: ID!) {\n    getUser(id: $user) {\n      id\n      username\n      createdAt\n      modifiedAt\n      lastLogin\n    }\n    getRole(id: $user) {\n      id\n      name\n      createdAt\n    }\n  }\n'], ['\n  query GetUser($user: ID!) {\n    getUser(id: $user) {\n      id\n      username\n      createdAt\n      modifiedAt\n      lastLogin\n    }\n    getRole(id: $user) {\n      id\n      name\n      createdAt\n    }\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// #region imports








// #endregion

// #region Redux
var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView,
    userAuth: state.userAuth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])(_extends({}, __WEBPACK_IMPORTED_MODULE_5__redux_modules_views__), dispatch);
};
// #endregion

// #region  GraphQL - Apollo client

// #region getUser query
var getUserQuery = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject);

var getUserQueryOptions = {
  options: function options(_ref) {
    var userAuth = _ref.userAuth;
    return {
      variables: {
        user: userAuth.id ? userAuth.id : ''
      }
    };
  },
  skip: function skip(_ref2) {
    var isAuthenticated = _ref2.isAuthenticated;
    return !isAuthenticated;
  },
  name: 'getCurrentUser',
  props: function props(_ref3) {
    var ownProps = _ref3.ownProps,
        _ref3$getCurrentUser = _ref3.getCurrentUser,
        loading = _ref3$getCurrentUser.loading,
        getUser = _ref3$getCurrentUser.getUser,
        getRole = _ref3$getCurrentUser.getRole,
        refetch = _ref3$getCurrentUser.refetch;

    return {
      userLoading: loading,
      user: _extends({}, getRole, getUser),
      refetchUser: refetch
    };
  }
};
// #endregion

// #endregion

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_4_recompose_compose___default()(Object(__WEBPACK_IMPORTED_MODULE_7__hoc_withEnterAnimation__["a" /* default */])(), Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps), Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["graphql"])(getUserQuery, getUserQueryOptions))(__WEBPACK_IMPORTED_MODULE_6__Home__["a" /* default */]));

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_jumbotron_Jumbotron__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(49);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports



// import classnames from 'classnames';

// import styles from './home.scss';
// #endregion

// #region flow types

// #endregion

// #region constants
// IMPORTANT: we need to bind classnames to CSSModule generated classes:
// const cx = classnames.bind(styles);
// #endregion

var Home = function (_PureComponent) {
  _inherits(Home, _PureComponent);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'componentDidMount',

    // #region lifecycle
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { key: 'homeView' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__components_jumbotron_Jumbotron__["a" /* default */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            null,
            'Full ES2015 ReactJS + Redux + graphQL + Apollo + Bootstrap'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            null,
            'with Hot Reload!!!'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            null,
            'with React Router (SPA)'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            null,
            'Starter'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"],
              { className: 'btn btn-success btn-lg', to: '/about' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-info' }),
              '\xA0 go to about'
            )
          )
        )
      );
    }
    // #endregion

  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ 833:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose_wrapDisplayName__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose_wrapDisplayName___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose_wrapDisplayName__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports



// import styles from './withEnterAnimation.scss';
// #endregion

// #region constants
// IMPORTANT: we need to bind classnames to CSSModule generated classes:
// const cx = classnames.bind(styles);
// #endregion

function withEnterAnimation() {
  return function (BaseComponent) {
    var WithEnterAnimation = function (_Component) {
      _inherits(WithEnterAnimation, _Component);

      function WithEnterAnimation() {
        _classCallCheck(this, WithEnterAnimation);

        return _possibleConstructorReturn(this, (WithEnterAnimation.__proto__ || Object.getPrototypeOf(WithEnterAnimation)).apply(this, arguments));
      }

      _createClass(WithEnterAnimation, [{
        key: 'render',
        value: function render() {
          var passProps = _objectWithoutProperties(this.props, []);

          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()({ viewEnter: true }) },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BaseComponent, passProps)
          );
        }
      }]);

      return WithEnterAnimation;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    /* eslint-disable no-process-env */


    if (true) {
      // HOC would obfuscate component name, this trick is helpful for dev (we don't care in production)
      WithEnterAnimation.displayName = __WEBPACK_IMPORTED_MODULE_1_recompose_wrapDisplayName___default()(BaseComponent, 'withEnterAnimation');
    }
    /* eslint-enable no-process-env */

    return WithEnterAnimation;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (withEnterAnimation);

/***/ }),

/***/ 834:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getDisplayName = __webpack_require__(835);

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
};

exports.default = wrapDisplayName;

/***/ }),

/***/ 835:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

exports.default = getDisplayName;

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_compose__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_modules_views__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__About__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hoc_withEnterAnimation__ = __webpack_require__(86);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// #region imports






// #endregion

// #region Redux
var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])(_extends({}, __WEBPACK_IMPORTED_MODULE_3__redux_modules_views__), dispatch);
};
// #endregion

// #region apollo client

// #endregion

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_recompose_compose___default()(Object(__WEBPACK_IMPORTED_MODULE_5__hoc_withEnterAnimation__["a" /* default */])(), Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps))(__WEBPACK_IMPORTED_MODULE_4__About__["a" /* default */]));

/***/ }),

/***/ 837:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_scss__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__about_scss__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports




// #endregion

// #region flow types

// #endregion

// #region constants
// IMPORTANT: we need to bind classnames to CSSModule generated classes:
var cx = __WEBPACK_IMPORTED_MODULE_2_classnames___default.a.bind(__WEBPACK_IMPORTED_MODULE_3__about_scss___default.a);
// #endregion

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


    // #region lifecycle
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


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: cx({ 'view-enter': viewEntersAnim }) },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          'About'
        )
      );
    }
    // #endregion

  }]);

  return About;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

About.propTypes = {
  // react-router 4:
  match: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,

  // views
  currentView: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  enterAbout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  leaveAbout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (About);

/***/ }),

/***/ 838:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose_compose__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_modules_views__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_modules_userAuth__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Register__ = __webpack_require__(840);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hoc_withEnterAnimation__ = __webpack_require__(86);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  mutation CreateUser($user: CreateUserInput!) {\n    createUser(input: $user) {\n      token\n    }\n  }\n'], ['\n  mutation CreateUser($user: CreateUserInput!) {\n    createUser(input: $user) {\n      token\n    }\n  }\n']);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// #region imports









// #endregion

// #region  Redux
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
  return Object(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])(_extends({}, __WEBPACK_IMPORTED_MODULE_5__redux_modules_views__, __WEBPACK_IMPORTED_MODULE_6__redux_modules_userAuth__), dispatch);
};
// #endregion

// #region GraphQL - Apollo client

// #region create user mutation
var createUserMutation = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject);

var createUserMutationOptions = {
  props: function props(_ref) {
    var ownProps = _ref.ownProps,
        mutate = _ref.mutate;
    return {
      registerUser: function registerUser(user) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var payload, _ref2, token;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  ownProps.setLoadingStateForUserRegister();

                  _context.prev = 1;
                  payload = { variables: _extends({}, user) };
                  _context.next = 5;
                  return mutate(payload);

                case 5:
                  _ref2 = _context.sent;
                  token = _ref2.data.createUser.token;

                  ownProps.receivedUserRegister(token, user);
                  ownProps.unsetLoadingStateForUserRegister();
                  return _context.abrupt('return', Promise.resolve());

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context['catch'](1);

                  ownProps.errorUserRegister(_context.t0);
                  ownProps.unsetLoadingStateForUserRegister();
                  return _context.abrupt('return', Promise.reject(_context.t0));

                case 17:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this, [[1, 12]]);
        }))();
      }
    };
  }
};
// #endregion

// #endregion

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_4_recompose_compose___default()(Object(__WEBPACK_IMPORTED_MODULE_8__hoc_withEnterAnimation__["a" /* default */])(), Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps), Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["graphql"])(createUserMutation, createUserMutationOptions))(__WEBPACK_IMPORTED_MODULE_7__Register__["a" /* default */]));

/***/ }),

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_scss__ = __webpack_require__(841);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__register_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_modules_userAuth_types__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_modules_userAuth_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__redux_modules_userAuth_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports







// #endregion

// #region flow types

// #endregion

// #region constants
// IMPORTANT: we need to bind classnames to CSSModule generated classes:
var cx = __WEBPACK_IMPORTED_MODULE_1_classnames___default.a.bind(__WEBPACK_IMPORTED_MODULE_4__register_scss___default.a);
// #endregion

var Register = function (_PureComponent) {
  _inherits(Register, _PureComponent);

  function Register() {
    var _ref,
        _this2 = this;

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
    }, _this.handlesOnEmailChange = function (event) {
      event.preventDefault();
      // should add some validator before setState in real use cases
      var email = event.target.value;
      _this.setState({ email: email });
    }, _this.handlesOnPasswordChange = function (event) {
      event.preventDefault();
      // should add some validator before setState in real use cases
      _this.setState({ password: event.target.value });
    }, _this.handlesOnRegister = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var _this$props, registerUser, history, _this$state, email, password, user;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this$props = _this.props, registerUser = _this$props.registerUser, history = _this$props.history;
                _this$state = _this.state, email = _this$state.email, password = _this$state.password;
                user = {
                  username: email,
                  password: password
                };

                // const { resetStore } = this.props;
                // resetStore();

                _this.setState({ warning: null });

                if (_this.isValidEmail(email)) {
                  _context.next = 8;
                  break;
                }

                _this.setState({ warning: { message: 'Email is not valid.' } });
                return _context.abrupt('return');

              case 8:
                if (_this.isValidPassword(password)) {
                  _context.next = 11;
                  break;
                }

                _this.setState({
                  warning: { message: 'Password is empty or not valid.' }
                });
                return _context.abrupt('return');

              case 11:
                _context.prev = 11;
                _context.next = 14;
                return registerUser({ user: user });

              case 14:
                history.push({ pathname: '/protected' });
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context['catch'](11);

                console.log('register user went wrong..., error: ', _context.t0);

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[11, 17]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.closeError = function (event) {
      event.preventDefault();
      // const { resetStore } = this.props;
      // resetStore();
    }, _this.closeWarning = function (event) {
      event.preventDefault();
      _this.setState({ warning: null });
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


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: cx({ 'view-enter': viewEntersAnim }) },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'row' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'col-md-4 col-md-offset-4' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'form',
              { className: 'form-horizontal', noValidate: true },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'fieldset',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'legend',
                  null,
                  'Register'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'form-group' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      htmlFor: 'inputEmail',
                      className: 'col-lg-2 control-label'
                    },
                    'Email'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'col-lg-10' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                      type: 'text',
                      className: 'form-control',
                      id: 'inputEmail',
                      placeholder: 'Email',
                      value: email,
                      onChange: this.handlesOnEmailChange
                    })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'form-group' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      htmlFor: 'inputPassword',
                      className: 'col-lg-2 control-label'
                    },
                    'Password'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'col-lg-10' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                      type: 'password',
                      className: 'form-control',
                      id: 'inputPassword',
                      placeholder: 'Password',
                      value: password,
                      onChange: this.handlesOnPasswordChange
                    })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'form-group' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'col-lg-10 col-lg-offset-2' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
                      { className: 'btn btn-default', to: '/' },
                      'Cancel'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'button',
                      {
                        className: 'btn btn-primary registerButton',
                        disabled: mutationLoading,
                        onClick: this.handlesOnRegister
                      },
                      'Register'
                    )
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { style: { height: '150px' } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components__["d" /* WarningAlert */], {
                showAlert: !!warning,
                warningTitle: 'Warning',
                warningMessage: warning ? warning.message : '',
                onClose: this.closeWarning
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components__["b" /* ErrorAlert */], {
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
  }]);

  return Register;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (Register);

/***/ }),

/***/ 841:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_compose__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hoc_withEnterAnimation__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_modules_views__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Protected__ = __webpack_require__(843);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// #region imports






// #endregion

// #region Redux
var mapStateToProps = function mapStateToProps(state) {
  return {
    currentView: state.views.currentView
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])(_extends({}, __WEBPACK_IMPORTED_MODULE_4__redux_modules_views__), dispatch);
};
// #endregion

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_recompose_compose___default()(Object(__WEBPACK_IMPORTED_MODULE_3__hoc_withEnterAnimation__["a" /* default */])(), Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps))(__WEBPACK_IMPORTED_MODULE_5__Protected__["a" /* default */]));

/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__protected_scss__ = __webpack_require__(844);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__protected_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__protected_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(50);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable quotes */

// #region imports




// #endregion

// #region flow types

// #endregion

// #region constants
// IMPORTANT: we need to bind classnames to CSSModule generated classes:
var cx = __WEBPACK_IMPORTED_MODULE_1_classnames___default.a.bind(__WEBPACK_IMPORTED_MODULE_2__protected_scss___default.a);
// #endregion

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


    // #region lifecycle
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

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: cx({ 'view-enter': viewEntersAnim }) },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'text-danger' },
          'Here is a protected view!'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { className: 'text-danger' },
          'You\'ve just logged in to be able to enter this view.'
        )
      );
    }
    // #endregion

  }]);

  return Protected;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (Protected);

/***/ }),

/***/ 844:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth__ = __webpack_require__(181);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports




// #endregion

// #region flow types

// #ednregino

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
          BaseComponent = _props.component,
          rest = _objectWithoutProperties(_props, ['component']);

      var location = this.props.location;


      var isUserAuthenticated = this.isAuthenticated();
      var isTokenExpired = this.isExpired();

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Route"], _extends({}, rest, {
        render: function render(props) {
          return !isTokenExpired && isUserAuthenticated ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BaseComponent, props) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Redirect"], { to: { pathname: '/login', state: { from: location } } });
        }
      }));
    }
  }, {
    key: 'isAuthenticated',
    value: function isAuthenticated() {
      var checkUserHasId = function checkUserHasId(user) {
        return user && user.id && user.id.length > 0;
      };
      var user = __WEBPACK_IMPORTED_MODULE_3__services_auth__["b" /* default */].getUserInfo() ? __WEBPACK_IMPORTED_MODULE_3__services_auth__["b" /* default */].getUserInfo() : null;
      var isAuthenticated = __WEBPACK_IMPORTED_MODULE_3__services_auth__["b" /* default */].getToken() && checkUserHasId(user) ? true : false;

      return isAuthenticated;
    }
  }, {
    key: 'isExpired',
    value: function isExpired() {
      return __WEBPACK_IMPORTED_MODULE_3__services_auth__["b" /* default */].isExpiredToken(__WEBPACK_IMPORTED_MODULE_3__services_auth__["b" /* default */].getToken());
    }
  }]);

  return PrivateRoute;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

PrivateRoute.propTypes = {
  // react-router 4:
  match: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,

  component: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any.isRequired,
  path: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["withRouter"])(PrivateRoute));

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_jumbotron_Jumbotron__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(50);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports




// import classnames from 'classnames';
// import styles from './pageNotFound.scss';
// #endregion

// #region flow types

// #endregion

// #region constants
// IMPORTANT: we need to bind classnames to CSSModule generated classes:
// const cx = classnames.bind(styles);
// #endregion

var PageNotFound = function (_PureComponent) {
  _inherits(PageNotFound, _PureComponent);

  function PageNotFound() {
    _classCallCheck(this, PageNotFound);

    return _possibleConstructorReturn(this, (PageNotFound.__proto__ || Object.getPrototypeOf(PageNotFound)).apply(this, arguments));
  }

  _createClass(PageNotFound, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__components_jumbotron_Jumbotron__["a" /* default */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            null,
            'Sorry this page does not exists...'
          )
        )
      );
    }
  }]);

  return PageNotFound;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

PageNotFound.propTypes = {
  // react-router 4:
  match: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (PageNotFound);

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(50);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports



// #endregion

// #region flow types

// #endregion

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


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        children
      );
    }
  }]);

  return ScrollToTop;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ScrollToTop.propTypes = {
  // react-router 4:
  match: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,

  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_router__["withRouter"])(ScrollToTop));

/***/ }),

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose_compose__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_modules_views__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_modules_userAuth__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Login__ = __webpack_require__(849);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hoc_withEnterAnimation__ = __webpack_require__(86);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  mutation LoginUser($user: LoginUserInput!) {\n    loginUser(input: $user) {\n      token\n      user {\n        id\n        username\n        createdAt\n        modifiedAt\n        lastLogin\n      }\n    }\n  }\n'], ['\n  mutation LoginUser($user: LoginUserInput!) {\n    loginUser(input: $user) {\n      token\n      user {\n        id\n        username\n        createdAt\n        modifiedAt\n        lastLogin\n      }\n    }\n  }\n']);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// #region imports









// #endregion

// #region Redux
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
  return Object(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])(_extends({}, __WEBPACK_IMPORTED_MODULE_5__redux_modules_views__, __WEBPACK_IMPORTED_MODULE_6__redux_modules_userAuth__), dispatch);
};
// #endregion

// #region  GraphQL - Apollo client

// #region login user muation
var logUserMutation = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject);

var logUserMutationOptions = {
  props: function props(_ref) {
    var ownProps = _ref.ownProps,
        mutate = _ref.mutate;
    return {
      loginUser: function loginUser(user) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var payload, _ref2, loginUser;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  ownProps.setLoadingStateForUserLogin();
                  _context.prev = 1;
                  payload = { variables: { user: user } };
                  _context.next = 5;
                  return mutate(payload);

                case 5:
                  _ref2 = _context.sent;
                  loginUser = _ref2.data.loginUser;

                  ownProps.receivedUserLoggedIn(loginUser.token, loginUser.user);
                  ownProps.unsetLoadingStateForUserLogin();
                  return _context.abrupt('return', Promise.resolve());

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context['catch'](1);

                  ownProps.errorUserLoggedIn(_context.t0);
                  ownProps.unsetLoadingStateForUserLogin();
                  return _context.abrupt('return', Promise.reject());

                case 17:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this, [[1, 12]]);
        }))();
      }
    };
  }
};
// #endregion

// #endregion

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_4_recompose_compose___default()(Object(__WEBPACK_IMPORTED_MODULE_8__hoc_withEnterAnimation__["a" /* default */])(), Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps), Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["graphql"])(logUserMutation, logUserMutationOptions))(__WEBPACK_IMPORTED_MODULE_7__Login__["a" /* default */]));

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_modules_userAuth_types__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_modules_userAuth_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__redux_modules_userAuth_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router__ = __webpack_require__(50);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports

// import classnames from 'classnames';




// import styles from './login.scss';
// #endregion

// #region flow types

// #endregion

// #region constants
// IMPORTANT: we need to bind classnames to CSSModule generated classes:
// const cx = classnames.bind(styles);
// #endregion

var Login = function (_PureComponent) {
  _inherits(Login, _PureComponent);

  function Login() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      email: '',
      password: ''
    }, _this.handlesOnEmailChange = function (event) {
      event.preventDefault();
      // should add some validator before setState in real use cases
      _this.setState({ email: event.target.value });
    }, _this.handlesOnPasswordChange = function (event) {
      event.preventDefault();
      // should add some validator before setState in real use cases
      _this.setState({ password: event.target.value });
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
        }, _callee, _this2, [[4, 10]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.closeError = function (event) {
      event.preventDefault();
      var resetLogError = _this.props.resetLogError;

      resetLogError();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'componentDidMount',


    // #region component lifecycle
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
          email = _state.email,
          password = _state.password;
      var _props = this.props,
          mutationLoading = _props.mutationLoading,
          error = _props.error;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'row' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'col-md-4 col-md-offset-4' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'form',
              { className: 'form-horizontal', noValidate: true },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'fieldset',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'legend',
                  null,
                  'Login'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'form-group' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      htmlFor: 'inputEmail',
                      className: 'col-lg-2 control-label'
                    },
                    'Email'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'col-lg-10' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
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
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'form-group' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      htmlFor: 'inputPassword',
                      className: 'col-lg-2 control-label'
                    },
                    'Password'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'col-lg-10' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
                      type: 'password',
                      className: 'form-control',
                      id: 'inputPassword',
                      placeholder: 'Password',
                      value: password,
                      onChange: this.handlesOnPasswordChange
                    })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'form-group' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'col-lg-10 col-lg-offset-2' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"],
                      { className: 'btn btn-default', to: '/' },
                      'Cancel'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'button',
                      {
                        className: 'btn btn-primary loginButton',
                        disabled: mutationLoading,
                        onClick: this.handlesOnLogin
                      },
                      'Login'
                    )
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components__["b" /* ErrorAlert */], {
              showAlert: !!error,
              errorTitle: 'Error',
              errorMessage: error ? error.message : '',
              onClose: this.closeError
            })
          )
        )
      );
    }
    // #endregion

  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (Login);

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = compose;
function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth__ = __webpack_require__(181);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// #region imports



// #endregion

// #region flow types

// #endregion

var LogoutRoute = function (_PureComponent) {
  _inherits(LogoutRoute, _PureComponent);

  function LogoutRoute() {
    _classCallCheck(this, LogoutRoute);

    return _possibleConstructorReturn(this, (LogoutRoute.__proto__ || Object.getPrototypeOf(LogoutRoute)).apply(this, arguments));
  }

  _createClass(LogoutRoute, [{
    key: 'componentDidMount',

    // #region lifecycle
    value: function componentDidMount() {
      __WEBPACK_IMPORTED_MODULE_2__services_auth__["b" /* default */].clearAllAppStorage();
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"],
        this.props,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Redirect"], { to: { pathname: '/login' } })
      );
    }
    // #endregion

  }]);

  return LogoutRoute;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(LogoutRoute));

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__withEnterAnimation__ = __webpack_require__(833);


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__withEnterAnimation__["a" /* default */]);

/***/ })

},[478]);
//# sourceMappingURL=app.bundle.js.map