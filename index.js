var esc = function(lacadena) {
	return lacadena.replace(/&/g, '&amp;').replace(/^\$/, '&#36;').replace(/^\./, '&#46;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/`/g, '&#96;');
}

module.exports.esc = esc;
