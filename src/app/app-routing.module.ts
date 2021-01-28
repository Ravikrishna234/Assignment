import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesComponent } from './ans/series/series.component';
import { FieldsComponent } from './ans/fields/fields.component';
import { ShareComponent } from './ans/share/share.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      {path:'series',redirectTo:'series',pathMatch:'full'}, 
    {path:'series',component:SeriesComponent}, 
    {path:'fields',component:FieldsComponent},
    {path:'share',component:ShareComponent} 

        ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
