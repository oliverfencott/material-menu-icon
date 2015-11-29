'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var MenuBase = _react2['default'].createClass({
  displayName: 'MenuBase',

  getDefaultProps: function getDefaultProps() {
    return {
      alternate: false,
      style: {},
      onClick: function onClick() {}
    };
  },

  render: function render() {
    var _props = this.props;
    var style = _props.style;
    var alternate = _props.alternate;
    var onClick = _props.onClick;
    var topBarTransform = _props.topBarTransform;
    var middleBarTransform = _props.middleBarTransform;
    var bottomBarTransform = _props.bottomBarTransform;

    var backgroundColor = style.color || 'rgba(0, 0, 0, 0.87)';
    var size = style.fontSize || '100%';
    var transition = style.transition || 'all 250ms cubic-bezier(0.23, 1, 0.32, 1)';
    var position = 'absolute';
    var left = '12.5%';
    var height = '8.4%';
    var width = '75%';

    var styles = {
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
        position: position,
        top: '25%',
        left: left,
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        transition: transition,
        transform: alternate ? topBarTransform : ''
      },
      middleBar: {
        position: position,
        top: '45.8%',
        left: left,
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        transition: transition,
        transform: alternate ? middleBarTransform : ''
      },
      bottomBar: {
        position: position,
        top: '66.5%',
        left: left,
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        transition: transition,
        transform: alternate ? bottomBarTransform : ''
      }
    };
    return _react2['default'].createElement(
      'div',
      { style: styles.container, onClick: onClick },
      _react2['default'].createElement('div', { style: styles.topBar }),
      _react2['default'].createElement('div', { style: styles.middleBar }),
      _react2['default'].createElement('div', { style: styles.bottomBar })
    );
  }
});

exports['default'] = MenuBase;
module.exports = exports['default'];