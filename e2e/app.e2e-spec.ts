import { NgrxInitExamplePage } from './app.po';

describe('ngrx-init-example App', () => {
  let page: NgrxInitExamplePage;

  beforeEach(() => {
    page = new NgrxInitExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
