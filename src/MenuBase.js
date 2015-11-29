'use strict';

import React from 'react';

const MenuBase = React.createClass({
  getDefaultProps: function() {
    return {
      alternate: false,
      style: {},
      onClick: () => {}
    };
  },

  render: function() {
    const {
      style,
      alternate,
      onClick,
      topBarTransform,
      middleBarTransform,
      bottomBarTransform
    } = this.props;

    const backgroundColor = style.color || 'rgba(0, 0, 0, 0.87)';
    const size = style.fontSize || '100%';
    const transition = style.transition || 'all 250ms cubic-bezier(0.23, 1, 0.32, 1)';
    const position = 'absolute';
    const left = '12.5%';
    const height = '8.4%';
    const width = '75%';

    const styles = {
      container: {
        position: 'relative',
        height: size,
        width: size,
        backgroundColor: 'inherit',
        borderRadius: 2,
        cursor: 'pointer',
        display: 'inline-block'
      },
      topBar: {
        position,
        top: '25%',
        left,
        height,
        width,
        backgroundColor,
        transition,
        transform: alternate ? topBarTransform : ''
      },
      middleBar: {
        position,
        top: '45.8%',
        left,
        height,
        width,
        backgroundColor,
        transition,
        transform: alternate ? middleBarTransform : ''
      },
      bottomBar: {
        position,
        top: '66.5%',
        left,
        height,
        width,
        backgroundColor,
        transition,
        transform: alternate ? bottomBarTransform : ''
      }
    };
    return (
      <div style={styles.container} onClick={onClick}>
        <div style={styles.topBar} />
        <div style={styles.middleBar} />
        <div style={styles.bottomBar} />
      </div>
    );
  }
});

export default MenuBase;
