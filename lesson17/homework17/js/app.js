class AppHeader {
	constructor() {
        //
    }
	//
	render(){
		document.body.innerHTML = '<header class="header"><div class="container top-radius"><h2>Contacts</h2></div></header>';
	}
}

class AppFooter {
	constructor() {
        //
    }
	//
	render(){
		document.body.innerHTML += '<footer class="footer"><div class="container bottom-radius"><nav class="main-nav"><a href="index.html" class="tab active"><span class="glyphicon glyphicon-search" aria-hidden="true"></span><span class = "tab-text">Contacts</span></a><a href="keypad.html" class="tab"><span class="glyphicon glyphicon-th" aria-hidden="true"></span><span class = "tab-text">Keypad</span></a><a href="edit-contact.html" class="tab"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span><span class = "tab-text">Edit contact</span></a><a href="user.html" class="tab"><span class="glyphicon glyphicon-user" aria-hidden="true"></span><span class = "tab-text">User</span></a><a href="add-user.html" class="tab"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span><span class = "tab-text">Add user</span></a></nav></div></footer><script src="js/app.js"></script>';
	}
}

class AppMain {
	constructor() {
        this.tb = [...arguments];
		this.thi = ['name','lastName','mobilPhone'];
		this.users = [{
			name: 'Vova',
			lastName: 'Boom',
			mobilPhone: '+(380)-99-0000388',
		},
		{
			name: 'Valera',
			lastName: 'Leroy',
			mobilPhone: '+(380)-99-0000388',
		},
		{
			name: 'Victor',
			lastName: 'Rak',
			mobilPhone: '+(380)-99-0000388',
		},
		{
			name: 'Roma',
			lastName: 'Lesovoy',
			mobilPhone: '+(380)-99-0000388',
		}];
		this.sorting = [0,1];
    }
	//
	render(){
		let tbx = '';
		let su = Array.from(this.users);
		if('undefined' != typeof arguments[0] && 0 <= arguments[0] && 2 >= arguments[0]){
			let z = arguments[0];
			let x = (this.sorting[0] == z && !this.sorting[1]) ? 1 : -1;
			let y = (this.sorting[0] == z && !this.sorting[1]) ? -1 : 1;
			su.sort((a,b) => (a[this.thi[z]] > b[this.thi[z]]) ? x : y);
			//
			if(this.sorting[0] == z)
				this.sorting[1] = (this.sorting[1]) ? 0 : 1;
			this.sorting[0] = z;
		}
		su.forEach(e => tbx += `<tr><td>${e.name}</td><td>${e.lastName}</td><td>${e.mobilPhone}</td></tr>`);
		let tbl = '';
		this.tb.forEach(e => tbl += `<th>${e}</th>`);
		tbl = `<thead><tr>${tbl}</tr></thead><tbody>${tbx}</tbody>`;
		if('undefined' != typeof arguments[0] && 0 <= arguments[0] && 2 >= arguments[0]){
			document.getElementsByTagName('table')[0].innerHTML = tbl;
		}
		else
			document.body.innerHTML += `<main><div class="container"><form class="form-inline search-form"><div class="form-group"><label class="sr-only" for="search">Search</label><input type="text" class="form-control" id= "search" placeholder="Search"></div></form><table class="table table-hover contacts">${tbl}</table></div></main>`;
		//
		let zzxfwd = this;
		setTimeout(function(){
			Array.from(document.getElementsByTagName('th')).forEach((e,i) => {
				e.onclick = () => {
					zzxfwd.render(i);
				};
			});
		},0);
	}
}

const xh = new AppHeader();
const xm = new AppMain('Name','Last Name','mobilPhone');
const xf = new AppFooter();

xh.render();
xm.render();
xf.render();
