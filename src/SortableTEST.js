import React, { FC, useState } from "react";
import { ReactSortable } from "react-sortablejs";


class Item extends React.Component {
    render() {
      return (
        <li {...this.props}>
          {this.props.children}
        </li>
      )
    }
  }
   
   
//  var SortableItem = sortable(Item);
      
export class SortableTEST extends React.Component {
 
    state = {
        items: this.props.items
      };
     
      onSortItems = (items) => {
        this.setState({
          items: items
        });
      }
     
      render() {
        const { items } = this.state;
        var listItems = items.map((item, i) => {
          return (
            <SortableItem
              key={i}
              onSortItems={this.onSortItems}
              items={items}
              sortId={i}>{item}</SortableItem>
          );
        });
     
        return (
          <ul className='sortable-list'>
            {listItems}
          </ul>
        )
      }
    };
     

export default SortableTEST