var esc = function(lacadena) {
	return lacadena.replace(/&/g, '&amp;').replace(/\$/g, '&#36;').replace(/^\./, '&#46;').replace(/^\,/, '&#44;').replace(/{/g, '&#123;').replace(/}/g, '&#125;').replace(/\[/g, '&#91;').replace(/\]/g, '&#93;').replace(/=/g, '&#61;').replace(/\|/g, '&#124;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/`/g, '&#96;');
}

module.exports.esc = esc;
