var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var PacBurgerMenu = /** @class */ (function () {
    function PacBurgerMenu(rawMenuItems) {
        this.menuItems = this._createMenuItems(rawMenuItems);
        this._createPacBurger();
        this._addStyles();
        this._addToggleEvent();
    }
    PacBurgerMenu.prototype._createMenuItems = function (items) {
        return items.map(function (item) {
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.href = item.href;
            a.textContent = item.label;
            li.appendChild(a);
            return li;
        });
    };
    PacBurgerMenu.prototype._createPacBurger = function () {
        var pacburgerDiv = document.createElement("div");
        pacburgerDiv.className = "__pacburger";
        var nav = document.createElement("nav");
        nav.className = "active";
        nav.id = "nav";
        var ul = document.createElement("ul");
        this.menuItems.forEach(function (li) {
            ul.appendChild(li);
        });
        var button = document.createElement("button");
        button.className = "icon";
        button.id = "toggle";
        var circleDiv = document.createElement("div");
        circleDiv.className = "circle";
        var pacburgerCircle = document.createElement("div");
        pacburgerCircle.id = "_pacburger__circle";
        var pacburgerTriangle = document.createElement("div");
        pacburgerTriangle.id = "_pacburger__triangle";
        circleDiv.appendChild(pacburgerCircle);
        circleDiv.appendChild(pacburgerTriangle);
        button.appendChild(circleDiv);
        nav.appendChild(ul);
        nav.appendChild(button);
        pacburgerDiv.appendChild(nav);
        document.body.appendChild(pacburgerDiv);
    };
    PacBurgerMenu.prototype._addStyles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, styles, styleSheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("/style.css")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 2:
                        styles = _a.sent();
                        styleSheet = document.createElement("style");
                        styleSheet.innerText = styles;
                        document.head.appendChild(styleSheet);
                        return [2 /*return*/];
                }
            });
        });
    };
    PacBurgerMenu.prototype._addToggleEvent = function () {
        var toggle = document.getElementById("toggle");
        var nav = document.getElementById("nav");
        if (toggle && nav) {
            toggle.addEventListener("click", function () {
                nav.classList.toggle("active");
            });
        }
    };
    return PacBurgerMenu;
}());
var pacburgerList = [
    { label: "#lgsta", href: "#" },
    { label: "#2", href: "#" },
    { label: "#3", href: "#" },
    { label: "#4", href: "#" },
];
new PacBurgerMenu(pacburgerList);
