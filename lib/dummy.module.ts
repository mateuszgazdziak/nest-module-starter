import { DynamicModule, Module } from '@nestjs/common';
import { createDummyProvider } from './dummy.provider';

@Module({})
export class DummyModule {
  static forRoot(): DynamicModule {
    return {
      module: DummyModule,
      imports: [],
    };
  }

  static forFeature(): DynamicModule {
    const providers = createDummyProvider();

    return {
      module: DummyModule,
      providers: providers,
      exports: providers,
    };
  }

  static forRootAsync(): DynamicModule {
    return {
      module: DummyModule,
      imports: [],
    };
  }
}
