import { Session8Assignment3Page } from './app.po';

describe('session8-assignment3 App', () => {
  let page: Session8Assignment3Page;

  beforeEach(() => {
    page = new Session8Assignment3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
