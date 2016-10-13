/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var types = React.PropTypes;
var BsAlert = require('react-bootstrap/lib/Alert');

var _require = require('pui-react-media');

var Media = _require.Media;

require('pui-css-alerts');

var Alert = function (_React$Component) {
  _inherits(Alert, _React$Component);

  function Alert(props, context) {
    _classCallCheck(this, Alert);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Alert).call(this, props, context));

    _this.handleAlertDismiss = function () {
      var dismissable = _this.props.dismissable;

      if (typeof dismissable === 'function') dismissable();
      _this.setState({ alertVisible: false });
    };

    _this.state = { alertVisible: true };
    return _this;
  }

  _createClass(Alert, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var dismissable = _props.dismissable;
      var withIcon = _props.withIcon;
      var alertIcon = _props.alertIcon;
      var children = _props.children;

      var others = _objectWithoutProperties(_props, ['dismissable', 'withIcon', 'alertIcon', 'children']);

      if (this.state.alertVisible) {
        var onDismiss = dismissable ? this.handleAlertDismiss : null;

        if (withIcon) {
          var icon = React.createElement('i', { className: 'fa ' + alertIcon });
          children = React.createElement(
            Media,
            { className: 'mtn', image: icon },
            children
          );
        }
        return React.createElement(
          BsAlert,
          _extends({}, others, { onDismiss: onDismiss }),
          children
        );
      }

      return React.createElement('span', null);
    }
  }]);

  return Alert;
}(React.Component);

Alert.propTypes = {
  bsStyle: types.string,
  dismissable: types.oneOfType([types.bool, types.func]),
  withIcon: types.bool,
  alertIcon: types.string
};
Alert.defaultProps = {
  dismissable: false,
  withIcon: false
};


function defAlert(props) {
  var _class, _temp;

  return _temp = _class = function (_React$Component2) {
    _inherits(_class, _React$Component2);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
    }

    _createClass(_class, [{
      key: 'render',
      value: function render() {
        var _props2 = this.props;
        var children = _props2.children;

        var others = _objectWithoutProperties(_props2, ['children']);

        return React.createElement(
          Alert,
          _extends({}, props, others),
          React.createElement(
            'span',
            { className: 'sr-only' },
            (props.bsStyle === 'danger' ? 'error' : props.bsStyle) + ' alert message,'
          ),
          children
        );
      }
    }]);

    return _class;
  }(React.Component), _class.propTypes = {
    dismissable: types.oneOfType([types.bool, types.func]),
    withIcon: types.bool
  }, _temp;
}

module.exports = {
  SuccessAlert: defAlert({ bsStyle: 'success', alertIcon: 'fa-check-circle' }),
  InfoAlert: defAlert({ bsStyle: 'info', alertIcon: 'fa-info-circle' }),
  WarningAlert: defAlert({ bsStyle: 'warning', alertIcon: 'fa-exclamation-triangle' }),
  ErrorAlert: defAlert({ bsStyle: 'danger', alertIcon: 'fa-exclamation-triangle' })
};