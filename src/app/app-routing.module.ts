import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { CidadeComponent } from './cidade/cidade.component';
import { ListarComponent } from './listar/listar.component';
import { ExcelsheetComponent } from './excelsheet/excelsheet.component';

const routes: Routes = [
  { path:'cidade', component: CidadeComponent},
  { path: 'home', component: HomeComponent},
  {path: 'listar', component: ListarComponent},
  {path: 'excel', component: ExcelsheetComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
