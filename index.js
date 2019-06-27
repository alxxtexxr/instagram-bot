const nightmare = require('nightmare')({
	show: true,
	webPreferences: {
		partition: 'nopersist',
	},
});

const username = "USERNAME";
const password = "PASSWORD";
const search = "SEARCH";
const comment = "COMMENT";
const posts = 1000; // The number of posts that will be visited

nightmare
	.goto('http://instagram.com')
	.wait('a[href="/accounts/login/?source=auth_switcher"]')
	.click('a[href="/accounts/login/?source=auth_switcher"]')
	.wait(2000)
	.insert('input[name=username]', username)
	.insert('input[name=password]', password)
	.click('button[type=submit]')
	.wait('input[placeholder=Search]')
	.insert('input[placeholder=Search]', search)
	.wait('a.yCE8d')
	.click('a.yCE8d')
	.wait('.v1Nh3 a')
	.click('.v1Nh3 a')
	.wait('.dCJp8');

for(var i = 0; i < posts; i++) {
	nightmare
		.wait(2000)
		.click('.dCJp8')
		.insert('.Ypffh', comment)
		.type('.Ypffh', '\u000d')
		.wait(2000)
		.click('.HBoOv');
}

nightmare
	.wait(2000)
	.end()
	.then(function() {
		console.log('success');
	})
	.catch(function(err) {
		console.log(err);	
	});

