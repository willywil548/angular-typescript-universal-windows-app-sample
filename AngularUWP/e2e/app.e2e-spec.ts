import { AngularUWPPage } from './app.po';

describe('angular-uwp App', () => {
  let page: AngularUWPPage;

  beforeEach(() => {
    page = new AngularUWPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
