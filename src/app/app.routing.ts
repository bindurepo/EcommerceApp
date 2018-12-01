import {RouterModule,Routes}from '@angular/router'
import { WomenDressListComponent } from './women-dress-list/women-dress-list.component';
import { Component } from '@angular/core';



export const routes:Routes=[
    {
        path:'app/women-dress-list',
        component:WomenDressListComponent
    }
]
export const routing = RouterModule.forRoot(routes)