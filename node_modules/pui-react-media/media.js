/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var classnames = require('classnames');
require('pui-css-media');

var types = React.PropTypes;

var shortSizes = { xsmall: 'xs', small: 'sm', medium: 'md', large: 'lg', xlarge: 'xl' };
var charSizes = { small: 's', medium: 'm', large: 'l', xlarge: 'xl' };
var paddingDirection = { left: 'r', right: 'l' };

var Media = function (_React$Component) {
  _inherits(Media, _React$Component);

  function Media() {
    _classCallCheck(this, Media);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Media).apply(this, arguments));
  }

  _createClass(Media, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var innerClassName = _props.innerClassName;
      var image = _props.image;
      var mediaSpacing = _props.mediaSpacing;
      var stackSize = _props.stackSize;
      var vAlign = _props.vAlign;
      var placement = _props.placement;
      var children = _props.children;

      var other = _objectWithoutProperties(_props, ['className', 'innerClassName', 'image', 'mediaSpacing', 'stackSize', 'vAlign', 'placement', 'children']);

      var vAlignClass = vAlign && 'media-' + vAlign;

      var classes = classnames('media', stackSize && 'media-stackable-' + shortSizes[stackSize], className);

      var bodyClasses = classnames('media-body', vAlignClass, innerClassName);

      var mediaClasses = classnames('media-' + placement, vAlignClass, 'p' + paddingDirection[placement] + charSizes[mediaSpacing]);

      var content = [React.createElement(
        'div',
        { key: 0, className: mediaClasses },
        image
      ), React.createElement(
        'div',
        { key: 1, className: bodyClasses },
        children
      )];

      if (placement === 'right') {
        content.reverse();
      }

      return React.createElement(
        'div',
        _extends({}, other, { className: classes }),
        content
      );
    }
  }]);

  return Media;
}(React.Component);

Media.propTypes = {
  image: types.node.isRequired,
  innerClassName: types.string,
  mediaSpacing: types.oneOf(['small', 'medium', 'large', 'xlarge']),
  stackSize: types.oneOf(['xsmall', 'small', 'medium', 'large']),
  vAlign: types.oneOf(['middle', 'bottom']),
  placement: types.oneOf(['left', 'right']),
  className: types.string
};
Media.defaultProps = {
  placement: 'left'
};

var Flag = function (_React$Component2) {
  _inherits(Flag, _React$Component2);

  function Flag() {
    _classCallCheck(this, Flag);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Flag).apply(this, arguments));
  }

  _createClass(Flag, [{
    key: 'render',
    value: function render() {
      return React.createElement(Media, _extends({}, this.props, { vAlign: 'middle' }));
    }
  }]);

  return Flag;
}(React.Component);

module.exports = { Media: Media, Flag: Flag };