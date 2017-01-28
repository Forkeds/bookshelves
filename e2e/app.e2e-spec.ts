import { BookshelvesPage } from './app.po';

describe('bookshelves App', function() {
  let page: BookshelvesPage;

  beforeEach(() => {
    page = new BookshelvesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
