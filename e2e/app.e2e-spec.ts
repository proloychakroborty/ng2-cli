import { PSINg2Page } from './app.po';

describe('psi-ng2 App', function() {
  let page: PSINg2Page;

  beforeEach(() => {
    page = new PSINg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
