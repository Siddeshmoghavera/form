import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app';
import { FormupComponent } from './formup/formup';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'formup', component: FormupComponent },
  {path: '**', redirectTo: 'form',pathMatch:"full"} // Redirect any unknown paths to the root
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export{routes};