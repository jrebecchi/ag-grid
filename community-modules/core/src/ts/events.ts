import { RowNode } from './entities/rowNode';
import { Column } from './entities/column';
import { ColDef } from './entities/colDef';
import { GridApi } from './gridApi';
import { ColumnApi } from './columns/columnApi';
import { ProvidedColumnGroup } from './entities/providedColumnGroup';
import { FilterRequestSource } from './filter/filterManager';
import { ChartType } from './interfaces/iChartOptions';
import { IFilterComp } from './interfaces/iFilter';
import { CellRange, CellRangeParams } from './interfaces/IRangeService';
import { ServerSideTransactionResult } from "./interfaces/serverSideTransaction";
import { RowNodeTransaction } from "./interfaces/rowNodeTransaction";
import { AgChartThemeOverrides } from "./interfaces/iAgChartOptions";
export { Events } from './eventKeys';

export interface ModelUpdatedEvent extends AgGridEvent {
    /** If true, the grid will try and animate the rows to the new positions */
    animate: boolean | undefined;
    /** If true, the grid has new data loaded, eg user called setRowData(), otherwise
     * it's the same data but sorted or filtered, in which case this is true, and rows
     * can animate around (eg rowNode id 24 is the same row node as last time). */
    keepRenderedRows: boolean | undefined;
    /** If true, then this update was a result of setRowData() getting called. This
     * gets the grid to scroll to the top again. */
    newData: boolean | undefined;
    /** True when pagination and a new page is navigated to. */
    newPage: boolean;
}

export interface PaginationChangedEvent extends AgGridEvent {
    /** True if rows were animated to new position */
    animate?: boolean;
    /** True if rows were kept (otherwise complete redraw) */
    keepRenderedRows?: boolean;
    /** True if data was new (i.e user set new data) */
    newData?: boolean;
    /** True if user went to a new page */
    newPage: boolean;
}

export interface AgEvent {
    /** Event identifier */
    type: string;
}

export interface AgGridEvent extends AgEvent {
    api: GridApi;
    columnApi: ColumnApi;
}

export interface ToolPanelVisibleChangedEvent extends AgGridEvent {
    source: string | undefined;
}

export interface ColumnPivotModeChangedEvent extends AgGridEvent { }

export interface VirtualColumnsChangedEvent extends AgGridEvent { }

export interface ColumnEverythingChangedEvent extends AgGridEvent {
    source: string;
}

export interface NewColumnsLoadedEvent extends AgGridEvent { }

export interface GridColumnsChangedEvent extends AgGridEvent { }

export interface DisplayedColumnsChangedEvent extends AgGridEvent { }

export interface RowDataChangedEvent extends AgGridEvent { }

export interface RowDataUpdatedEvent extends AgGridEvent { }

export interface PinnedRowDataChangedEvent extends AgGridEvent { }

export interface SelectionChangedEvent extends AgGridEvent { }

export interface FilterChangedEvent extends AgGridEvent {
    /** True if the filter was changed as a result of data changing */
    afterDataChange?: boolean;
    /** True if filter was changed via floating filter */
    afterFloatingFilter?: boolean;
    /**
     * Columns affected by the filter change. Array contents depend on the source of the event.
     *
     * - Expect 1 element for UI-driven column filter changes.
     * - Expect 0-N elements (all affected columns) for calls to `gridOptions.api.setFilterModel()`.
     * - Expect 0-N elements (removed columns) for calls to `gridOptions.api.setColumnDefs()`.
     * - Expect 0 elements for quick-filters and calls to `gridOptions.api.onFilterChanged()`.
     */
    columns: Column[];
}

export interface FilterModifiedEvent extends AgGridEvent {
    filterInstance: IFilterComp;
    column: Column;
}

export interface FilterOpenedEvent extends AgGridEvent {
    /** Column / OriginalColumnGroup that contains the filter */
    column: Column | ProvidedColumnGroup;
    /** Source of the open request */
    source: FilterRequestSource;
    /** Parent element of the filter */
    eGui: HTMLElement;
}

export interface SortChangedEvent extends AgGridEvent {
    /** Source of the sort change. */
    source: string;
}

export interface GridReadyEvent extends AgGridEvent { }

export interface DisplayedColumnsWidthChangedEvent extends AgGridEvent { } // not documented
export interface ColumnHoverChangedEvent extends AgGridEvent { } // not documented
export interface BodyHeightChangedEvent extends AgGridEvent { } // not documented

