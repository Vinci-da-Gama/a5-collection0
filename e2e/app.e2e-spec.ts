import { A5Collection0Page } from './app.po';

describe('a5-collection0 App', () => {
	let page: A5Collection0Page;

	beforeEach(() => {
		page = new A5Collection0Page();
	});

	it('should display welcome message', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('Welcome to app!!');
	});
});
