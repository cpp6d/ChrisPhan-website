import { ChrisPhanWebsitePage } from './app.po';

describe('chris-phan-website App', function() {
  let page: ChrisPhanWebsitePage;

  beforeEach(() => {
    page = new ChrisPhanWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
