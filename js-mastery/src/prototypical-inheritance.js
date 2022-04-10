function HtmlElement() {
	this.click = () => {};
}
HtmlElement.prototype.focus = () => {};

function HtmlSelectElement(items = []) {
	this.items = items;

	this.addItem = (item) => {
		this.items.push(item);
	};

	this.removeItem = (item) => {
		this.items = this.items.filter((item) => item !== item);
	};

	this.render = () => {
		return `<select>
	${this.items
		.map(
			(item) => `
		<option>${item}</option>`
		)
		.join("")}
</select>`;
	};
}
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

module.exports = {
	HtmlElement: HtmlElement,
	HtmlSelectElement: HtmlSelectElement,
};
