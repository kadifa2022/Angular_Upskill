import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { RouterModule, Routes } from '@angular/router';
import { RoutingComponent } from './routing/routing.component';
import { ParentComponent } from './xcomm/parent/parent.component';
import { ChildComponent } from './xcomm/child/child.component';
import { DetailComponent } from './interComm/details/details.component';
import { ListComponent } from './interComm/like/like.component';
import { HttpClientModule } from'@angular/common/http';
import { TdFormsComponent } from './forms/td-forms/td-forms.component';


const routes: Routes =[
  {path:'bindings', component: BindingComponent},
  {path:'directives', component: DirectivesComponent},
  {path: "routing/:productid", component: RoutingComponent},
  {path: "xcomm", component: ParentComponent},
  {path: "intercomm", component: DetailComponent},
  {path: "listComm", component: ListComponent},
  {path: "tdform", component: TdFormsComponent},
  {path: '**', component: BindingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivesComponent,
    RoutingComponent,
    ParentComponent,
    ChildComponent,
    DetailComponent,
    ListComponent,
    TdFormsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    

  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
