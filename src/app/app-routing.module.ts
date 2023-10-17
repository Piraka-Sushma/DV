import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SqlDbComponent } from './DB-components/DB-components/sql-db/sql-db.component';
import { ExcelDBComponent } from './DB-components/DB-components/excel-db/excel-db.component';
import { XmlDBComponent } from './DB-components/DB-components/xml-db/xml-db.component';
import { MongoDBComponent } from './DB-components/DB-components/mongo-db/mongo-db.component';
import { JsonDBComponent } from './DB-components/DB-components/json-db/json-db.component';
import { Page1Component } from './page1/page1.component';


const routes: Routes = [
  
  {path: 'Page1', component:Page1Component},
  {path: 'SQL', component: SqlDbComponent },
  {path: 'Excel', component:ExcelDBComponent},
  {path: 'XML', component:XmlDBComponent},
  {path: 'MongoDB', component:MongoDBComponent},
  {path: 'Json', component:JsonDBComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }