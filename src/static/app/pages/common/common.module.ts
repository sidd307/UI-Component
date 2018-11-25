import 'reflect-metadata';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { PermitInfoComponent } from './permit-info/permit-info.component';
import { SelectCompanyComponent } from './select-company/select-company.component';
import { commonRouting } from './common.routes';

export const metadata = {

    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        commonRouting
    ],
    declarations: [
        PermitInfoComponent,
        SelectCompanyComponent
    ],
    exports: [
        PermitInfoComponent,
        SelectCompanyComponent
    ],
    entryComponents: [
        PermitInfoComponent,
        SelectCompanyComponent
    ]
};
@NgModule(metadata)
export class CommonPageModule{}



