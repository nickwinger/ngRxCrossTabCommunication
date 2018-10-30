import { NgModule, ModuleWithProviders } from '@angular/core';
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
  ]
})
export class NgRxCrossTabCommunicationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgRxCrossTabCommunicationModule,
      providers: [CrossTabService]
    };
  }
}
