'use strict';

import React from 'react';
import MenuBase from './MenuBase';

const MenuToArrowBack = React.createClass({
  getDefaultProps: function() {
    return {
      back: false,
      style: {},
      onClick: () => {}
    };
  },

  render: function() {
    const {back, style, onClick} = this.props;

    return (
      <MenuBase
        topBarTransform='rotate(135deg) scaleX(0.63) translateY(55.9%) translateX(30.9%)'
        middleBarTransform='rotate(180deg) scaleX(0.8) translateX(-5.75%)'
        bottomBarTransform='rotate(225deg) scaleX(0.63) translateY(-55.9%) translateX(30.9%)'
        alternate={back}
        style={style}
        onClick={onClick}
      />
    );
  }
});

export default MenuToArrowBack;
