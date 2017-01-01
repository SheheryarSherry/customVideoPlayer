import { HtmlvideoPage } from './app.po';

describe('htmlvideo App', function() {
  let page: HtmlvideoPage;

  beforeEach(() => {
    page = new HtmlvideoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
