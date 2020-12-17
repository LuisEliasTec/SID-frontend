import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { DialogDataExchange } from './dialog-data-exchange.service';

@NgModule({})
export class DialogDataExchangeModule {
  constructor(@Optional() @SkipSelf() parentModule?: DialogDataExchangeModule) {
    if (parentModule) {
      throw new Error(
        'DialogDataExchangeModule is already loaded');
    }
  }

  static forRoot(config: DialogDataExchange): ModuleWithProviders<DialogDataExchangeModule> {
    return {
      ngModule: DialogDataExchangeModule,
      providers: [
        { provide: DialogDataExchange, useValue: config }
      ]
    };
  }
}
