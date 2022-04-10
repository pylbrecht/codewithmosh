const {
	HtmlElement,
	HtmlSelectElement,
} = require("./prototypical-inheritance");

describe("HtmlElement", () => {
	const e = new HtmlElement();

	it("should have an instance method click()", () => {
		expect("click" in e).toBe(true);
	});

	it("should have a prototype method focus()", () => {
		expect("focus" in e).toBe(true);
	});
});

describe("HtmlSelectElement", () => {
	it("inherits from HtmlElement", () => {
		const e = new HtmlSelectElement();
		expect("focus" in e).toBe(true);
		expect("click" in e).toBe(true);
	});

	it("addItem() should add an item", () => {
		const e = new HtmlSelectElement();
		e.addItem("1");
		expect(e.items).toEqual(["1"]);
	});

	it("removeItem() should remove the specified item", () => {
		const e = new HtmlSelectElement();
		e.addItem("1");
		e.removeItem("1");
		expect(e.items).toEqual([]);
	});

	it("render() should render an HTML select", () => {
		const e = new HtmlSelectElement(["1", "2"]);
		const html = `<select>
	<option>1</option>
	<option>2</option>
</select>`;

		expect(e.render()).toEqual(html);
	});
});
