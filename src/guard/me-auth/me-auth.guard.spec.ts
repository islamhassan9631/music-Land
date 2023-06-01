import { MeAuthGuard } from './me-auth.guard';

describe('MeAuthGuard', () => {
  it('should be defined', () => {
    expect(new MeAuthGuard()).toBeDefined();
  });
});
