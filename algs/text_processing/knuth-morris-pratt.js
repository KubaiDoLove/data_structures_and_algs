function longest_prefix(str) {
	let prefix = new Array(str.length);
	let maxPrefix = 0;
	prefix[0] = 0;

	for (let i = 1; i < str.length; i++) {
		while (str.charAt(i) !== str.charAt(maxPrefix) && maxPrefix > 0) {
			maxPrefix = prefix[maxPrefix - 1];
		}

		if (str.charAt(maxPrefix) === str.charAt(i)) {
			maxPrefix++;
		}

		prefix[i] = maxPrefix;
	}

	return prefix;
}

function kmp(str, pattern) {
	let prefixTable = longest_prefix(pattern);
	let patternIndex = 0;
	let	strIndex = 0;

	while (strIndex < str.length) {
		if (str.charAt(strIndex) !== pattern.charAt(patternIndex)) {
			if (patternIndex !== 0) {
				patternIndex = prefixTable[patternIndex - 1];
			}
			else {
				strIndex++;
			}
		}

		if (str.charAt(strIndex) === pattern.charAt(patternIndex)) {
			strIndex++;
			patternIndex++;
		}

		if (patternIndex === pattern.length) {
			return true;
		}
	}

	return false;
}

console.log(kmp('sammiebae', 'am'));
