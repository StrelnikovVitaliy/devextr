import React from 'react'

import service from './data.js';
import {TreeView} from 'devextreme-react'

class NavigationList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.products = service.getProducts();
    this.state = {
      currentItem: Object.assign({}, this.products[0])
    };
    this.selectItem = this.selectItem.bind(this);
  }
  selectItem(e) {
    this.setState({
      currentItem: Object.assign({}, e.itemData)
    });
  }
  renderTreeViewItem = (value)=> {
    return <div className={`dx-icon-content dx-treeview-item-content`}><i className={`dx-icon dx-icon-${value.icon}`}></i><span>{value.text}</span></div>;
  }

  render() {
    const {opened, toggleAside} = this.props
    const widthOpened = opened ? 'auto' : '30px'
    return (
      <div className={'list'}>
        <div className="search-bar" style={{width: `${widthOpened}`}}>
          <i className="fa fa-search" style={{position: 'absolute'}} onClick={opened ? '' : toggleAside}></i>
          <input type="text" placeholder={'Search'} style={{border: 'none', width: '100%', paddingLeft: '35px'}}/>
        </div>
        <TreeView
          items={this.products}
          width={350}
          onItemClick={this.selectItem}
          hint={"Text"}
          itemRender={this.renderTreeViewItem}
        />
      </div>
    )
  }
}

export default NavigationList
