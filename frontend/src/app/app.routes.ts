import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { OneWayComponent } from './components/data-binding/one-way/one-way.component';
import { TwoWayComponent } from './components/data-binding/two-way/two-way.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';

export const routes: Routes = [


    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'one-way',
        component: OneWayComponent
    },
    {
        path: 'two-way',
        component: TwoWayComponent
    },
    {
        path: 'control-flow',
        component: ControlFlowComponent
    },
    {
        path: 'directive',
        component: DirectivesComponent
    }
];
