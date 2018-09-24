import { GeneralSharedModule } from './general-shared.module';

describe('GeneralSharedModule', () => {
  let generalSharedModule: GeneralSharedModule;

  beforeEach(() => {
    generalSharedModule = new GeneralSharedModule();
  });

  it('should create an instance', () => {
    expect(generalSharedModule).toBeTruthy();
  });
});
