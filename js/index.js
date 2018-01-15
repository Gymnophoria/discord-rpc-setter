let smallImage = document.getElementById('small-image-select');      // showing text boxes when an image is selected
let smallImageText = document.getElementById('smallImageTextForm');
let largeImage = document.getElementById('large-image-select');
let largeImageText = document.getElementById('largeImageTextForm');

smallImage.onchange = function () {
	if (smallImage.value === 'None') {
		smallImage.style = 'color: gray;';
		smallImageText.style.display = 'none';
	} else {
		smallImage.style = '';
		smallImageText.style.display = 'block';
	}
};

largeImage.onchange = function () {
	if (largeImage.value === 'None') {
		largeImage.style = 'color: gray';
		largeImageText.style.display = 'none';
	} else {
		largeImage.style = '';
		largeImageText.style.display = 'block';
	}
};


let endDate = document.getElementById('endDate');  // making end date display minutes after input number

endDate.addEventListener('focus', function(event) {
	if (event.target.value.endsWith(' Minutes')) event.target.value = event.target.value.slice(0, -8);
});
endDate.addEventListener('blur', function(event) {
	event.target.value = event.target.value + ' Minutes';
});


let presetChoose = document.getElementById('presetChoose');  // choosing rich presence presets

presetChoose.onchange = function () {
	if (presetChoose.value === 'None') presetChoose.style = 'color: gray';
	else presetChoose.style = '';
};


let toggleButton = document.getElementById('toggle-button');  // enable/disable button
let updateButton = document.getElementById('update-button');  // update button

let enabledToast = document.getElementById('enabledToast');   // toast displayed when RPC enabled
let disabledToast = document.getElementById('disabledToast'); // toast "                " disabled
let updatedToast = document.getElementById('updatedToast');   // toast "                " updated

toggleButton.onclick = function () {
	if (toggleButton.textContent === 'Enable') {
		setTimeout(function () { toggleButton.textContent = 'Disable'; }, 200);
		updateButton.removeAttribute('disabled');
		enabledToast.style.webkitAnimationName = 'slideDown';
	} else {
		setTimeout(function () { toggleButton.textContent = 'Enable'; }, 300);
		updateButton.setAttribute('disabled', '');
		disabledToast.style.webkitAnimationName = 'slideDown';
	}
};

updateButton.onclick = function () {
	updatedToast.style.webkitAnimationName = 'slideDown';
};

updatedToast.addEventListener('webkitAnimationEnd', deleteAnimationName, false);
enabledToast.addEventListener('webkitAnimationEnd', deleteAnimationName, false);
disabledToast.addEventListener('webkitAnimationEnd', deleteAnimationName, false);

function deleteAnimationName () {
	this.style.webkitAnimationName = '';
}