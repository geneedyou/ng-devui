import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'ng-devui/button';
import { CheckBoxModule } from 'ng-devui/checkbox';
import { DCommonModule } from 'ng-devui/common';
import { DatepickerModule } from 'ng-devui/datepicker';
import { DragDropModule } from 'ng-devui/dragdrop';
import { DropDownModule } from 'ng-devui/dropdown';
import { InputNumberComponent, InputNumberModule } from 'ng-devui/input-number';
import { PaginationModule } from 'ng-devui/pagination';
import { SelectComponent, SelectModule } from 'ng-devui/select';
import { TooltipModule } from 'ng-devui/tooltip';
import { TreeSelectComponent, TreeSelectModule } from 'ng-devui/tree-select';
import { LazyLoadModule, SafePipeModule } from 'ng-devui/utils';
import { WindowRefModule } from 'ng-devui/window-ref';
import { DataTableBodyComponent } from './data-table-body.component';
import { DataTableCellComponent } from './data-table-cell.component';
import { DataTableHeadComponent } from './data-table-head.component';
import { DataTableRowComponent } from './data-table-row.component';
import { DataTableComponent } from './data-table.component';
import { DisPlayCellValuePipe } from './display-cell-value.pipe';
import { EditorDirective } from './editor-host.directive';
import { TableTbodyComponent } from './table/body/tbody.component';
import { TableTdComponent } from './table/body/td/td.component';
import { TableTdService } from './table/body/td/td.service';
import { FilterComponent } from './table/head/th/filter/filter.component';
import { SortComponent } from './table/head/th/sort/sort.component';
import { TableThComponent } from './table/head/th/th.component';
import { TableTheadComponent } from './table/head/thead.component';
import { TableTrComponent } from './table/row/tr.component';
import { DataTableCellEditTmplComponent } from './tmpl/data-table-cell-edit-tmpl.component';
import { DataTableCellTmplComponent } from './tmpl/data-table-cell-tmpl.component';
import { DataTableCellViewTmplComponent } from './tmpl/data-table-cell-view-tmpl.component';
import { DataTableColumnTmplComponent } from './tmpl/data-table-column-tmpl.component';
import { DataTableHeadCellTmplComponent } from './tmpl/data-table-head-cell-tmpl.component';
import { VirtualScrollTreeTableComponent } from './virtualScrollTreeTable.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WindowRefModule,
    ScrollingModule,
    PaginationModule,
    DCommonModule,
    DatepickerModule,
    SelectModule,
    CheckBoxModule,
    ButtonModule,
    InputNumberModule,
    DropDownModule,
    TreeSelectModule,
    SafePipeModule,
    TooltipModule,
    DragDropModule,
    LazyLoadModule
  ],
  exports: [
    DataTableComponent,
    DataTableColumnTmplComponent,
    DataTableCellViewTmplComponent,
    DataTableCellEditTmplComponent,
    DataTableBodyComponent,
    DataTableHeadComponent,
    DataTableCellComponent,
    DataTableRowComponent,
    DataTableCellTmplComponent,
    DataTableHeadCellTmplComponent,
    TableThComponent,
    FilterComponent,
    SortComponent,
    TableTheadComponent,
    TableTrComponent,
    TableTbodyComponent,
    TableTdComponent,
    VirtualScrollTreeTableComponent
  ],
  declarations: [
    DataTableComponent,
    DataTableColumnTmplComponent,
    DataTableCellViewTmplComponent,
    DataTableCellEditTmplComponent,
    DataTableBodyComponent,
    DataTableHeadComponent,
    DataTableCellComponent,
    DataTableRowComponent,
    DataTableCellTmplComponent,
    DataTableHeadCellTmplComponent,
    DisPlayCellValuePipe,
    EditorDirective,
    TableThComponent,
    FilterComponent,
    SortComponent,
    TableTheadComponent,
    TableTrComponent,
    TableTbodyComponent,
    TableTdComponent,
    VirtualScrollTreeTableComponent
  ],

  providers: [ TableTdService ],
})
export class DataTableModule {
}
