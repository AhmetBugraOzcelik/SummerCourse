const card = document.getElementById('card');
const dropZone = document.getElementById('drop-zone');
const dropZone2 = document.getElementById('drop-zone2');
card.addEventListener('dragstart', function(event) {
	console.log(event)
})
dropZone2.addEventListener('dragover', function(event) {
	event.preventDefault()
})
dropZone2.addEventListener('drop', function(event) {
	dropZone2.prepend(card)
})
dropZone.addEventListener('dragover', function(event) {
	event.preventDefault()
})
dropZone.addEventListener('drop', function(event) {
	dropZone.prepend(card)
})
