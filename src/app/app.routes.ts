import { Routes } from '@angular/router';
import { SelectTemplateComponent } from './pages/select-template/select-template.component';
import { BuilderComponent } from './pages/builder/builder.component';

export const routes: Routes = [
    {path:'',component:SelectTemplateComponent},
    {path:'builder',component:BuilderComponent}
];
