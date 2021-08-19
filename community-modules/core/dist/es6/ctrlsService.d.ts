// Type definitions for @ag-grid-community/core v26.0.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { GridCtrl } from "./gridComp/gridCtrl";
import { GridBodyCtrl } from "./gridBodyComp/gridBodyCtrl";
import { RowContainerCtrl } from "./gridBodyComp/rowContainer/rowContainerCtrl";
import { HeaderRootComp } from "./headerRendering/headerRootComp";
import { FakeHScrollCtrl } from "./gridBodyComp/fakeHScrollCtrl";
import { BeanStub } from "./context/beanStub";
interface ReadyParams {
    gridCtrl: GridCtrl;
    gridBodyCtrl: GridBodyCtrl;
    centerRowContainerCtrl: RowContainerCtrl;
    leftRowContainerCtrl: RowContainerCtrl;
    rightRowContainerCtrl: RowContainerCtrl;
    bottomCenterRowContainerCtrl: RowContainerCtrl;
    bottomLeftRowContainerCtrl: RowContainerCtrl;
    bottomRightRowContainerCtrl: RowContainerCtrl;
    topCenterRowContainerCtrl: RowContainerCtrl;
    topLeftRowContainerCtrl: RowContainerCtrl;
    topRightRowContainerCtrl: RowContainerCtrl;
    fakeHScrollCtrl: FakeHScrollCtrl;
    headerRootComp: HeaderRootComp;
}
export declare class CtrlsService extends BeanStub {
    private gridCtrl;
    private gridBodyCtrl;
    private centerRowContainerCtrl;
    private leftRowContainerCtrl;
    private rightRowContainerCtrl;
    private bottomCenterRowContainerCtrl;
    private bottomLeftRowContainerCtrl;
    private bottomRightRowContainerCtrl;
    private topCenterRowContainerCtrl;
    private topLeftRowContainerCtrl;
    private topRightRowContainerCtrl;
    private fakeHScrollCtrl;
    private headerRootComp;
    private ready;
    private readyCallbacks;
    private checkReady;
    whenReady(callback: (p: ReadyParams) => void): void;
    private createReadyParams;
    registerFakeHScrollCtrl(con: FakeHScrollCtrl): void;
    registerHeaderRootComp(headerRootComp: HeaderRootComp): void;
    registerCenterRowContainerCtrl(con: RowContainerCtrl): void;
    registerLeftRowContainerCtrl(con: RowContainerCtrl): void;
    registerRightRowContainerCtrl(con: RowContainerCtrl): void;
    registerTopCenterRowContainerCtrl(con: RowContainerCtrl): void;
    registerTopLeftRowContainerCon(con: RowContainerCtrl): void;
    registerTopRightRowContainerCtrl(con: RowContainerCtrl): void;
    registerBottomCenterRowContainerCtrl(con: RowContainerCtrl): void;
    registerBottomLeftRowContainerCtrl(con: RowContainerCtrl): void;
    registerBottomRightRowContainerCtrl(con: RowContainerCtrl): void;
    registerGridBodyCtrl(con: GridBodyCtrl): void;
    registerGridCtrl(con: GridCtrl): void;
    getFakeHScrollCtrl(): FakeHScrollCtrl;
    getHeaderRootComp(): HeaderRootComp;
    getGridCtrl(): GridCtrl;
    getCenterRowContainerCtrl(): RowContainerCtrl;
    getTopCenterRowContainerCtrl(): RowContainerCtrl;
    getBottomCenterRowContainerCtrl(): RowContainerCtrl;
    getGridBodyCtrl(): GridBodyCtrl;
}
export {};