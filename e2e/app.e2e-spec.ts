import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('testing-cli App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    browser.pause();
    expect(page.getParagraphText()).toEqual('Main');
  });
});
