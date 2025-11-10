const { NotImplementedError } = require("../lib")

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
	if (str.length === 0) return ""
	let newStr = ""
	for (let i = 0; i < str.length; i++) {
		let letter = str[i]
		let count = 1
		while (str[i + 1] === letter) {
			count++
			i++
		}
		if (count > 1) newStr += count + letter
		if (count === 1) newStr += letter
	}
	return newStr
}

module.exports = {
	encodeLine,
}