// this event is 'odd one out' as it should have properties for all the properties
// in gridOptions that can be bound by the framework. for example, the gridOptions
// has 'rowData', so this property should have 'rowData' also, so that when the row
// data changes via the framework bound property, this event has that attribute set.
export interface ComponentStateChangedEvent extends AgGridEvent { }

export interface ColumnPanelItemDragStartEvent extends AgEvent {
    column: Column | ProvidedColumnGroup;
}

export interface ColumnPanelItemDragEndEvent extends AgEvent { }

export interface DragEvent extends AgGridEvent {
    /** One of {'cell','row','headerCell','toolPanel'} */
    type: string;
    /** The DOM element that started the event. */
    target: HTMLElement;
}

export interface DragStartedEvent extends DragEvent { }

export interface DragStoppedEvent extends DragEvent { }

// For internal use only.
// This event allows us to detect when other inputs in the same named group are changed, so for example we can ensure
// that only one radio button in the same group is selected at any given time.
export interface CheckboxChangedEvent extends AgEvent {
    id: string;
    name: string;
    selected?: boolean;
    previousValue: boolean | undefined;
}

export interface GridSizeChangedEvent extends AgGridEvent {
    /** The grid's DIV's clientWidth */
    clientWidth: number;
    /** The grid's DIV's clientHeight */
    clientHeight: number;
}

export interface RowDragEvent<TData = any> extends AgGridEvent {
    /** Event identifier: One of rowDragEnter, rowDragMove, rowDragEnd, rowDragLeave */
    type: string;
    /** The row node getting dragged. Also the node that started the drag when multi-row dragging. */
    node: RowNode<TData>;
    /** The list of nodes being dragged. */
    nodes: RowNode<TData>[];
    /** The underlying mouse move event associated with the drag. */
    event: MouseEvent;
    /** Direction of the drag, either `'up'`, `'down'` or `null` (if mouse is moving horizontally and not vertically). */
    vDirection: string;
    /** The row index the mouse is dragging over or -1 if over no row. */
    overIndex: number;
    /** The row node the mouse is dragging over or undefined if over no row. */
    overNode?: RowNode<TData>;
    /** The vertical pixel location the mouse is over, with `0` meaning the top of the first row.
     * This can be compared to the `rowNode.rowHeight` and `rowNode.rowTop` to work out the mouse position relative to rows.
     * The provided attributes `overIndex` and `overNode` means the `y` property is mostly redundant.
     * The `y` property can be handy if you want more information such as 'how close is the mouse to the top or bottom of the row?'
     */
    y: number;
}

export interface RowDragEnterEvent<TData = any> extends RowDragEvent<TData> { }

export interface RowDragEndEvent<TData = any> extends RowDragEvent<TData> { }

export interface RowDragMoveEvent<TData = any> extends RowDragEvent<TData> { }

export interface RowDragLeaveEvent<TData = any> extends RowDragEvent<TData> { }

export interface PasteStartEvent extends AgGridEvent {
    source: string;
}

export interface PasteEndEvent extends AgGridEvent {
    source: string;
}

export interface FillStartEvent extends AgGridEvent {
}

export interface FillEndEvent extends AgGridEvent {
    initialRange: CellRange;
    finalRange: CellRange;
}

export interface ViewportChangedEvent extends AgGridEvent {
    /** Index of the first rendered row */
    firstRow: number;
    /** Index of the last rendered row */
    lastRow: number;
}

export interface FirstDataRenderedEvent extends AgGridEvent {
    /** Index of the first rendered row */
    firstRow: number;
    /** Index of the last rendered row */
    lastRow: number;
}

export interface RangeSelectionChangedEvent extends AgGridEvent {
    id?: string;
    /** True for the first change event, otherwise false */
    started: boolean;
    /** True for the last change event, otherwise false */
    finished: boolean;
}

export interface ChartCreated extends AgGridEvent {
    /** Will always be `chartCreated`. */
    type: string;
    /** Id of the created chart. This can later be used to reference the chart via api methods. */
    chartId: string;
}

export interface ChartRangeSelectionChanged extends AgGridEvent {
    /** Will always be `chartRangeSelectionChanged`. */
    type: string;
    /** Id of the effected chart. */
    chartId: string;
    /** Same as `chartId`. */
    id: string;
    /** New cellRange selected. */
    cellRange: CellRangeParams;
}

