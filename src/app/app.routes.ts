
import { Routes } from '@angular/router';
import { App } from './app';
import { ContadorEstados } from './signals/component/contador-estados/contador-estados';

export const routes: Routes = [
    {
        path: '',
        component: App,
        children: [
            {
                path: 'AngularSignals',
                component: ContadorEstados,
            }
        ]

    }
];
