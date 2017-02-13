import { OcpGeneratorUiPage } from './app.po';

describe('ocp-generator-ui App', function() {
  let page: OcpGeneratorUiPage;

  beforeEach(() => {
    page = new OcpGeneratorUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
