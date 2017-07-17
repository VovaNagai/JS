class KeypadHeader {
	constructor(){}
	render(){
		document.body.innerHTML = '<header class="header"><div class="container top-radius"><h2>Keypad</h2></div></header>';
	}
}

class KeypadFooter {
	constructor(){}
	render(){
		document.body.innerHTML += '<footer class="footer"><div class="container bottom-radius"><nav class="main-nav"><a href="index.html" class="tab"><span class="glyphicon glyphicon-search" aria-hidden="true"></span><span class = "tab-text">Contacts</span></a><a href="keypad.html" class="tab active"><span class="glyphicon glyphicon-th" aria-hidden="true"></span><span class = "tab-text">Keypad</span></a><a href="edit-contact.html" class="tab"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span><span class = "tab-text">Edit contact</span></a><a href="user.html" class="tab"><span class="glyphicon glyphicon-user" aria-hidden="true"></span><span class = "tab-text">User</span></a><a href="add-user.html" class="tab"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span><span class = "tab-text">Add user</span></a></nav></div></footer><script src="js/app.js"></script>';
	}
}

class KeypadMain {
	constructor(){
		this.ch = e => {
			alert(e);
		};
	}
	render(){
		document.body.innerHTML += '<main class="main"><div class="container"><div class="number"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span><span class="numbers"></span><span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span></div><div class="keypad-holder"><button class="key">1</button><button class="key">2</button><button class="key">3</button><button class="key">4</button><button class="key">5</button><button class="key">6</button><button class="key">7</button><button class="key">8</button><button class="key">9</button><button class="key">*</button><button class="key">0</button><button class="key">#</button><button class="key"><span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button></div></div></main>';
		setTimeout(function(){
			Array.from(document.getElementsByTagName('button')).forEach(e => {
				if('undefined' != typeof e.className && 'key' == e.className && e.innerHTML.match(/^[\d*#]+$/)){
					e.onclick = function(){
						Array.from(document.getElementsByTagName('span')).forEach(f => {
							if('undefined' != typeof f.className && 'numbers' == f.className){
								f.innerHTML += e.innerHTML;
							}
						});
					};
				}
			});
			Array.from(document.getElementsByTagName('span')).forEach(f => {
				if('undefined' != typeof f.className && -1 !== f.className.indexOf('glyphicon-circle-arrow-left')){
					f.onclick = function(){
						Array.from(document.getElementsByTagName('span')).forEach(g => {
							if('undefined' != typeof g.className && 'numbers' == g.className){
								g.innerHTML = g.innerHTML.slice(0,-1);
							}
						});
					};
				}
			});
		},0);
	}
}

const xh = new KeypadHeader();
const xm = new KeypadMain();
const xf = new KeypadFooter();

xh.render();
xm.render();
xf.render();
