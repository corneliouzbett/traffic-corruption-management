import { NgModule } from '@angular/core';

import { AcTrafficPlusSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [AcTrafficPlusSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [AcTrafficPlusSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AcTrafficPlusSharedCommonModule {}
