'use strict';

import React from 'react';
import MenuBase from './MenuBase';

const MenuToClose = React.createClass({
  getDefaultProps: function() {
    return {
      close: false,
      style: {},
      onClick: () => {}
    };
  },

  render: function() {
    const {close, style, onClick} = this.props;

    return (
      <MenuBase
        topBarTransform='rotate(45deg) scaleX(.99) translateY(176%) translateX(19.9%)'
        middleBarTransform='scale(0)'
        bottomBarTransform='rotate(135deg) scaleX(.99) translateY(172%) translateX(-19.9%)'
        alternate={close}
        style={style}
        onClick={onClick}
      />
    );
  }
});

export default MenuToClose;
