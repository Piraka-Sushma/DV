import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SqlDbComponent } from './DB-components/DB-components/sql-db/sql-db.component';
import { ExcelDBComponent } from './DB-components/DB-components/excel-db/excel-db.component';
import { XmlDBComponent } from './DB-components/DB-components/xml-db/xml-db.component';
import { MongoDBComponent } from './DB-components/DB-components/mongo-db/mongo-db.component';
import { JsonDBComponent } from './DB-components/DB-components/json-db/json-db.component';
import { Page1Component } from './page1/page1.component';
import { TableselectionComponent } from './DB-components/DB-components/tableselection/tableselection.component';
import { FormComponent } from './form/form.component';



const routes: Routes = [
  
  {path: 'Page1', component:Page1Component},
  {path: 'SQL', component: SqlDbComponent },
  {path: 'Excel', component:ExcelDBComponent},
  {path: 'XML', component:XmlDBComponent},
  {path: 'MongoDB', component:MongoDBComponent},
  {path: 'Json', component:JsonDBComponent},
  {path: 'Tableselect',component:TableselectionComponent},
  {path: 'form',component:FormComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
