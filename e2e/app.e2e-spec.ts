import { MyLearningPage } from './app.po';

describe('my-learning App', () => {
  let page: MyLearningPage;

  beforeEach(() => {
    page = new MyLearningPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
