import { GivezpPage } from './app.po';

describe('givezp App', function() {
  let page: GivezpPage;

  beforeEach(() => {
    page = new GivezpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
