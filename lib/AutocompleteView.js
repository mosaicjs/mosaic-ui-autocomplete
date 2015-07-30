import React from 'react';

export default class AutocompleteView {
    
    constructor(options, item){
        this.options = options || {};
        this.item = item;
    }
    
    /** Returns the identifier of the item as a value for the auto-completion box */
    get value(){ return this.item.id; }

    /** Returns a new representation for this item. */
    renderView(){
        return <span>{this.item.id}</span>;
    }
}