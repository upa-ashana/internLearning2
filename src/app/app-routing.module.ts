import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TestComponent } from './test/test.component';
import { TableComponent } from './table/table.component';
import {HomeComponent} from './home/home.component';
import {CarouselComponent} from './carousel/carousel.component';
import { FormComponent } from './form/form.component';
const routes: Routes = [

  {path: '', redirectTo: '/carousel', pathMatch: 'full' },  
  {path: 'carousel', component: CarouselComponent},
  {path: 'home', component: HomeComponent},
  {path: 'test', component:TestComponent},
  {path: 'table', component:TableComponent},
  {path: 'form', component:FormComponent}
 

];
@NgModule({
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  
  ],
 
})
export class AppRoutingModule { }