export interface ChartOptionsChanged extends AgGridEvent {
    /** Will always be `chartOptionsChanged`. */
    type: string;
    /** Id of the effected chart. */
    chartId: string;
    /** ChartType */
    chartType: ChartType;
    /** Chart theme name of currently selected theme. */
    chartThemeName: string;
    /** Chart options.  */
    chartOptions: AgChartThemeOverrides;
}

export interface ChartDestroyed extends AgGridEvent {
    /** Will always be `chartDestroyed`. */
    type: string;
    /** Id of the effected chart. */
    chartId: string;
}

export interface ColumnGroupOpenedEvent extends AgGridEvent {
    columnGroup: ProvidedColumnGroup;
}

export interface ItemsAddedEvent<TData = any> extends AgGridEvent {
    items: RowNode<TData>[];
}

export type ScrollDirection = 'horizontal' | 'vertical';

export interface BodyScrollEvent extends AgGridEvent {
    direction: ScrollDirection;
    left: number;
    top: number;
}

export interface BodyScrollEndEvent extends BodyScrollEvent { }

// not documented
export interface FlashCellsEvent extends AgGridEvent {
    cells: any;
}

export interface PaginationPixelOffsetChangedEvent extends AgGridEvent {
}

// this does not extent CellEvent as the focus service doesn't keep a reference to
// the rowNode.
export interface CellFocusedEvent extends AgGridEvent {
    /** Row index of the focused cell */
    rowIndex: number | null;
    /** Column of the focused cell */
    column: Column | null;
    /** either 'top', 'bottom' or null / undefined (if not pinned) */
    rowPinned?: string | null;
    /** Whether the cell a full width cell or a regular cell */
    isFullWidthCell: boolean;
    /** Whether browser focus is also set (false when editing) */
    forceBrowserFocus?: boolean;
    // floating is for backwards compatibility, this is the same as rowPinned.
    // this is because the focus service doesn't keep references to rowNodes
    // as focused cell is identified by rowIndex - thus when the user re-orders
    // or filters, the focused cell stays with the index, but the node can change.
    floating: string | null;
}

export interface FullWidthRowFocusedEvent extends CellFocusedEvent {
    fromBelow: boolean;
}

export interface ExpandCollapseAllEvent extends AgGridEvent {
    source: string;
}

/**---------------*/
/** COLUMN EVENTS */
/**---------------*/

export type ColumnEventType =
    "sizeColumnsToFit" |
    "autosizeColumns" |
    "alignedGridChanged" |
    "filterChanged" |
    "filterDestroyed" |
    "gridOptionsChanged" |
    "gridInitializing" |
    "toolPanelDragAndDrop" |
    "toolPanelUi" |
    "uiColumnMoved" |
    "uiColumnResized" |
    "uiColumnDragged" |
    "uiColumnExpanded" |
    "uiColumnSorted" |
    "contextMenu" |
    "columnMenu" |
    "rowModelUpdated" |
    "rowDataUpdated" |
    "api" |
    "flex" |
    "pivotChart";

export interface ColumnEvent extends AgGridEvent {
    /** The impacted column, only set if action was on one column */
    column: Column | null;
    /** List of all impacted columns */
    columns: Column[] | null;
    /** String describing where the event is coming from */
    source: ColumnEventType;
}

export interface ColumnResizedEvent extends ColumnEvent {
    /** Set to true for last event in a sequence of move events */
    finished: boolean;
    /** Any columns resized due to flex */
    flexColumns: Column[] | null;
}

export interface ColumnPivotChangedEvent extends ColumnEvent { }

export interface ColumnRowGroupChangedEvent extends ColumnEvent { }

export interface ColumnValueChangedEvent extends ColumnEvent { }

export interface ColumnMovedEvent extends ColumnEvent {
    /** The position the column was moved to */
    toIndex?: number;
}

export interface ColumnVisibleEvent extends ColumnEvent {
    /** True if column was set to visible, false if set to hide */
    visible?: boolean;
}

export interface ColumnPinnedEvent extends ColumnEvent {
    /** Either 'left', 'right', or null (it not pinned) */
    pinned: string | null;
}

/**------------*/

