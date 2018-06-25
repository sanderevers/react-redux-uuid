(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash.omit"), require("lodash.mapvalues"), require("lodash.has"), require("redux"), require("react"), require("uuid"), require("lodash.isplainobject"), require("lodash.isnil"), require("lodash.get"), require("react-redux"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash.omit", "lodash.mapvalues", "lodash.has", "redux", "react", "uuid", "lodash.isplainobject", "lodash.isnil", "lodash.get", "react-redux"], factory);
	else if(typeof exports === 'object')
		exports["ReactReduxUUID"] = factory(require("lodash.omit"), require("lodash.mapvalues"), require("lodash.has"), require("redux"), require("react"), require("uuid"), require("lodash.isplainobject"), require("lodash.isnil"), require("lodash.get"), require("react-redux"));
	else
		root["ReactReduxUUID"] = factory(root["lodash.omit"], root["lodash.mapvalues"], root["lodash.has"], root["redux"], root["react"], root["uuid"], root["lodash.isplainobject"], root["lodash.isnil"], root["lodash.get"], root["react-redux"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createReducer = __webpack_require__(2);

	Object.defineProperty(exports, 'createUUIDReducer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_createReducer).default;
	  }
	});

	var _connect = __webpack_require__(8);

	Object.defineProperty(exports, 'connectUUID', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_connect).default;
	  }
	});

	var _actions = __webpack_require__(10);

	Object.defineProperty(exports, 'registerUUID', {
	  enumerable: true,
	  get: function get() {
	    return _actions.registerUUID;
	  }
	});
	Object.defineProperty(exports, 'unregisterUUID', {
	  enumerable: true,
	  get: function get() {
	    return _actions.unregisterUUID;
	  }
	});

	var _commons = __webpack_require__(11);

	Object.defineProperty(exports, 'createUUID', {
	  enumerable: true,
	  get: function get() {
	    return _commons.createUUID;
	  }
	});
	Object.defineProperty(exports, 'wrapActionCreators', {
	  enumerable: true,
	  get: function get() {
	    return _commons.wrapActionCreators;
	  }
	});
	Object.defineProperty(exports, 'getRegisteredUUIDs', {
	  enumerable: true,
	  get: function get() {
	    return _commons.getRegisteredUUIDs;
	  }
	});
	Object.defineProperty(exports, 'getUUIDState', {
	  enumerable: true,
	  get: function get() {
	    return _commons.getUUIDState;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _constants = __webpack_require__(3);

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _lodash3 = __webpack_require__(5);

	var _lodash4 = _interopRequireDefault(_lodash3);

	var _lodash5 = __webpack_require__(6);

	var _lodash6 = _interopRequireDefault(_lodash5);

	var _redux = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var createUUIDReducer = function createUUIDReducer(reducers) {
	  var splitReducer = (0, _lodash4.default)(reducers, function (reducer) {
	    return function () {
	      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      var action = arguments[1];

	      if (!(0, _lodash6.default)(action, ['meta', _constants.UUID_KEY])) return (0, _lodash4.default)(state, function (innerState) {
	        return reducer(innerState, action);
	      });
	      var key = action.meta[_constants.UUID_KEY];

	      switch (action.type) {
	        case _constants.REGISTER:
	          return Object.assign({}, state, (0, _lodash4.default)(typeof key === 'string' ? _defineProperty({}, key, undefined) : key, function (initialState) {
	            return reducer(initialState, action);
	          }));
	        case _constants.UNREGISTER:
	          return (0, _lodash2.default)(state, key);
	      }

	      return (0, _lodash6.default)(state, key) ? _extends({}, state, _defineProperty({}, key, reducer(state[key], action))) : state;
	    };
	  });

	  return function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var action = arguments[1];

	    if (!(0, _lodash6.default)(action, ['meta', _constants.NAME_KEY])) return (0, _lodash4.default)(splitReducer, function (reducer, key) {
	      return reducer(state[key], action);
	    });

	    var name = action.meta[_constants.NAME_KEY];

	    return Object.assign({}, state, _defineProperty({}, name, splitReducer[name](state[name], action)));
	  };
	};

	exports.default = createUUIDReducer;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var NAME_KEY = exports.NAME_KEY = '@@UUID/NAME_KEY';
	var UUID_KEY = exports.UUID_KEY = '@@UUID/UUID_KEY';
	var REGISTER = exports.REGISTER = '@@UUID/REGISTER';
	var UNREGISTER = exports.UNREGISTER = '@@UUID/UNREGISTER';

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("lodash.omit");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("lodash.mapvalues");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("lodash.has");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(9);

	var _react2 = _interopRequireDefault(_react);

	var _actions = __webpack_require__(10);

	var _lodash = __webpack_require__(4);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _commons = __webpack_require__(11);

	var _reactRedux = __webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var connectUUID = function connectUUID(name, mapStateToProps, mapDispatchToProps) {
	  return function (Component) {
	    var ConnectedComponent = (0, _reactRedux.connect)((0, _commons.wrapMapStateToProps)(mapStateToProps, name), (0, _commons.wrapMapDispatchToProps)(mapDispatchToProps, name))(Component);

	    var ConnectUUID = function (_React$Component) {
	      _inherits(ConnectUUID, _React$Component);

	      function ConnectUUID() {
	        _classCallCheck(this, ConnectUUID);

	        return _possibleConstructorReturn(this, (ConnectUUID.__proto__ || Object.getPrototypeOf(ConnectUUID)).apply(this, arguments));
	      }

	      _createClass(ConnectUUID, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	          var _this2 = this;

	          this.uuid = this.props.uuid || (0, _commons.createUUID)();

	          if (!this.props.uuid) {
	            this.props.registerUUID(name, this.uuid);
	          }

	          this.unregister = function () {
	            _this2.props.unregisterUUID(name, _this2.uuid);
	          };
	        }
	      }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	          if (!this.props.uuid) {
	            this.unregister();
	          }
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          return _react2.default.createElement(ConnectedComponent, _extends({}, (0, _lodash2.default)(this.props, 'registerUUID', 'unregisterUUID'), {
	            uuid: this.uuid
	          }));
	        }
	      }]);

	      return ConnectUUID;
	    }(_react2.default.Component);

	    return (0, _reactRedux.connect)(null, { registerUUID: _actions.registerUUID, unregisterUUID: _actions.unregisterUUID })(ConnectUUID);
	  };
	};

	exports.default = connectUUID;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.unregisterUUID = exports.registerUUID = undefined;

	var _constants = __webpack_require__(3);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var registerUUID = exports.registerUUID = function registerUUID(name, uuid) {
	  var _meta;

	  return {
	    type: _constants.REGISTER,
	    meta: (_meta = {}, _defineProperty(_meta, _constants.UUID_KEY, uuid), _defineProperty(_meta, _constants.NAME_KEY, name), _meta)
	  };
	};

	var unregisterUUID = exports.unregisterUUID = function unregisterUUID(name, uuid) {
	  var _meta2;

	  return {
	    type: _constants.UNREGISTER,
	    meta: (_meta2 = {}, _defineProperty(_meta2, _constants.UUID_KEY, uuid), _defineProperty(_meta2, _constants.NAME_KEY, name), _meta2)
	  };
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.wrapMapDispatchToProps = exports.wrapMapStateToProps = exports.wrapActionCreators = exports.getRegisteredUUIDs = exports.getUUIDState = exports.createUUID = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _uuid = __webpack_require__(13);

	var _lodash = __webpack_require__(5);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _redux = __webpack_require__(7);

	var _constants = __webpack_require__(3);

	var _lodash3 = __webpack_require__(14);

	var _lodash4 = _interopRequireDefault(_lodash3);

	var _lodash5 = __webpack_require__(15);

	var _lodash6 = _interopRequireDefault(_lodash5);

	var _lodash7 = __webpack_require__(16);

	var _lodash8 = _interopRequireDefault(_lodash7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var createUUID = exports.createUUID = function createUUID() {
	  return (0, _uuid.v4)();
	};
	var getUUIDState = exports.getUUIDState = function getUUIDState(state, name) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  return (0, _lodash8.default)(state, ['uuid', name].concat(args));
	};
	var getRegisteredUUIDs = exports.getRegisteredUUIDs = function getRegisteredUUIDs(state, name) {
	  return Object.keys(getUUIDState(state, name));
	};

	var wrapActionCreators = exports.wrapActionCreators = function wrapActionCreators(actionCreator, name, uuid) {
	  if (name === undefined) {
	    if (process.env.NODE_ENV === 'production') {
	      throw new Error('Wrapped action creators must have a name parameter');
	    } else {
	      throw new Error('Looks like youre passing undefined as a name to the wrapActionCreators        function call\n\n        Example:\n          import { wrapActionCreators } from \'react-redux-uuid\';\n\n          const generalActions = { add, subtract };\n          // this would apply the add and subtract actions to all reducers within the counter name\n          const mapDispatchToProps = wrapActionCreators(generalActions, \'counter\');\n      ');
	    }
	  }

	  if ((0, _lodash4.default)(actionCreator)) {
	    return (0, _lodash2.default)(actionCreator, function (ac) {
	      return wrapActionCreators(ac, name, uuid);
	    });
	  }

	  function wrapAction(action) {
	    if ((0, _lodash4.default)(action)) {
	      return augmentAction(action, name, uuid);
	    } else {
	      // for redux-thunk
	      var augmentDispatch = function augmentDispatch(dispatch) {
	        return function (action) {
	          return dispatch(wrapAction(action));
	        };
	      };
	      return function (dispatch) {
	        return action(augmentDispatch(dispatch));
	      };
	    }
	  }

	  return function () {
	    return wrapAction(actionCreator.apply(undefined, arguments));
	  };
	};

	var augmentAction = function augmentAction(action, name, uuid) {
	  return _extends({}, action, {
	    meta: Object.assign({}, action.meta, name && _defineProperty({}, _constants.NAME_KEY, name), uuid && _defineProperty({}, _constants.UUID_KEY, uuid))
	  });
	};

	var wrapMapStateToProps = exports.wrapMapStateToProps = function wrapMapStateToProps(mapStateToProps, name) {
	  return function (state, props) {
	    if ((0, _lodash6.default)(mapStateToProps)) return {};

	    var innerState = getUUIDState(state, name, props.uuid);

	    if (innerState === undefined) {
	      if (process.env.NODE_ENV === 'production') {
	        throw new Error('Can\'t find the state by UUID');
	      } else {
	        throw new Error('Looks like your uuid reducer setup is wrong. Make sure to have the        resulting reducer of the createUUIDReducer at the `uuid` key in your state\'s top level        reducers,\n\n        Example:\n          import { createUUIDReducer } from \'react-redux-uuid\';\n\n          const mainAppReducer = combineReducers({\n            uuid: createUUIDReducer({\n              counter: counterReducer,\n              fizzbuzz: fizzbuzzReducer\n            })\n          })\n\n          const store = createStore(mainAppReducer, ...);\n      ');
	      }
	    }

	    return mapStateToProps(innerState, props);
	  };
	};

	var wrapMapDispatchToProps = function wrapMapDispatchToProps(mapDispatchToProps, name) {
	  return function (dispatch, _ref3) {
	    var uuid = _ref3.uuid,
	        props = _objectWithoutProperties(_ref3, ['uuid']);

	    if ((0, _lodash6.default)(mapDispatchToProps)) return {};
	    if ((0, _lodash4.default)(mapDispatchToProps)) {
	      var actions = wrapActionCreators(mapDispatchToProps, name, uuid);
	      // memoize wrapped actions by passing a thunk
	      return function () {
	        return (0, _redux.bindActionCreators)(actions, dispatch);
	      };
	    }
	    return mapDispatchToProps(dispatch, props);
	  };
	};
	exports.wrapMapDispatchToProps = wrapMapDispatchToProps;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 12 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("uuid");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("lodash.isplainobject");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("lodash.isnil");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("lodash.get");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ }
/******/ ])
});
;