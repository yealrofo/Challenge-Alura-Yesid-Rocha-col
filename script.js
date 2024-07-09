document.getElementById('encryptBtn').addEventListener('click', function() {
	const inputText = document.getElementById('inputText').value;
	const encryptedText = encrypt(inputText);
	displayResult(encryptedText);
});

document.getElementById('decryptBtn').addEventListener('click', function() {
	const inputText = document.getElementById('inputText').value;
	const decryptedText = decrypt(inputText);
	displayResult(decryptedText);
});

document.getElementById('copyBtn').addEventListener('click', function() {
	const outputText = document.getElementById('outputText').textContent;
	navigator.clipboard.writeText(outputText).then(function() {
		 alert('Texto copiado al portapapeles');
	});
});

function encrypt(text) {
	return text.replace(/e/g, 'enter')
				  .replace(/i/g, 'imes')
				  .replace(/a/g, 'ai')
				  .replace(/o/g, 'ober')
				  .replace(/u/g, 'ufat');
}

function decrypt(text) {
	return text.replace(/enter/g, 'e')
				  .replace(/imes/g, 'i')
				  .replace(/ai/g, 'a')
				  .replace(/ober/g, 'o')
				  .replace(/ufat/g, 'u');
}

function displayResult(result) {
	const outputText = document.getElementById('outputText');
	const placeholderImage = document.getElementById('placeholderImage');
	const copyBtn = document.getElementById('copyBtn');

	if (result) {
		 outputText.textContent = result;
		 outputText.style.display = 'block';
		 placeholderImage.style.display = 'none';
		 copyBtn.style.display = 'block';
	} else {
		 outputText.style.display = 'none';
		 placeholderImage.style.display = 'block';
		 copyBtn.style.display = 'none';
	}
}