/** ROW EVENTS */
/**------------*/
export interface RowEvent<TData = any> extends AgGridEvent {
    node: RowNode<TData>;
    /** The user provided data for the row */
    data: TData | undefined;
    /** The visible row index for the row */
    rowIndex: number | null;
    /** Either 'top', 'bottom' or null / undefined (if not set) */
    rowPinned: string | null;
    /** The context as provided on `gridOptions.context` */
    context: any;
    /** If event was due to browser event (eg click), this is the browser event */
    event?: Event | null;
}

export interface RowGroupOpenedEvent<TData = any> extends RowEvent<TData> {
    /** True if the group is expanded. */
    expanded: boolean;
}

export interface RowValueChangedEvent<TData = any> extends RowEvent<TData> { }

export interface RowSelectedEvent<TData = any> extends RowEvent<TData> { }

export interface VirtualRowRemovedEvent<TData = any> extends RowEvent<TData> { }

export interface RowClickedEvent<TData = any> extends RowEvent<TData> { }

export interface RowDoubleClickedEvent<TData = any> extends RowEvent<TData> { }

export interface RowEditingStartedEvent<TData = any> extends RowEvent<TData> { }

export interface RowEditingStoppedEvent<TData = any> extends RowEvent<TData> { }

export interface FullWidthCellKeyDownEvent<TData = any> extends RowEvent<TData> { }

export interface FullWidthCellKeyPressEvent<TData = any> extends RowEvent<TData> { }

/**------------*/

/** CELL EVENTS */
/**------------*/
export interface CellEvent<TData = any> extends RowEvent<TData> {
    column: Column;
    colDef: ColDef;
    /** The value for the cell */
    value: any;
}

export interface CellKeyDownEvent<TData = any> extends CellEvent<TData> { }

export interface CellKeyPressEvent<TData = any> extends CellEvent<TData> { }

/** Cell is clicked */
export interface CellClickedEvent<TData = any> extends CellEvent<TData> { }

export interface CellMouseDownEvent<TData = any> extends CellEvent<TData> { }

export interface CellDoubleClickedEvent<TData = any> extends CellEvent<TData> { }

export interface CellMouseOverEvent<TData = any> extends CellEvent<TData> { }

export interface CellMouseOutEvent<TData = any> extends CellEvent<TData> { }

export interface CellContextMenuEvent<TData = any> extends CellEvent<TData> { }

export interface CellEditingStartedEvent<TData = any> extends CellEvent<TData> { }

export interface CellEditingStoppedEvent<TData = any> extends CellEvent<TData> {
    /** The old value before editing */
    oldValue: any;
    /** The new value after editing */
    newValue: any;
}

export interface CellValueChangedEvent<TData = any> extends CellEvent<TData> {
    oldValue: any;
    newValue: any;
    source: string | undefined;
}

export interface CellEditRequestEvent<TData = any> extends CellEvent<TData> {
    oldValue: any;
    newValue: any;
    source: string | undefined;
}

export interface AsyncTransactionsFlushed extends AgGridEvent {
    /**
     * Array of result objects. for SSRM it's always list of `ServerSideTransactionResult`.
     * For Client-Side Row Model it's a list of `RowNodeTransaction`.
     */
    results: (RowNodeTransaction | ServerSideTransactionResult)[];
}

// not documented, was put in for CS - more thought needed of how server side grouping / pivoting
// is done and how these should be used before we fully document and share with the world.
export interface ColumnRequestEvent extends AgGridEvent {
    columns: Column[];
}

export interface ColumnRowGroupChangeRequestEvent extends ColumnRequestEvent { }

export interface ColumnPivotChangeRequestEvent extends ColumnRequestEvent { }

export interface ColumnValueChangeRequestEvent extends ColumnRequestEvent { }

export interface ColumnAggFuncChangeRequestEvent extends ColumnRequestEvent {
    aggFunc: any;
}

export interface ScrollVisibilityChangedEvent extends AgGridEvent { } // not documented

export interface StoreUpdatedEvent extends AgEvent { } // not documented

export interface LeftPinnedWidthChangedEvent extends AgEvent { } // not documented
export interface RightPinnedWidthChangedEvent extends AgEvent { } // not documented

export interface RowContainerHeightChanged extends AgEvent { } // not documented

export interface DisplayedRowsChangedEvent extends AgEvent { } // not documented
