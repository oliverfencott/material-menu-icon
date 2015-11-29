'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MenuBase = require('./MenuBase');

var _MenuBase2 = _interopRequireDefault(_MenuBase);

var MenuToClose = _react2['default'].createClass({
  displayName: 'MenuToClose',

  getDefaultProps: function getDefaultProps() {
    return {
      close: false,
      style: {},
      onClick: function onClick() {}
    };
  },

  render: function render() {
    var _props = this.props;
    var close = _props.close;
    var style = _props.style;
    var onClick = _props.onClick;

    return _react2['default'].createElement(_MenuBase2['default'], {
      topBarTransform: 'rotate(45deg) scaleX(.99) translateY(176%) translateX(19.9%)',
      middleBarTransform: 'scale(0)',
      bottomBarTransform: 'rotate(135deg) scaleX(.99) translateY(172%) translateX(-19.9%)',
      alternate: close,
      style: style,
      onClick: onClick
    });
  }
});

exports['default'] = MenuToClose;
module.exports = exports['default'];