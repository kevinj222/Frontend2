import { NgModule } from '@angular/core';
 import{MatCardModule} from '@angular/material/card';
//import { MatCardModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatButtonToggleModule} from '@angular/material/button-toggle';  
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
// import {MatTableDataSource} from '@angular/material';
import {MatTableModule} from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

const MaterialComponent=[MatCardModule,
  MatFormFieldModule,
  MatMenuModule,OverlayModule,
  MatButtonToggleModule,MatButtonModule,
  MatAutocompleteModule,MatTableModule]

@NgModule({
  imports: [MaterialComponent,MatPaginatorModule, MatSortModule],
  exports:[MaterialComponent]

})
export class MaterialModule { }
