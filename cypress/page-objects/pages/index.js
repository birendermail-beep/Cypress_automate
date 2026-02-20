"use strict";

exports.__esModule = true;
exports.Navbar = exports.InstructorPage = exports.CreateArea = exports.EditorPage = exports.FocusArea = exports.LiveLabArea = exports.OrderbookPage = exports.SalesArea = exports.StudentPage = exports.AdminArea = exports.login_username = exports.login_password = exports.LoginPage = undefined;

var _NavBar2 = require("../components/Navbar");
var NavBar = _interopRequireDefault(_NavBar2);

var _AdminArea2 = require("./AdminArea");
var _AdminArea3 = _interopRequireDefault(_AdminArea2);

var _config2 = require("../../../config");
var login_username = _interopRequireDefault(_config2.login_username);
var login_password = _interopRequireDefault(_config2.login_password);

var _LoginPage2 = require("./LoginPage");
var _LoginPage3 = _interopRequireDefault(_LoginPage2);

var _InstructorPage2 = require("./InstructorPage");
var _InstructorPage3 = _interopRequireDefault(_InstructorPage2);

var _createArea2 = require("./CreateArea");
var _createArea3 = _interopRequireDefault(_createArea2);

var _Editorpage2 = require("./EditorPage");
var _Editorpage3 = _interopRequireDefault(_Editorpage2);

var _FocusArea2 = require("./FocusArea");
var _FocusArea3 = _interopRequireDefault(_FocusArea2);

var _LiveLabArea2 = require("./LiveLabArea");
var _LiveLabArea3 = _interopRequireDefault(_LiveLabArea2);

var _OrderbookPage2 = require("./OrderbookPage");
var _OrderbookPage3 = _interopRequireDefault(_OrderbookPage2);

var _SalesArea2 = require("./SalesArea");
var _SalesArea3 = _interopRequireDefault(_SalesArea2);

var _StudentPage2 = require("./StudentPage");
var _StudentPage3 = _interopRequireDefault(_StudentPage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Navbar = NavBar.default;
exports.login_username = login_username.default;
exports.login_password = login_password.default;
exports.AdminArea = _AdminArea3.default;
exports.LoginPage = _LoginPage3.default;
exports.InstructorPage = _InstructorPage3.default;
exports.CreateArea = _createArea3.default;
exports.EditorPage = _Editorpage3.default;
exports.FocusArea = _FocusArea3.default;
exports.LiveLabArea = _LiveLabArea3.default;
exports.OrderbookPage = _OrderbookPage3.default;
exports.SalesArea = _SalesArea3.default;
exports.StudentPage = _StudentPage3.default;