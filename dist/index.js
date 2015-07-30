(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("promise"), require("react-select"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "promise", "react-select"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("promise"), require("react-select")) : factory(root["react"], root["promise"], root["react-select"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
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

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _libAutocompleteBox = __webpack_require__(1);

	var _libAutocompleteBox2 = _interopRequireDefault(_libAutocompleteBox);

	var _libAutocompleteView = __webpack_require__(6);

	var _libAutocompleteView2 = _interopRequireDefault(_libAutocompleteView);

	var _libSelectionView = __webpack_require__(5);

	var _libSelectionView2 = _interopRequireDefault(_libSelectionView);

	var _libSuggestionView = __webpack_require__(7);

	var _libSuggestionView2 = _interopRequireDefault(_libSuggestionView);

	exports['default'] = {
	    AutocompleteBox: _libAutocompleteBox2['default'],
	    AutocompleteView: _libAutocompleteView2['default'],
	    SelectionView: _libSelectionView2['default'],
	    SuggestionView: _libSuggestionView2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _promise = __webpack_require__(3);

	var _promise2 = _interopRequireDefault(_promise);

	var _reactSelect = __webpack_require__(4);

	var _reactSelect2 = _interopRequireDefault(_reactSelect);

	var _SelectionView = __webpack_require__(5);

	var _SelectionView2 = _interopRequireDefault(_SelectionView);

	var _SuggestionView = __webpack_require__(7);

	/**
	 * This class accepts two parameters: the "selected" object and the "search".
	 * The "selected" DataSet instance contains already selected items. The "search"
	 * parameter should be a method returning a promise with the resulting DataSet
	 * or an object containing the "search" method. The execution results of this
	 * method are used for auto-completion. Each resulting item should provide at
	 * least two adapters - "AutocompleteBox.SuggestionView" and
	 * "AutocompleteBox.SelectionView". These adapters re-implement the "renderView"
	 * method defining items visualization in the suggestion list and in the list of
	 * already selected items.
	 */

	var _SuggestionView2 = _interopRequireDefault(_SuggestionView);

	var AutocompleteBox = (function (_React$Component) {
	    _inherits(AutocompleteBox, _React$Component);

	    function AutocompleteBox() {
	        _classCallCheck(this, AutocompleteBox);

	        for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	            params[_key] = arguments[_key];
	        }

	        _get(Object.getPrototypeOf(AutocompleteBox.prototype), 'constructor', this).apply(this, params);
	        var that = this;
	        that._search = that._search.bind(that);
	        that._formatSelectedValue = that._formatSelectedValue.bind(that);
	        that._formatSuggestionValue = that._formatSuggestionValue.bind(that);
	        that._filterSuggestionValues = that._filterSuggestionValues.bind(that);
	        that._onUpdate = that._onUpdate.bind(that);
	        var s = that.props.search;
	        if (typeof s === 'object' && typeof s.search === 'function') {
	            s = s.search.bind(s);
	        } else if (typeof s !== 'function') {
	            throw new Error('The "search" method is not defined.');
	        }
	        that._doSearch = function (input) {
	            return _promise2['default'].resolve().then(function () {
	                return s(input);
	            });
	        };
	    }

	    _createClass(AutocompleteBox, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var selection = this.props.selected;
	            selection.addListener('update', this._onSelectionUpdate);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            var selection = this.props.selected;
	            selection.removeListener('update', this._onSelectionUpdate);
	        }
	    }, {
	        key: '_onSelectionUpdate',
	        value: function _onSelectionUpdate(intent) {
	            intent.then((function () {
	                this.setState({});
	            }).bind(this));
	        }
	    }, {
	        key: '_search',
	        value: function _search(input, callback) {
	            var that = this;
	            that._doSearch(input).then(function (dataset) {
	                var list = dataset.map(function (item) {
	                    var view = item.getAdapter(_SuggestionView2['default']);
	                    return view;
	                });
	                callback(null, {
	                    complete: false,
	                    options: list
	                });
	            }).then(null, callback);
	        }
	    }, {
	        key: '_formatSelectedValue',
	        value: function _formatSelectedValue(suggestionView) {
	            if (!suggestionView || !suggestionView.item) return;
	            var selectionView = suggestionView.item.getAdapter(_SelectionView2['default']);
	            return selectionView.renderView();
	        }
	    }, {
	        key: '_formatSuggestionValue',
	        value: function _formatSuggestionValue(view) {
	            return view.renderView();
	        }
	    }, {
	        key: '_filterSuggestionValues',
	        value: function _filterSuggestionValues(list, filterValue, exclude) {
	            var result = [];
	            if (list && list.length) {
	                (function () {
	                    var index = {};
	                    if (exclude && exclude.length) {
	                        exclude.forEach(function (excluded) {
	                            index[excluded] = true;
	                        });
	                    }
	                    list.forEach(function (item) {
	                        if (!index[item.value]) {
	                            result.push(item);
	                        }
	                    });
	                })();
	            }
	            return result;
	        }
	    }, {
	        key: '_onUpdate',
	        value: function _onUpdate(value, values) {
	            var selection = this.props.selected;
	            selection.items = values.map(function (w) {
	                return w.item;
	            });
	            this._closeSuggestions();
	        }
	    }, {
	        key: '_closeSuggestions',
	        value: function _closeSuggestions() {
	            setTimeout((function () {
	                this.refs.select.setState({ isOpen: false });
	            }).bind(this), 10);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var selectOptions = this.props.selectOptions || {};
	            var selected = this.props.selected;
	            var list = selected.map(function (item) {
	                return item.getAdapter(_SelectionView2['default']);
	            });
	            return _react2['default'].createElement(_reactSelect2['default'], _extends({
	                ref: "select",
	                multi: true,
	                clearable: true,
	                searchable: true,
	                asyncOptions: this._search,
	                valueRenderer: this._formatSelectedValue,
	                optionRenderer: this._formatSuggestionValue,
	                filterOptions: this._filterSuggestionValues,
	                onChange: this._onUpdate,
	                value: list
	            }, selectOptions));
	        }
	    }]);

	    return AutocompleteBox;
	})(_react2['default'].Component);

	exports['default'] = AutocompleteBox;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _AutocompleteView2 = __webpack_require__(6);

	var _AutocompleteView3 = _interopRequireDefault(_AutocompleteView2);

	var SelectionView = (function (_AutocompleteView) {
	  _inherits(SelectionView, _AutocompleteView);

	  function SelectionView() {
	    _classCallCheck(this, SelectionView);

	    _get(Object.getPrototypeOf(SelectionView.prototype), 'constructor', this).apply(this, arguments);
	  }

	  return SelectionView;
	})(_AutocompleteView3['default']);

	exports['default'] = SelectionView;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var AutocompleteView = (function () {
	    function AutocompleteView(options, item) {
	        _classCallCheck(this, AutocompleteView);

	        this.options = options || {};
	        this.item = item;
	    }

	    /** Returns the identifier of the item as a value for the auto-completion box */

	    _createClass(AutocompleteView, [{
	        key: 'renderView',

	        /** Returns a new representation for this item. */
	        value: function renderView() {
	            return _react2['default'].createElement(
	                'span',
	                null,
	                this.item.id
	            );
	        }
	    }, {
	        key: 'value',
	        get: function get() {
	            return this.item.id;
	        }
	    }]);

	    return AutocompleteView;
	})();

	exports['default'] = AutocompleteView;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _AutocompleteView2 = __webpack_require__(6);

	var _AutocompleteView3 = _interopRequireDefault(_AutocompleteView2);

	var SuggestionView = (function (_AutocompleteView) {
	  _inherits(SuggestionView, _AutocompleteView);

	  function SuggestionView() {
	    _classCallCheck(this, SuggestionView);

	    _get(Object.getPrototypeOf(SuggestionView.prototype), 'constructor', this).apply(this, arguments);
	  }

	  return SuggestionView;
	})(_AutocompleteView3['default']);

	exports['default'] = SuggestionView;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;