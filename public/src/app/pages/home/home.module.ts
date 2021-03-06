import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: ':portfolio',
        loadChildren: './portfolio/portfolio.module#PortfolioModule'
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [HomeComponent]
})
export class HomeModule {
}
