import React from 'react';
import Promise from 'promise';
import Select from 'react-select';
import SelectionView from './SelectionView';
import SuggestionView from './SuggestionView';

var requestId = 0;
class FixedAsync extends Select.Async {
    
    getResponseHandler(input) {
        var _this = this;
        var _requestId = this._currentRequestId = requestId++;
        return function (err, data) {
            if (err) throw err;
            if (!_this.isMounted()) return;
            updateCache(_this.state.cache, input, data);
            if (_requestId !== _this._currentRequestId) return;
            _this.setState({
                isLoading: false,
                options: (data ? data.options || [] : [])
            });
        };
    }
}

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
export default class AutocompleteBox extends React.Component {

    constructor(...params){
        super(...params);
        const that = this;
        that._search = that._search.bind(that);
        that._formatSelectedValue = that._formatSelectedValue.bind(that);
        that._formatSuggestionValue = that._formatSuggestionValue.bind(that);
        that._filterSuggestionValues = that._filterSuggestionValues.bind(that);
        that._onUpdate = that._onUpdate.bind(that);
        that._onSelectionUpdate = that._onSelectionUpdate.bind(that);
        let s = that.props.search;
        if (typeof s === 'object' && typeof s.search === 'function') {
            s = s.search.bind(s);
        } else if (typeof s !== 'function') {
            throw new Error('The "search" method is not defined.');
        }
        that._doSearch  = function(input){
            return Promise.resolve().then(function(){
                return s(input);
            });
        };
    }
    componentWillMount(){
        const selection = this.props.selected;
        selection.addListener('update', this._onSelectionUpdate);
        this.state = {
            views : this._getSelectedItemViews()
        };
    }
    componentWillUnmount(){
        const selection = this.props.selected;
        selection.removeListener('update', this._onSelectionUpdate);
    }
    _getSelectedItemViews(){
        const selected = this.props.selected;
        return selected.map(function(item){
            const view = item.getAdapter(SelectionView);
            return view;
        });
    }
    _onSelectionUpdate(intent){
        intent.then(function(){
            this.setState({ views : this._getSelectedItemViews() });
        }.bind(this))
    }
    _search(input, callback){
        const that = this;
        that._doSearch(input).then(function(dataset){
            const list = dataset.map(function(item){
                const view = item.getAdapter(SuggestionView);
                return view;
            });
            callback(null, {
               complete : false,
               options: list
            });
       });
    }
    
    _formatSelectedValue(suggestionView){
        if (!suggestionView || !suggestionView.item)
            return ;
        const selectionView = suggestionView.item.getAdapter(SelectionView); 
        return selectionView.renderView();
    }
    _formatSuggestionValue(view){
        return view.renderView();
    }
    _filterSuggestionValues(list, filterValue, exclude){
        let result = [];
        if (list && list.length){
            let index = {};
            if (exclude && exclude.length){
                exclude.forEach(function(excluded){
                    index[excluded] = true;
                });
            }
            list.forEach(function(item){
                if (!index[item.value]) {
                    result.push(item);
                }
            });
        }
        return result;
    }
    _onUpdate(values){
        console.log('>>>>', values);
        const selection = this.props.selected;
        const items = values.map(function(w){
            return w.item;
        });
        selection.setItems(items);
    }
    
    shouldComponentUpdate(){
        const selected = this.props.selected;
        return this.lastRenderedRevision !== selected.version; 
    }

    render() {
        const selectOptions = this.props.selectOptions || {};
        const selected = this.props.selected;
        this.lastRenderedRevision = selected.version;
        const views = this.state.views;
        return (
            <FixedAsync
//                key={this.props.key}
//                ref="select"
                multi={true}
                ignoreAccents={true}
                ignoreCase={true}
                clearable={true}
                searchable={true}
                autoload={true}
                cache={null}
                isLoading={false}
                loadOptions={this._search}
                optionRenderer={this._formatSuggestionValue}
                valueRenderer={this._formatSelectedValue}
                filterOptions={this._filterSuggestionValues}
                minimumInput={0}
                onChange={this._onUpdate}
                value={views}
                {...selectOptions}
            />
        );
    }
}