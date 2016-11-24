import { PsiNg2Page } from './app.po';

describe('psi-ng2 App', function() {
  let page: PsiNg2Page;

  beforeEach(() => {
    page = new PsiNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
