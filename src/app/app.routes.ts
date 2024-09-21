import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

export const routes: Routes = [
    {path:'',component:ParentComponent},
    {path:'child',component:ChildComponent}
];
