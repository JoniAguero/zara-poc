import * as heroUseCases from './hero/useCases';

interface UseCases {
  [key: string]: any;
}

const useCases: UseCases = {
  ...heroUseCases,
};

export class DomainApp {
  static create(): DomainApp {
    return new DomainApp();
  }

  [key: string]: any;

  constructor() {
    Object.entries(useCases).forEach(([key, value]) => {
      const useCaseName = key.charAt(0).toLowerCase() + key.slice(1);
      this[useCaseName] = this._getter(value);
    });
  }

  private _getter(useCase: any) {
    return {
      async execute(...args: any[]) {
        const instance = await useCase.create();
        return instance.execute(...args);
      },
    };
  }
}
