//Now add the jQuery
$(document).ready(function () { //Just starting up here
	$("body").append(`
	<div class="mmenu container w-25">
	<button id="close" class="mclose-btn">Close</button>
	<p class="mtitle"> Dummy Text Generator</p>
<p class="mauthor" style="font-size:8pt">@marcuwynu23</p>
	<hr>
	<div class="menu-item"><button class="mnav-item-btn" id="words">Words</button></div>
	<div class="menu-item"><button class="mnav-item-btn" id="sentences">Sentences</button>
	</div>
	<div class="menu-item"><button class="mnav-item-btn" id="paragraphs">Paragraphs</button>
	</div>
<div>
<div class="d-flex justify-content-center">
<button	id="copy" class="mcopy-btn">Copy</button>

</div>
<p class="mpreview">Preview</p>
<p id="result" class="mresult-text"></p>
</div>
</div>`);

	var menu = $('.mmenu');//get the menu
	$(document).on('contextmenu', function (e) {//What this does is simply; if right-click, run function(contains an event)
		e.preventDefault();//Prevent the default action: the normal right-click-menu to show
		menu.css({
			display: 'block',//show the menu
			top: e.pageY,//make the menu be where you click (y)
			left: e.pageX//make the menu be where you click (x)
		});
	});

	$("#copy").click(function () {
		let result = $("#result").text();
		navigator.clipboard.writeText(result);
	});


	$("#close").click(function (e) { //When you left-click
		menu.css({ display: 'none' });//Hide the menu
	});

	// function to fetch data from the API
	function getRandomWords() {
		fetch('https://random-word-api.herokuapp.com/word?number=1')
			.then(response => response.json())
			.then(data => {
				$("#result").text(data[0]);
			})
			.catch(err => {
				console.log(err);
			});
	}

	function getRandomSentences() {
		// api get random sentence
		fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text')
			.then(response => response.text())
			.then(data => {
				$("#result").text(data);

			})
			.catch(err => {
				console.log(err);
			});
	}

	function getRandomParagraphs() {
		fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=3&format=text')
			.then(response => response.text())
			.then(data => {
				$("#result").text(data);
			})
			.catch(err => {
				console.log(err);
			});
	}

	// click events for	the menu
	$("#words").click(function () {
		getRandomWords();
	});

	$("#sentences").click(function () {
		getRandomSentences();
	}
	);

	$("#paragraphs").click(function () {
		getRandomParagraphs();
	}
	);
});