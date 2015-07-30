(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("promise"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "promise"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("promise")) : factory(root["react"], root["promise"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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

	var _libAutocompleteView = __webpack_require__(9);

	var _libAutocompleteView2 = _interopRequireDefault(_libAutocompleteView);

	var _libSelectionView = __webpack_require__(8);

	var _libSelectionView2 = _interopRequireDefault(_libSelectionView);

	var _libSuggestionView = __webpack_require__(10);

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

	var _SelectionView = __webpack_require__(8);

	var _SelectionView2 = _interopRequireDefault(_SelectionView);

	var _SuggestionView = __webpack_require__(10);

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
/***/ function(module, exports, __webpack_require__) {

	/* disable some rules until we refactor more completely; fixing them now would
	   cause conflicts with some open PRs unnecessarily. */
	/* eslint react/jsx-sort-prop-types: 0, react/sort-comp: 0, react/prop-types: 0 */

	'use strict';

	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}return target;
	};

	var React = __webpack_require__(2);
	var Input = __webpack_require__(5);
	var classes = __webpack_require__(6);
	var Value = __webpack_require__(7);

	var requestId = 0;

	var Select = React.createClass({

		displayName: 'Select',

		propTypes: {
			allowCreate: React.PropTypes.bool, // wether to allow creation of new entries
			asyncOptions: React.PropTypes.func, // function to call to get options
			autoload: React.PropTypes.bool, // whether to auto-load the default async options set
			className: React.PropTypes.string, // className for the outer element
			clearable: React.PropTypes.bool, // should it be possible to reset value
			clearAllText: React.PropTypes.string, // title for the "clear" control when multi: true
			clearValueText: React.PropTypes.string, // title for the "clear" control
			delimiter: React.PropTypes.string, // delimiter to use to join multiple values
			disabled: React.PropTypes.bool, // whether the Select is disabled or not
			filterOption: React.PropTypes.func, // method to filter a single option: function(option, filterString)
			filterOptions: React.PropTypes.func, // method to filter the options array: function([options], filterString, [values])
			ignoreCase: React.PropTypes.bool, // whether to perform case-insensitive filtering
			inputProps: React.PropTypes.object, // custom attributes for the Input (in the Select-control) e.g: {'data-foo': 'bar'}
			matchPos: React.PropTypes.string, // (any|start) match the start or entire string when filtering
			matchProp: React.PropTypes.string, // (any|label|value) which option property to filter on
			multi: React.PropTypes.bool, // multi-value input
			name: React.PropTypes.string, // field name, for hidden <input /> tag
			addLabelText: React.PropTypes.string, // placeholder displayed when you want to add a label on a multi-value input
			noResultsText: React.PropTypes.string, // placeholder displayed when there are no matching search results
			onBlur: React.PropTypes.func, // onBlur handler: function(event) {}
			onChange: React.PropTypes.func, // onChange handler: function(newValue) {}
			onFocus: React.PropTypes.func, // onFocus handler: function(event) {}
			onOptionLabelClick: React.PropTypes.func, // onCLick handler for value labels: function (value, event) {}
			optionRenderer: React.PropTypes.func, // optionRenderer: function(option) {}
			options: React.PropTypes.array, // array of options
			placeholder: React.PropTypes.string, // field placeholder, displayed when there's no value
			searchable: React.PropTypes.bool, // whether to enable searching feature or not
			searchPromptText: React.PropTypes.string, // label to prompt for search input
			value: React.PropTypes.any, // initial field value
			valueRenderer: React.PropTypes.func // valueRenderer: function(option) {}
		},

		getDefaultProps: function getDefaultProps() {
			return {
				allowCreate: false,
				asyncOptions: undefined,
				autoload: true,
				className: undefined,
				clearable: true,
				clearAllText: 'Clear all',
				clearValueText: 'Clear value',
				delimiter: ',',
				disabled: false,
				ignoreCase: true,
				inputProps: {},
				matchPos: 'any',
				matchProp: 'any',
				name: undefined,
				addLabelText: 'Add {label} ?',
				noResultsText: 'No results found',
				onChange: undefined,
				onOptionLabelClick: undefined,
				options: undefined,
				placeholder: 'Select...',
				searchable: true,
				searchPromptText: 'Type to search',
				value: undefined
			};
		},

		getInitialState: function getInitialState() {
			return {
				/*
	    * set by getStateFromValue on componentWillMount:
	    * - value
	    * - values
	    * - filteredOptions
	    * - inputValue
	    * - placeholder
	    * - focusedOption
	   */
				isFocused: false,
				isLoading: false,
				isOpen: false,
				options: this.props.options
			};
		},

		componentWillMount: function componentWillMount() {
			this._optionsCache = {};
			this._optionsFilterString = '';

			var self = this;
			this._closeMenuIfClickedOutside = function (event) {
				if (!self.state.isOpen) {
					return;
				}
				var menuElem = React.findDOMNode(self.refs.selectMenuContainer);
				var controlElem = React.findDOMNode(self.refs.control);

				var eventOccuredOutsideMenu = self.clickedOutsideElement(menuElem, event);
				var eventOccuredOutsideControl = self.clickedOutsideElement(controlElem, event);

				// Hide dropdown menu if click occurred outside of menu
				if (eventOccuredOutsideMenu && eventOccuredOutsideControl) {
					self.setState({
						isOpen: false
					}, self._unbindCloseMenuIfClickedOutside);
				}
			};

			this._bindCloseMenuIfClickedOutside = function () {
				if (!document.addEventListener && document.attachEvent) {
					document.attachEvent('onclick', this._closeMenuIfClickedOutside);
				} else {
					document.addEventListener('click', this._closeMenuIfClickedOutside);
				}
			};

			this._unbindCloseMenuIfClickedOutside = function () {
				if (!document.removeEventListener && document.detachEvent) {
					document.detachEvent('onclick', this._closeMenuIfClickedOutside);
				} else {
					document.removeEventListener('click', this._closeMenuIfClickedOutside);
				}
			};

			this.setState(this.getStateFromValue(this.props.value));
		},

		componentDidMount: function componentDidMount() {
			if (this.props.asyncOptions && this.props.autoload) {
				this.autoloadAsyncOptions();
			}
		},

		componentWillUnmount: function componentWillUnmount() {
			clearTimeout(this._blurTimeout);
			clearTimeout(this._focusTimeout);

			if (this.state.isOpen) {
				this._unbindCloseMenuIfClickedOutside();
			}
		},

		componentWillReceiveProps: function componentWillReceiveProps(newProps) {
			if (JSON.stringify(newProps.options) !== JSON.stringify(this.props.options)) {
				this.setState({
					options: newProps.options,
					filteredOptions: this.filterOptions(newProps.options)
				});
			}
			if (newProps.value !== this.state.value || newProps.placeholder !== this.state.placeholder) {
				this.setState(this.getStateFromValue(newProps.value, newProps.options, newProps.placeholder));
			}
		},

		componentDidUpdate: function componentDidUpdate() {
			var self = this;

			if (!this.props.disabled && this._focusAfterUpdate) {
				clearTimeout(this._blurTimeout);
				this._focusTimeout = setTimeout(function () {
					self.getInputNode().focus();
					self._focusAfterUpdate = false;
				}, 50);
			}

			if (this._focusedOptionReveal) {
				if (this.refs.focused && this.refs.menu) {
					var focusedDOM = React.findDOMNode(this.refs.focused);
					var menuDOM = React.findDOMNode(this.refs.menu);
					var focusedRect = focusedDOM.getBoundingClientRect();
					var menuRect = menuDOM.getBoundingClientRect();

					if (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top) {
						menuDOM.scrollTop = focusedDOM.offsetTop + focusedDOM.clientHeight - menuDOM.offsetHeight;
					}
				}
				this._focusedOptionReveal = false;
			}
		},

		focus: function focus() {
			this.getInputNode().focus();
		},

		clickedOutsideElement: function clickedOutsideElement(element, event) {
			var eventTarget = event.target ? event.target : event.srcElement;
			while (eventTarget != null) {
				if (eventTarget === element) return false;
				eventTarget = eventTarget.offsetParent;
			}
			return true;
		},

		getStateFromValue: function getStateFromValue(value, options, placeholder) {
			if (!options) {
				options = this.state.options;
			}
			if (!placeholder) {
				placeholder = this.props.placeholder;
			}

			// reset internal filter string
			this._optionsFilterString = '';

			var values = this.initValuesArray(value, options),
			    filteredOptions = this.filterOptions(options, values);

			return {
				value: values.map(function (v) {
					return v.value;
				}).join(this.props.delimiter),
				values: values,
				inputValue: '',
				filteredOptions: filteredOptions,
				placeholder: !this.props.multi && values.length ? values[0].label : placeholder,
				focusedOption: !this.props.multi && values.length ? values[0] : filteredOptions[0]
			};
		},

		initValuesArray: function initValuesArray(values, options) {
			if (!Array.isArray(values)) {
				if (typeof values === 'string') {
					values = values === '' ? [] : values.split(this.props.delimiter);
				} else {
					values = values ? [values] : [];
				}
			}

			return values.map(function (val) {
				if (typeof val === 'string') {
					for (var key in options) {
						if (options.hasOwnProperty(key) && options[key] && options[key].value === val) {
							return options[key];
						}
					}
					return { value: val, label: val };
				} else {
					return val;
				}
			});
		},

		setValue: function setValue(value, focusAfterUpdate) {
			if (focusAfterUpdate || focusAfterUpdate === undefined) {
				this._focusAfterUpdate = true;
			}
			var newState = this.getStateFromValue(value);
			newState.isOpen = false;
			this.fireChangeEvent(newState);
			this.setState(newState);
		},

		selectValue: function selectValue(value) {
			if (!this.props.multi) {
				this.setValue(value);
			} else if (value) {
				this.addValue(value);
			}
			this._unbindCloseMenuIfClickedOutside();
		},

		addValue: function addValue(value) {
			this.setValue(this.state.values.concat(value));
		},

		popValue: function popValue() {
			this.setValue(this.state.values.slice(0, this.state.values.length - 1));
		},

		removeValue: function removeValue(valueToRemove) {
			this.setValue(this.state.values.filter(function (value) {
				return value !== valueToRemove;
			}));
		},

		clearValue: function clearValue(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, ignore it.
			if (event && event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			event.stopPropagation();
			event.preventDefault();
			this.setValue(null);
		},

		resetValue: function resetValue() {
			this.setValue(this.state.value === '' ? null : this.state.value);
		},

		getInputNode: function getInputNode() {
			var input = this.refs.input;
			return this.props.searchable ? input : React.findDOMNode(input);
		},

		fireChangeEvent: function fireChangeEvent(newState) {
			if (newState.value !== this.state.value && this.props.onChange) {
				this.props.onChange(newState.value, newState.values);
			}
		},

		handleMouseDown: function handleMouseDown(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}

			event.stopPropagation();
			event.preventDefault();
			if (this.state.isFocused) {
				this.setState({
					isOpen: true
				}, this._bindCloseMenuIfClickedOutside);
			} else {
				this._openAfterFocus = true;
				this.getInputNode().focus();
			}
		},

		handleMouseDownOnArrow: function handleMouseDownOnArrow(event) {
			// if the event was triggered by a mousedown and not the primary
			// button, or if the component is disabled, ignore it.
			if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
				return;
			}
			// If not focused, handleMouseDown will handle it
			if (!this.state.isOpen) {
				return;
			}

			event.stopPropagation();
			event.preventDefault();
			this.setState({
				isOpen: false
			}, this._unbindCloseMenuIfClickedOutside);
		},

		handleInputFocus: function handleInputFocus(event) {
			var newIsOpen = this.state.isOpen || this._openAfterFocus;
			this.setState({
				isFocused: true,
				isOpen: newIsOpen
			}, function () {
				if (newIsOpen) {
					this._bindCloseMenuIfClickedOutside();
				} else {
					this._unbindCloseMenuIfClickedOutside();
				}
			});
			this._openAfterFocus = false;

			if (this.props.onFocus) {
				this.props.onFocus(event);
			}
		},

		handleInputBlur: function handleInputBlur(event) {
			var self = this;

			this._blurTimeout = setTimeout(function () {
				if (self._focusAfterUpdate) return;

				self.setState({
					isFocused: false
				});
			}, 50);

			if (this.props.onBlur) {
				this.props.onBlur(event);
			}
		},

		handleKeyDown: function handleKeyDown(event) {
			if (this.state.disabled) return;

			switch (event.keyCode) {

				case 8:
					// backspace
					if (!this.state.inputValue) {
						this.popValue();
					}
					return;

				case 9:
					// tab
					if (event.shiftKey || !this.state.isOpen || !this.state.focusedOption) {
						return;
					}
					this.selectFocusedOption();
					break;

				case 13:
					// enter
					if (!this.state.isOpen) return;

					this.selectFocusedOption();
					break;

				case 27:
					// escape
					if (this.state.isOpen) {
						this.resetValue();
					} else {
						this.clearValue(event);
					}
					break;

				case 38:
					// up
					this.focusPreviousOption();
					break;

				case 40:
					// down
					this.focusNextOption();
					break;

				case 188:
					// ,
					if (this.props.allowCreate && this.props.multi) {
						event.preventDefault();
						event.stopPropagation();
						this.selectFocusedOption();
					} else {
						return;
					}
					break;

				default:
					return;
			}

			event.preventDefault();
		},

		// Ensures that the currently focused option is available in filteredOptions.
		// If not, returns the first available option.
		_getNewFocusedOption: function _getNewFocusedOption(filteredOptions) {
			for (var key in filteredOptions) {
				if (filteredOptions.hasOwnProperty(key) && filteredOptions[key] === this.state.focusedOption) {
					return filteredOptions[key];
				}
			}
			return filteredOptions[0];
		},

		handleInputChange: function handleInputChange(event) {
			// assign an internal variable because we need to use
			// the latest value before setState() has completed.
			this._optionsFilterString = event.target.value;

			if (this.props.asyncOptions) {
				this.setState({
					isLoading: true,
					inputValue: event.target.value
				});
				this.loadAsyncOptions(event.target.value, {
					isLoading: false,
					isOpen: true
				}, this._bindCloseMenuIfClickedOutside);
			} else {
				var filteredOptions = this.filterOptions(this.state.options);
				this.setState({
					isOpen: true,
					inputValue: event.target.value,
					filteredOptions: filteredOptions,
					focusedOption: this._getNewFocusedOption(filteredOptions)
				}, this._bindCloseMenuIfClickedOutside);
			}
		},

		autoloadAsyncOptions: function autoloadAsyncOptions() {
			var self = this;
			this.loadAsyncOptions(this.props.value || '', {}, function () {
				// update with fetched but don't focus
				self.setValue(self.props.value, false);
			});
		},

		loadAsyncOptions: function loadAsyncOptions(input, state, callback) {
			var thisRequestId = this._currentRequestId = requestId++;

			for (var i = 0; i <= input.length; i++) {
				var cacheKey = input.slice(0, i);
				if (this._optionsCache[cacheKey] && (input === cacheKey || this._optionsCache[cacheKey].complete)) {
					var options = this._optionsCache[cacheKey].options;
					var filteredOptions = this.filterOptions(options);

					var newState = {
						options: options,
						filteredOptions: filteredOptions,
						focusedOption: this._getNewFocusedOption(filteredOptions)
					};
					for (var key in state) {
						if (state.hasOwnProperty(key)) {
							newState[key] = state[key];
						}
					}
					this.setState(newState);
					if (callback) callback.call(this, {});
					return;
				}
			}

			var self = this;
			this.props.asyncOptions(input, function (err, data) {

				if (err) throw err;

				self._optionsCache[input] = data;

				if (thisRequestId !== self._currentRequestId) {
					return;
				}
				var filteredOptions = self.filterOptions(data.options);

				var newState = {
					options: data.options,
					filteredOptions: filteredOptions,
					focusedOption: self._getNewFocusedOption(filteredOptions)
				};
				for (var key in state) {
					if (state.hasOwnProperty(key)) {
						newState[key] = state[key];
					}
				}
				self.setState(newState);

				if (callback) callback.call(self, {});
			});
		},

		filterOptions: function filterOptions(options, values) {
			if (!this.props.searchable) {
				return options;
			}

			var filterValue = this._optionsFilterString;
			var exclude = (values || this.state.values).map(function (i) {
				return i.value;
			});
			if (this.props.filterOptions) {
				return this.props.filterOptions.call(this, options, filterValue, exclude);
			} else {
				var filterOption = function filterOption(op) {
					if (this.props.multi && exclude.indexOf(op.value) > -1) return false;
					if (this.props.filterOption) return this.props.filterOption.call(this, op, filterValue);
					var valueTest = String(op.value),
					    labelTest = String(op.label);
					if (this.props.ignoreCase) {
						valueTest = valueTest.toLowerCase();
						labelTest = labelTest.toLowerCase();
						filterValue = filterValue.toLowerCase();
					}
					return !filterValue || this.props.matchPos === 'start' ? this.props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || this.props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : this.props.matchProp !== 'label' && valueTest.indexOf(filterValue) >= 0 || this.props.matchProp !== 'value' && labelTest.indexOf(filterValue) >= 0;
				};
				return (options || []).filter(filterOption, this);
			}
		},

		selectFocusedOption: function selectFocusedOption() {
			if (this.props.allowCreate && !this.state.focusedOption) {
				return this.selectValue(this.state.inputValue);
			}
			return this.selectValue(this.state.focusedOption);
		},

		focusOption: function focusOption(op) {
			this.setState({
				focusedOption: op
			});
		},

		focusNextOption: function focusNextOption() {
			this.focusAdjacentOption('next');
		},

		focusPreviousOption: function focusPreviousOption() {
			this.focusAdjacentOption('previous');
		},

		focusAdjacentOption: function focusAdjacentOption(dir) {
			this._focusedOptionReveal = true;

			var ops = this.state.filteredOptions;

			if (!this.state.isOpen) {
				this.setState({
					isOpen: true,
					inputValue: '',
					focusedOption: this.state.focusedOption || ops[dir === 'next' ? 0 : ops.length - 1]
				}, this._bindCloseMenuIfClickedOutside);
				return;
			}

			if (!ops.length) {
				return;
			}

			var focusedIndex = -1;

			for (var i = 0; i < ops.length; i++) {
				if (this.state.focusedOption === ops[i]) {
					focusedIndex = i;
					break;
				}
			}

			var focusedOption = ops[0];

			if (dir === 'next' && focusedIndex > -1 && focusedIndex < ops.length - 1) {
				focusedOption = ops[focusedIndex + 1];
			} else if (dir === 'previous') {
				if (focusedIndex > 0) {
					focusedOption = ops[focusedIndex - 1];
				} else {
					focusedOption = ops[ops.length - 1];
				}
			}

			this.setState({
				focusedOption: focusedOption
			});
		},

		unfocusOption: function unfocusOption(op) {
			if (this.state.focusedOption === op) {
				this.setState({
					focusedOption: null
				});
			}
		},

		buildMenu: function buildMenu() {
			var focusedValue = this.state.focusedOption ? this.state.focusedOption.value : null;
			var renderLabel = this.props.optionRenderer || function (op) {
				return op.label;
			};

			if (this.state.filteredOptions.length > 0) {
				focusedValue = focusedValue == null ? this.state.filteredOptions[0] : focusedValue;
			}
			// Add the current value to the filtered options in last resort
			var options = this.state.filteredOptions;
			if (this.props.allowCreate && this.state.inputValue.trim()) {
				var inputValue = this.state.inputValue;
				options = options.slice();
				options.unshift({
					value: inputValue,
					label: inputValue,
					create: true
				});
			}

			var ops = Object.keys(options).map(function (key) {
				var op = options[key];
				var isSelected = this.state.value === op.value;
				var isFocused = focusedValue === op.value;

				var optionClass = classes({
					'Select-option': true,
					'is-selected': isSelected,
					'is-focused': isFocused,
					'is-disabled': op.disabled
				});

				var ref = isFocused ? 'focused' : null;

				var mouseEnter = this.focusOption.bind(this, op);
				var mouseLeave = this.unfocusOption.bind(this, op);
				var mouseDown = this.selectValue.bind(this, op);
				var renderedLabel = renderLabel(op);

				return op.disabled ? React.createElement('div', { ref: ref, key: 'option-' + op.value, className: optionClass }, renderedLabel) : React.createElement('div', { ref: ref, key: 'option-' + op.value, className: optionClass, onMouseEnter: mouseEnter, onMouseLeave: mouseLeave, onMouseDown: mouseDown, onClick: mouseDown }, op.create ? this.props.addLabelText.replace('{label}', op.label) : renderedLabel);
			}, this);

			return ops.length ? ops : React.createElement('div', { className: 'Select-noresults' }, this.props.asyncOptions && !this.state.inputValue ? this.props.searchPromptText : this.props.noResultsText);
		},

		handleOptionLabelClick: function handleOptionLabelClick(value, event) {
			if (this.props.onOptionLabelClick) {
				this.props.onOptionLabelClick(value, event);
			}
		},

		render: function render() {
			var selectClass = classes('Select', this.props.className, {
				'is-multi': this.props.multi,
				'is-searchable': this.props.searchable,
				'is-open': this.state.isOpen,
				'is-focused': this.state.isFocused,
				'is-loading': this.state.isLoading,
				'is-disabled': this.props.disabled,
				'has-value': this.state.value
			});

			var value = [];

			if (this.props.multi) {
				this.state.values.forEach(function (val) {
					value.push(React.createElement(Value, {
						key: val.value,
						option: val,
						renderer: this.props.valueRenderer,
						optionLabelClick: !!this.props.onOptionLabelClick,
						onOptionLabelClick: this.handleOptionLabelClick.bind(this, val),
						onRemove: this.removeValue.bind(this, val),
						disabled: this.props.disabled }));
				}, this);
			}

			if (!this.state.inputValue && (!this.props.multi || !value.length)) {
				value.push(React.createElement('div', { className: 'Select-placeholder', key: 'placeholder' }, this.state.placeholder));
			}

			var loading = this.state.isLoading ? React.createElement('span', { className: 'Select-loading', 'aria-hidden': 'true' }) : null;
			var clear = this.props.clearable && this.state.value && !this.props.disabled ? React.createElement('span', { className: 'Select-clear', title: this.props.multi ? this.props.clearAllText : this.props.clearValueText, 'aria-label': this.props.multi ? this.props.clearAllText : this.props.clearValueText, onMouseDown: this.clearValue, onClick: this.clearValue, dangerouslySetInnerHTML: { __html: '&times;' } }) : null;

			var menu;
			var menuProps;
			if (this.state.isOpen) {
				menuProps = {
					ref: 'menu',
					className: 'Select-menu'
				};
				if (this.props.multi) {
					menuProps.onMouseDown = this.handleMouseDown;
				}
				menu = React.createElement('div', { ref: 'selectMenuContainer', className: 'Select-menu-outer' }, React.createElement('div', menuProps, this.buildMenu()));
			}

			var input;
			var inputProps = {
				ref: 'input',
				className: 'Select-input',
				tabIndex: this.props.tabIndex || 0,
				onFocus: this.handleInputFocus,
				onBlur: this.handleInputBlur
			};
			for (var key in this.props.inputProps) {
				if (this.props.inputProps.hasOwnProperty(key)) {
					inputProps[key] = this.props.inputProps[key];
				}
			}

			if (!this.props.disabled) {
				if (this.props.searchable) {
					input = React.createElement(Input, _extends({ value: this.state.inputValue, onChange: this.handleInputChange, minWidth: '5' }, inputProps));
				} else {
					input = React.createElement('div', inputProps, ' ');
				}
			} else if (!this.props.multi || !this.state.values.length) {
				input = React.createElement('div', { className: 'Select-input' }, ' ');
			}

			return React.createElement('div', { ref: 'wrapper', className: selectClass }, React.createElement('input', { type: 'hidden', ref: 'value', name: this.props.name, value: this.state.value, disabled: this.props.disabled }), React.createElement('div', { className: 'Select-control', ref: 'control', onKeyDown: this.handleKeyDown, onMouseDown: this.handleMouseDown, onTouchEnd: this.handleMouseDown }, value, input, React.createElement('span', { className: 'Select-arrow-zone', onMouseDown: this.handleMouseDownOnArrow }), React.createElement('span', { className: 'Select-arrow', onMouseDown: this.handleMouseDownOnArrow }), loading, clear), menu);
		}

	});

	module.exports = Select;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}return target;
	};

	var React = __webpack_require__(2);

	var sizerStyle = { position: 'absolute', visibility: 'hidden', height: 0, width: 0, overflow: 'scroll', whiteSpace: 'nowrap' };

	var AutosizeInput = React.createClass({
		displayName: 'AutosizeInput',

		propTypes: {
			value: React.PropTypes.any, // field value
			defaultValue: React.PropTypes.any, // default field value
			onChange: React.PropTypes.func, // onChange handler: function(newValue) {}
			style: React.PropTypes.object, // css styles for the outer element
			className: React.PropTypes.string, // className for the outer element
			minWidth: React.PropTypes.oneOfType([// minimum width for input element
			React.PropTypes.number, React.PropTypes.string]),
			inputStyle: React.PropTypes.object, // css styles for the input element
			inputClassName: React.PropTypes.string // className for the input element
		},
		getDefaultProps: function getDefaultProps() {
			return {
				minWidth: 1
			};
		},
		getInitialState: function getInitialState() {
			return {
				inputWidth: this.props.minWidth
			};
		},
		componentDidMount: function componentDidMount() {
			this.copyInputStyles();
			this.updateInputWidth();
		},
		componentDidUpdate: function componentDidUpdate() {
			this.updateInputWidth();
		},
		copyInputStyles: function copyInputStyles() {
			if (!this.isMounted() || !window.getComputedStyle) {
				return;
			}
			var inputStyle = window.getComputedStyle(React.findDOMNode(this.refs.input));
			var widthNode = React.findDOMNode(this.refs.sizer);
			widthNode.style.fontSize = inputStyle.fontSize;
			widthNode.style.fontFamily = inputStyle.fontFamily;
			if (this.props.placeholder) {
				var placeholderNode = React.findDOMNode(this.refs.placeholderSizer);
				placeholderNode.style.fontSize = inputStyle.fontSize;
				placeholderNode.style.fontFamily = inputStyle.fontFamily;
			}
		},
		updateInputWidth: function updateInputWidth() {
			if (!this.isMounted() || typeof React.findDOMNode(this.refs.sizer).scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth;
			if (this.props.placeholder) {
				newInputWidth = Math.max(React.findDOMNode(this.refs.sizer).scrollWidth, React.findDOMNode(this.refs.placeholderSizer).scrollWidth) + 2;
			} else {
				newInputWidth = React.findDOMNode(this.refs.sizer).scrollWidth + 2;
			}
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		},
		getInput: function getInput() {
			return this.refs.input;
		},
		focus: function focus() {
			React.findDOMNode(this.refs.input).focus();
		},
		select: function select() {
			React.findDOMNode(this.refs.input).select();
		},
		render: function render() {
			var escapedValue = (this.props.value || '').replace(/\&/g, '&amp;').replace(/ /g, '&nbsp;').replace(/\</g, '&lt;').replace(/\>/g, '&gt;');
			var wrapperStyle = this.props.style || {};
			wrapperStyle.display = 'inline-block';
			var inputStyle = this.props.inputStyle || {};
			inputStyle.width = this.state.inputWidth;
			var placeholder = this.props.placeholder ? React.createElement('div', { ref: 'placeholderSizer', style: sizerStyle }, this.props.placeholder) : null;
			return React.createElement('div', { className: this.props.className, style: wrapperStyle }, React.createElement('input', _extends({}, this.props, { ref: 'input', className: this.props.inputClassName, style: inputStyle })), React.createElement('div', { ref: 'sizer', style: sizerStyle, dangerouslySetInnerHTML: { __html: escapedValue } }), placeholder);
		}
	});

	module.exports = AutosizeInput;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	'use strict';

	(function () {
		'use strict';

		function classNames() {

			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);

	var Value = React.createClass({

		displayName: 'Value',

		propTypes: {
			disabled: React.PropTypes.bool,
			onOptionLabelClick: React.PropTypes.func,
			onRemove: React.PropTypes.func,
			option: React.PropTypes.object.isRequired,
			optionLabelClick: React.PropTypes.bool,
			renderer: React.PropTypes.func
		},

		blockEvent: function blockEvent(event) {
			event.stopPropagation();
		},

		handleOnRemove: function handleOnRemove(event) {
			if (!this.props.disabled) {
				this.props.onRemove(event);
			}
		},

		render: function render() {
			var label = this.props.option.label;
			if (this.props.renderer) {
				label = this.props.renderer(this.props.option);
			}

			if (this.props.optionLabelClick) {
				label = React.createElement('a', { className: 'Select-item-label__a',
					onMouseDown: this.blockEvent,
					onTouchEnd: this.props.onOptionLabelClick,
					onClick: this.props.onOptionLabelClick }, label);
			}

			return React.createElement('div', { className: 'Select-item' }, React.createElement('span', { className: 'Select-item-icon',
				onMouseDown: this.blockEvent,
				onClick: this.handleOnRemove,
				onTouchEnd: this.handleOnRemove }, '×'), React.createElement('span', { className: 'Select-item-label' }, label));
		}

	});

	module.exports = Value;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _AutocompleteView2 = __webpack_require__(9);

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
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _AutocompleteView2 = __webpack_require__(9);

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