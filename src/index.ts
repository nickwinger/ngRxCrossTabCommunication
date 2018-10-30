import {NgModule, ModuleWithProviders, SkipSelf, Optional} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrossTabService } from './crossTab.service';

export * from './crossTab.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
      CrossTabService
  ]
})
export class NgRxCrossTabCommunicationModule {
    constructor(@Optional() @SkipSelf() parentModule: NgRxCrossTabCommunicationModule) {
        if (parentModule) {
            throw new Error(
                'NgRxCrossTabCommunicationModule is already loaded. Import it in the (root) AppModule only');
        }
    }

    static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgRxCrossTabCommunicationModule,
      providers: [CrossTabService]
    };
  }
}
