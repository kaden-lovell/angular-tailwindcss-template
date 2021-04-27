import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphComponent } from './components/graph/graph.component';
import { ThemeDesignerComponent } from './components/theme-designer/theme-designer.component';

const routes: Routes = [
  { path: 'theme-designer', component: ThemeDesignerComponent },
  { path: 'graph', component: GraphComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
