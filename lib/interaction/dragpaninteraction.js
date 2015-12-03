"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var ol = _interopRequire(require("openlayers"));

var DragPan = (function (_ol$interaction$Pointer) {
  function DragPan(onDrag) {
    _classCallCheck(this, DragPan);

    var handleDownEvent = function handleDownEvent() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.handleDownEvent.apply(this, args);
    };
    var handleDragEvent = function handleDragEvent() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.handleDragEvent.apply(this, args);
    };
    var handleUpEvent = function handleUpEvent() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.handleUpEvent.apply(this, args);
    };

    _get(Object.getPrototypeOf(DragPan.prototype), "constructor", this).call(this, {
      handleDownEvent: handleDownEvent,
      handleDragEvent: handleDragEvent,
      handleUpEvent: handleUpEvent
    });

    this.onDrag = onDrag;
  }

  _inherits(DragPan, _ol$interaction$Pointer);

  _createClass(DragPan, {
    handleDownEvent: {
      value: function handleDownEvent(mapBrowserEvent) {
        this.pinnedUnderMouse = mapBrowserEvent.coordinate;
        return true;
      }
    },
    handleDragEvent: {
      value: function handleDragEvent(mapBrowserEvent) {
        this.dragTo(mapBrowserEvent.coordinate, mapBrowserEvent.map.getView().getCenter());
      }
    },
    handleUpEvent: {
      value: function handleUpEvent(mapBrowserEvent) {
        this.dragTo(mapBrowserEvent.coordinate, mapBrowserEvent.map.getView().getCenter());
        delete this.pinnedUnderMouse;
        return true;
      }
    },
    dragTo: {
      value: function dragTo(newCoordinate, currentCenter) {
        var deltaX = newCoordinate[0] - this.pinnedUnderMouse[0];
        var deltaY = newCoordinate[1] - this.pinnedUnderMouse[1];

        var newCenter = [currentCenter[0] - deltaX, currentCenter[1] - deltaY];

        this.onDrag(newCenter);
      }
    }
  });

  return DragPan;
})(ol.interaction.Pointer);

module.exports = DragPan;