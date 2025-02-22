const strongTags = document.querySelectorAll('strong')

function highlight() {
    //Write your code here
	for (let index = 0; index < strongTags.length; index++) {
		strongTags[index].style.color = 'rgb(0, 128, 0)'
	}
}


function return_normal() {
    //Write your code here
	for (let index = 0; index < strongTags.length; index++) {
		strongTags[index].style.color = 'rgb(0, 0, 0)'
	}
}
