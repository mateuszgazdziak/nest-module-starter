import { Provider } from '@nestjs/common';

export function createDummyProvider(): Provider[] {
  return [
    {
      provide: 'TOKEN',
      useFactory: () => null,
      inject: [],
    },
  ];
}
