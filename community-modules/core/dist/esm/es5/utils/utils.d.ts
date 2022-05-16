// Type definitions for @ag-grid-community/core v27.3.0
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import * as AriaUtils from './aria';
export declare const _: {
    utf8_encode(s: string | null): string;
    camelCaseToHyphen(str: string): string | null;
    hyphenToCamelCase(str: string): string | null;
    capitalise(str: string): string;
    escapeString(toEscape?: string | null | undefined): string | null;
    camelCaseToHumanText(camelCase: string | undefined): string | null;
    convertToSet<T>(list: T[]): Set<T>;
    sortRowNodesByOrder(rowNodes: import("../main").RowNode[], rowNodeOrder: {
        [id: string]: number;
    }): void;
    traverseNodesWithKey(nodes: import("../main").RowNode[] | null, callback: (node: import("../main").RowNode, key: string) => void): void;
    iterateObject<T_1>(object: {
        [p: string]: T_1;
    } | T_1[] | null | undefined, callback: (key: string, value: T_1) => void): void;
    cloneObject<T_2 extends {}>(object: T_2): T_2;
    deepCloneObject<T_3>(object: T_3): T_3;
    deepCloneDefinition<T_4>(object: T_4, keysToSkip?: string[] | undefined): T_4 | undefined;
    getProperty<T_5, K extends keyof T_5>(object: T_5, key: K): any;
    setProperty<T_6, K_1 extends keyof T_6>(object: T_6, key: K_1, value: any): void;
    copyPropertiesIfPresent<S, T_7 extends S, K_2 extends keyof S>(source: S, target: T_7, ...properties: K_2[]): void;
    copyPropertyIfPresent<S_1, T_8 extends S_1, K_3 extends keyof S_1>(source: S_1, target: T_8, property: K_3, transform?: ((value: S_1[K_3]) => any) | undefined): void;
    getAllKeysInObjects(objects: any[]): string[];
    getAllValuesInObject<T_9 extends Object>(obj: T_9): any[];
    mergeDeep(dest: any, source: any, copyUndefined?: boolean, makeCopyOfSimpleObjects?: boolean): void;
    missingOrEmptyObject(value: any): boolean;
    get(source: any, expression: string, defaultValue: any): any;
    set(target: any, expression: string, value: any): void;
    deepFreeze(object: any): any;
    getValueUsingField(data: any, field: string, fieldContainsDots: boolean): any;
    removeAllReferences(obj: any, objectName: string): void;
    isNonNullObject(value: any): boolean;
    padStartWidthZeros(value: number, totalStringSize: number): string;
    createArrayOfNumbers(first: number, last: number): number[];
    isNumeric(value: any): boolean;
    cleanNumber(value: any): number | null;
    decToHex(number: number, bytes: number): string;
    formatNumberTwoDecimalPlacesAndCommas(value: number, thousandSeparator: string, decimalSeparator: string): string;
    formatNumberCommas(value: number, thousandSeparator: string, decimalSeparator: string): string;
    sum(values: number[] | null): number | null;
    areEventsNear(e1: Touch | MouseEvent, e2: Touch | MouseEvent, pixelCount: number): boolean;
    convertToMap<K_4, V>(arr: [K_4, V][]): Map<K_4, V>;
    mapById<V_1>(arr: V_1[], callback: (obj: V_1) => string): Map<string, V_1>;
    keys<T_10>(map: Map<T_10, any>): T_10[];
    isEventFromPrintableCharacter(event: KeyboardEvent): boolean;
    isUserSuppressingKeyboardEvent(gridOptionsWrapper: import("../gridOptionsWrapper").GridOptionsWrapper, keyboardEvent: KeyboardEvent, rowNode: import("../main").RowNode, column: import("../main").Column, editing: boolean): boolean;
    isUserSuppressingHeaderKeyboardEvent(gridOptionsWrapper: import("../gridOptionsWrapper").GridOptionsWrapper, keyboardEvent: KeyboardEvent, headerRowIndex: number, column: import("../main").Column | import("../main").ColumnGroup): boolean;
    createIcon(iconName: string, gridOptionsWrapper: import("../gridOptionsWrapper").GridOptionsWrapper, column: import("../main").Column | null): HTMLElement;
    createIconNoSpan(iconName: string, gridOptionsWrapper: import("../gridOptionsWrapper").GridOptionsWrapper, column?: import("../main").Column | null | undefined, forceCreate?: boolean | undefined): HTMLElement | undefined;
    iconNameClassMap: {
        [key: string]: string;
    };
    makeNull<T_11 extends unknown>(value?: T_11 | undefined): T_11 | null;
    exists(value: string | null | undefined, allowEmptyString?: boolean | undefined): value is string;
    exists<T_12>(value: T_12): value is NonNullable<T_12>;
    missing<T_13>(value: T_13 | null | undefined): value is Exclude<undefined, T_13> | Exclude<null, T_13>;
    missingOrEmpty<T_14>(value?: string | T_14[] | null | undefined): boolean;
    toStringOrNull(value: any): string | null;
    attrToNumber(value?: string | number | null | undefined): number | null | undefined;
    attrToBoolean(value?: string | boolean | null | undefined): boolean | undefined;
    attrToString(value?: string | undefined): string | undefined;
    referenceCompare<T_15>(left: T_15, right: T_15): boolean;
    jsonEquals<T1, T2>(val1: T1, val2: T2): boolean;
    defaultComparator(valueA: any, valueB: any, accentedCompare?: boolean): number;
    values<T_16>(object: {
        [key: string]: T_16;
    } | Set<T_16> | Map<any, T_16>): T_16[];
    fuzzyCheckStrings(inputValues: string[], validValues: string[], allSuggestions: string[]): {
        [p: string]: string[];
    };
    fuzzySuggestions(inputValue: string, allSuggestions: string[], hideIrrelevant?: boolean | undefined, weighted?: boolean | undefined): string[];
    get_bigrams(from: string): any[];
    string_distances(str1: string, str2: string): number;
    string_weighted_distances(str1: string, str2: string): number;
    doOnce(func: () => void, key: string): void;
    getFunctionName(funcConstructor: any): any;
    getFunctionParameters(func: any): any;
    isFunction(val: any): boolean;
    executeInAWhile(funcs: Function[]): void;
    executeNextVMTurn(func: () => void): void;
    executeAfter(funcs: Function[], milliseconds?: number): void;
    debounce(func: (...args: any[]) => void, wait: number, immediate?: boolean): (...args: any[]) => void;
    throttle(func: (...args: any[]) => void, wait: number): (...args: any[]) => void;
    waitUntil(condition: () => boolean, callback: () => void, timeout?: number, timeoutMessage?: string | undefined): void;
    compose(...fns: Function[]): (arg: any) => any;
    callIfPresent(func: Function): void;
    stopPropagationForAgGrid(event: Event): void;
    isStopPropagationForAgGrid(event: Event): boolean;
    getCtrlForEvent<T_17>(gridOptionsWrapper: import("../gridOptionsWrapper").GridOptionsWrapper, event: Event, type: string): T_17 | null;
    addChangeListener(element: HTMLElement, listener: EventListener): void;
    isElementInEventPath(element: HTMLElement, event: Event): boolean;
    createEventPath(event: Event): EventTarget[];
    addAgGridEventPath(event: Event): void;
    getEventPath(event: Event): EventTarget[];
    addSafePassiveEventListener(frameworkOverrides: import("../main").IFrameworkOverrides, eElement: HTMLElement, event: string, listener: (event?: any) => void): void;
    isEventSupported: (eventName: any) => boolean;
    radioCssClass(element: HTMLElement, elementClass: string | null, otherElementClass?: string | null | undefined): void;
    isFocusableFormField(element: HTMLElement): boolean;
    setDisplayed(element: HTMLElement, displayed: boolean): void;
    setVisible(element: HTMLElement, visible: boolean): void;
    setDisabled(element: HTMLElement, disabled: boolean): void;
    isElementChildOfClass(element: HTMLElement | null, cls: string, maxNest?: number | undefined): boolean;
    getElementSize(el: HTMLElement): {
        height: number;
        width: number;
        paddingTop: number;
        paddingRight: number;
        paddingBottom: number;
        paddingLeft: number;
        marginTop: number;
        marginRight: number;
        marginBottom: number;
        marginLeft: number;
        boxSizing: string;
    };
    getInnerHeight(el: HTMLElement): number;
    getInnerWidth(el: HTMLElement): number;
    getAbsoluteHeight(el: HTMLElement): number;
    getAbsoluteWidth(el: HTMLElement): number;
    isRtlNegativeScroll(): boolean;
    getScrollLeft(element: HTMLElement, rtl: boolean): number;
    setScrollLeft(element: HTMLElement, value: number, rtl: boolean): void;
    clearElement(el: HTMLElement): void;
    removeElement(parent: HTMLElement, cssSelector: string): void;
    removeFromParent(node: Element | null): void;
    isVisible(element: HTMLElement): boolean;
    loadTemplate(template: string): HTMLElement;
    appendHtml(eContainer: HTMLElement, htmlTemplate: string): void;
    getElementAttribute(element: any, attributeName: string): string | null;
    offsetHeight(element: HTMLElement): number;
    offsetWidth(element: HTMLElement): number;
    ensureDomOrder(eContainer: HTMLElement, eChild: HTMLElement, eChildBefore?: HTMLElement | null | undefined): void;
    setDomChildOrder(eContainer: HTMLElement, orderedChildren: (HTMLElement | null)[]): void;
    insertWithDomOrder(eContainer: HTMLElement, eToInsert: HTMLElement, eChildBefore: HTMLElement | null): void;
    prependDC(parent: HTMLElement, documentFragment: DocumentFragment): void;
    addStylesToElement(eElement: any, styles: any): void;
    isHorizontalScrollShowing(element: HTMLElement): boolean;
    isVerticalScrollShowing(element: HTMLElement): boolean;
    setElementWidth(element: HTMLElement, width: string | number): void;
    setFixedWidth(element: HTMLElement, width: string | number): void;
    setElementHeight(element: HTMLElement, height: string | number): void;
    setFixedHeight(element: HTMLElement, height: string | number): void;
    formatSize(size: string | number): string;
    isNode(o: any): boolean;
    isElement(o: any): boolean;
    isNodeOrElement(o: any): boolean;
    copyNodeList(nodeList: NodeListOf<Node> | null): Node[];
    iterateNamedNodeMap(map: NamedNodeMap, callback: (key: string, value: string) => void): void;
    setCheckboxState(eCheckbox: HTMLInputElement, state: any): void;
    addOrRemoveAttribute(element: HTMLElement, name: string, value: any): void;
    nodeListForEach<T_18 extends Node>(nodeList: NodeListOf<T_18> | null, action: (value: T_18) => void): void;
    serialiseDate(date: Date | null, includeTime?: boolean, separator?: string): string | null;
    parseDateTimeFromString(value?: string | null | undefined): Date | null;
    stringToArray(strData: string, delimiter?: string): string[][];
    isBrowserEdge(): boolean;
    isBrowserSafari(): boolean;
    isBrowserChrome(): boolean;
    isBrowserFirefox(): boolean;
    isIOSUserAgent(): boolean;
    getTabIndex(el: HTMLElement | null): string | null;
    getMaxDivHeight(): number;
    getScrollbarWidth(): number | null;
    isInvisibleScrollbar(): boolean;
    hasOverflowScrolling(): boolean;
    getBodyWidth(): number;
    getBodyHeight(): number;
    firstExistingValue<A>(...values: A[]): A | null;
    existsAndNotEmpty<T_19>(value?: T_19[] | undefined): boolean;
    last<T_20>(arr: T_20[]): T_20;
    last<T_21 extends Node>(arr: NodeListOf<T_21>): T_21;
    areEqual<T_22>(a?: T_22[] | null | undefined, b?: T_22[] | null | undefined, comparator?: ((a: T_22, b: T_22) => boolean) | undefined): boolean;
    compareArrays(array1?: any[] | undefined, array2?: any[] | undefined): boolean;
    shallowCompare(arr1: any[], arr2: any[]): boolean;
    sortNumerically(array: number[]): number[];
    removeRepeatsFromArray<T_23>(array: T_23[], object: T_23): void;
    removeFromArray<T_24>(array: T_24[], object: T_24): void;
    removeAllFromArray<T_25>(array: T_25[], toRemove: T_25[]): void;
    insertIntoArray<T_26>(array: T_26[], object: T_26, toIndex: number): void;
    insertArrayIntoArray<T_27>(dest: T_27[], src: T_27[], toIndex: number): void;
    moveInArray<T_28>(array: T_28[], objectsToMove: T_28[], toIndex: number): void;
    includes<T_29>(array: T_29[], value: T_29): boolean;
    flatten(arrayOfArrays: any[]): any[];
    pushAll<T_30>(target: T_30[], source: T_30[]): void;
    toStrings<T_31>(array: T_31[]): (string | null)[] | null;
    forEachReverse<T_32>(list: T_32[], action: (value: T_32, index: number) => void): void;
    setAriaRole(element: HTMLElement, role?: string | null | undefined): void;
    getAriaSortState(column: import("../main").Column): AriaUtils.ColumnSortState;
    getAriaLevel(element: HTMLElement): number;
    getAriaPosInSet(element: HTMLElement): number;
    getAriaDescribedBy(element: HTMLElement): string;
    setAriaLabel(element: HTMLElement, label?: string | undefined): void;
    setAriaLabelledBy(element: HTMLElement, labelledBy: string): void;
    setAriaDescription(element: HTMLElement, description?: string | undefined): void;
    setAriaDescribedBy(element: HTMLElement, describedby: string | undefined): void;
    setAriaLevel(element: HTMLElement, level: number): void;
    setAriaDisabled(element: HTMLElement, disabled: boolean): void;
    setAriaExpanded(element: HTMLElement, expanded: boolean): void;
    removeAriaExpanded(element: HTMLElement): void;
    setAriaSetSize(element: HTMLElement, setsize: number): void;
    setAriaPosInSet(element: HTMLElement, position: number): void;
    setAriaMultiSelectable(element: HTMLElement, multiSelectable: boolean): void;
    setAriaRowCount(element: HTMLElement, rowCount: number): void;
    setAriaRowIndex(element: HTMLElement, rowIndex: number): void;
    setAriaColCount(element: HTMLElement, colCount: number): void;
    setAriaColIndex(element: HTMLElement, colIndex: number): void;
    setAriaColSpan(element: HTMLElement, colSpan: number): void;
    setAriaSort(element: HTMLElement, sort: AriaUtils.ColumnSortState): void;
    removeAriaSort(element: HTMLElement): void;
    setAriaSelected(element: HTMLElement, selected: boolean | undefined): void;
    setAriaChecked(element: HTMLElement, checked?: boolean | undefined): void;
    getNameOfClass(theClass: any): string;
    findLineByLeastSquares(values: number[]): number[];
    cssStyleObjectToMarkup(stylesToUse: any): string;
    message(msg: string): void;
    bindCellRendererToHtmlElement(cellRendererPromise: import("./promise").AgPromise<import("../main").ICellRendererComp>, eTarget: HTMLElement): void;
};
