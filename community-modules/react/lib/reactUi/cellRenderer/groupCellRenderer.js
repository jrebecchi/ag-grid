// @ag-grid-community/react v27.0.1
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@ag-grid-community/core");
const react_1 = __importStar(require("react"));
const beansContext_1 = require("../beansContext");
const jsComp_1 = require("../jsComp");
const utils_1 = require("../utils");
const GroupCellRenderer = (props) => {
    const context = react_1.useContext(beansContext_1.BeansContext).context;
    const eGui = react_1.useRef(null);
    const eValueRef = react_1.useRef(null);
    const eCheckboxRef = react_1.useRef(null);
    const eExpandedRef = react_1.useRef(null);
    const eContractedRef = react_1.useRef(null);
    const [innerCompDetails, setInnerCompDetails] = react_1.useState();
    const [childCount, setChildCount] = react_1.useState();
    const [value, setValue] = react_1.useState();
    const [cssClasses, setCssClasses] = react_1.useState(new utils_1.CssClasses());
    const [expandedCssClasses, setExpandedCssClasses] = react_1.useState(new utils_1.CssClasses());
    const [contractedCssClasses, setContractedCssClasses] = react_1.useState(new utils_1.CssClasses());
    const [checkboxCssClasses, setCheckboxCssClasses] = react_1.useState(new utils_1.CssClasses());
    react_1.useEffect(() => {
        return jsComp_1.showJsComp(innerCompDetails, context, eValueRef.current);
    }, [innerCompDetails]);
    react_1.useEffect(() => {
        const compProxy = {
            setInnerRenderer: (details, valueToDisplay) => {
                setInnerCompDetails(details);
                setValue(valueToDisplay);
            },
            setChildCount: count => setChildCount(count),
            addOrRemoveCssClass: (name, on) => setCssClasses(prev => prev.setClass(name, on)),
            setContractedDisplayed: displayed => setContractedCssClasses(prev => prev.setClass('ag-hidden', !displayed)),
            setExpandedDisplayed: displayed => setExpandedCssClasses(prev => prev.setClass('ag-hidden', !displayed)),
            setCheckboxVisible: visible => {
                setCheckboxCssClasses(prev => prev.setClass('ag-invisible', !visible));
            }
        };
        const ctrl = context.createBean(new core_1.GroupCellRendererCtrl());
        ctrl.init(compProxy, eGui.current, eCheckboxRef.current, eExpandedRef.current, eContractedRef.current, GroupCellRenderer, props);
        return () => {
            context.destroyBean(ctrl);
        };
    }, []);
    const className = react_1.useMemo(() => `ag-cell-wrapper ${cssClasses.toString()}`, [cssClasses]);
    const expandedClassName = react_1.useMemo(() => `ag-group-expanded ${expandedCssClasses.toString()}`, [expandedCssClasses]);
    const contractedClassName = react_1.useMemo(() => `ag-group-contracted ${contractedCssClasses.toString()}`, [contractedCssClasses]);
    const checkboxClassName = react_1.useMemo(() => `ag-group-checkbox ${checkboxCssClasses.toString()}`, [checkboxCssClasses]);
    const useFwRenderer = innerCompDetails && innerCompDetails.componentFromFramework;
    const FwRenderer = useFwRenderer ? innerCompDetails.componentClass : undefined;
    const useValue = innerCompDetails == null && value != null;
    return (react_1.default.createElement("span", Object.assign({ className: className, ref: eGui }, (!props.colDef ? { role: 'gridcell' } : {})),
        react_1.default.createElement("span", { className: expandedClassName, ref: eExpandedRef }),
        react_1.default.createElement("span", { className: contractedClassName, ref: eContractedRef }),
        react_1.default.createElement("span", { className: checkboxClassName, ref: eCheckboxRef }),
        react_1.default.createElement("span", { className: "ag-group-value", ref: eValueRef },
            useValue && react_1.default.createElement(react_1.default.Fragment, null, value),
            useFwRenderer && react_1.default.createElement(FwRenderer, Object.assign({}, innerCompDetails.params))),
        react_1.default.createElement("span", { className: "ag-group-child-count" }, childCount)));
};
exports.default = react_1.memo(GroupCellRenderer);

//# sourceMappingURL=groupCellRenderer.js.map