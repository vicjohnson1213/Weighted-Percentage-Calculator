import { PercentageCalculatorPage } from './app.po';

describe('percentage-calculator App', function() {
  let page: PercentageCalculatorPage;

  beforeEach(() => {
    page = new PercentageCalculatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
