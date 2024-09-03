// the /api router
var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var Promise = require('promise');
var randstr = require('randomstring');
var nev = require('email-verification')(require('mongoose'));

const nodemailer = require('nodemailer');

// login API
router.post('/login', ((req, res) => {

	var db = require('/etc/exlang/server/db/accounts_connec.js');
	var User = require('/etc/exlang/server/models/user_model.js');
	var loginUser = new User({});

	loginUser.uname = req.body.email;

	var hashpass = loginUser.encryptPass(req.body.pass);
	var thisUser = User.find({uname: loginUser.uname}).limit(1);

	thisUser.then((x, err) => {
		x.length > 0 ? bcompare() /* compare */ : res.send({err:0, redirect: '/login', message: 'no user found'}), console.log('no user');
	});

	var bcompare = thisUser.then((x, err) => {
		bcrypt.compare(req.body.pass, x[0].upass, function(err, result) {
			req.session.uname = req.body.email;
			req.session.save();
			res.send({username: req.body.email});
		});
	});

}));

// logout API 
router.post('/logout', ((req, res) => {
	console.log('request accepted');
	req.session.destroy();
	res.send({response:'good'});
}));

// register API 
router.post('/register', ((req, res) => {
	var db = require('/etc/exlang/server/db/accounts_connec.js');

	// setup proper promise for both to complete, id est, promises.all()
	var TempUser = require('/etc/exlang/server/models/temp_user_model.js');
	var User = require('/etc/exlang/server/models/user_model.js');

	var tempUser = new TempUser({ /*uname: req.body.email, upass: tempUser.encryptPass(req.body.pass)*/ });
	var regUser = TempUser.find({uname: req.body.email}).limit(1);
	var permAccount = User.find({uname: req.body.email}).limit(1);
	
	// create a new model collection that searches if the email is already approved
	// userReg ? 'already registered' : userTempReg && !userReg ? 'user conf already sent' : store hash && save

	regUser.then((x, err) => {
		x.length > 0 ? (res.send({ err:0, redirect: '/register'}), console.log('already registered')) : permAccount.then((y, err) => { y.length > 0 ? (res.send({ err:0, redirect: '/register'}), console.log('already regd')) : hashThis() });
	});

	var hashThis = _ => {
		var hashpass = tempUser.encryptPass(req.body.pass);
		hashpass.then((hash, err) => {
			tempUser.uname = req.body.email;
			tempUser.upass = hash;
			tempUser.conf_link = randstr.generate(10);
			tempUser.save();
			email_verif(req.body.email, tempUser.conf_link);
			res.send({err:0, redirect: '/home'});
		});
	}

	var dbThen = (thisF) => {
		return thisF.then((x, err) => { x.length > 0 ? 0 : 1 });
	};

	var email_verif = (ev_email, ev_link) => {
		// send email

		let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: 'admin@exlang.io',
				pass: 'w4ngYANGbu!uo'
			}
		});

		let mailOptions = {
			from: '"The exlang.io team" <admin@exlang.io>',
			to: ev_email,
			subject: "Confirm your email",
			text: "Hello, please confirm your email by going to the following link: http://107.191.55.190/confirm/"+ev_link,
			html: "<b>Hello, please confirm your email by going to the following link: <br/> http://107.191.55.190/confirm/"+ev_link+"</b>"
		}
		
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
			}
			console.log('msg %s sent: %s', info.messageId, info.response);
		});
	}

}));

// session api 
router.get('/session', ((req, res) => {
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	
	res.send({user: req.session.uname});
}));

router.get('/profile_load', ((req, res) => {
	console.log('HELLO');
	var db = require('/etc/exlang/server/db/accounts_connec.js');
	var Profile = require('/etc/exlang/server/models/profile_model.js');
	var userProfile = Profile.find({uname: req.session.uname}).lean();
	userProfile.then((x, err) => {
		console.log('IN HERE');
		// res.write and then res.end()
		console.log('DATE -- ' + x[0].bday);
		var date = new Date(x[0].bday);
/*
		var dateMonth = date.getMonth+1;
		var dateDay = date.getDate();
		var dateYear = date.getFullYear();
		dateDay = dateDay < 10 ? "0" + dateDay.toString() : dateDay.toString();
		dateMonth = dateMonth < 10 ? "0" + dateMonth.toString() : dateMonth.toString();
		
		x[0].bday = dateYear.toString() + '-' + dateMonth + '-' + dateDay;
*/
		x[0].bday = date.toISOString().substring(0, 10);

//		x[0].bday = x[0].bday.split('T')[0];
		
		x.length > 0 ? res.send(x[0]) /*sendProf()*/ : console.log('no profile')/* no profile */ ; 
		// x.length > 0 ? res.send(x) /*sendProf()*/ : console.log('no profile')/* no profile */ ; 
		console.log('SENDING ' + x);
	});

}));

router.post('/profile_edit', ((req, res) => {
	var db = require('/etc/exlang/server/db/accounts_connec.js');
	var Profile = require('/etc/exlang/server/models/profile_model.js');
	var userProfile = Profile.find({uname: req.session.uname}).limit(1);
/*	userProfile.then((x, err) => {
		x.length == 0 ? userProfile = new Profile({req.body. : 
	});
*/

	userProfile.then((x, err) => { x.length > 0 ? editProf(x[0]) : editProf(new Profile({}))})

//	var userProfile = !userProfilex.name ? new Profile({}) : userProfilex;
	console.log('my userprof: --- ' + userProfile.name);
//	req.session.uname ? editProf() : console.log('uname not set');

	console.log("UNAME ---" + req.session.uname);
	console.log("NAME ---" + req.body.name);
	console.log("PROFILE OBJ: --- " + req.body.loc);

	function editProf(y) {
		console.log('EDITING');
		y.uname = req.session.uname ? req.session.uname : y.uname;
		y.name = req.body.name ? req.body.name : y.name;
		y.lang_learning = req.body.lang_learning ? req.body.lang_learning : y.lang_learning; // || y.lang_learning;
		y.lang_native = req.body.lang_native ? req.body.lang_native : y.lang_native;// || y.lang_native;
		y.loc = req.body.loc;// || y.loc;
		y.bday = req.body.bday;// || y.bday;
		y.sex = req.body.sex;// || y.sex;
		y.pic = req.body.pic;// || y.pic;
		y.about_me = req.body.about_me;
		y.save();
		res.send({status: 'good'});
	}

	var createProfile = _ => {

	}

}));

// community load api
router.get('/community_load', ((req, res) => {
	var db = require('/etc/exlang/server/db/accounts_connec.js');
	var Profile = require('/etc/exlang/server/models/profile_model.js');
	// eventually add in searchable params and pass in via url
	var userProfiles = Profile.find({});
	userProfiles.then((x, err) => res.send(x));
}));

router.post('/user_profile', ((req, res) => {
	console.log('user id sent -- ' + req.body.user_id);
	var db = require('/etc/exlang/server/db/accounts_connec.js');
	var Profile = require('/etc/exlang/server/models/profile_model.js');
	// eventually add in searchable params and pass in via url
	console.log("USER ID :  " + req.body.user_id);
	var user_profile = Profile.find({_id: req.body.user_id}).limit(1);
	user_profile.then((x, err) => res.send(x[0]));
}));

router.post('/send_notification', ((req, res) => {
	var db = require('/etc/exlang/server/db/accounts_connec.js');

	var Notification = require('/etc/exlang/server/models/notification_model.js');

	var not_obj = new Notification({});	
	not_obj.not_title = req.body.title;
	not_obj.not_message = req.body.message;
	not_obj.not_read = false,
	not_obj.not_owner = req.body.sendTo;
	not_obj.not_from = req.body.from_name;
	not_obj.not_from_id = req.body.from_id;
	not_obj.not_friend_request = req.body.isFriendRequest;
	not_obj.save();
	res.send({response:'good'});

}));

// takes user ID to retrieve their notifications
// to do: verify user id with user session - possible POST forgery if others happen to know user's db id - DONE
router.post('/notifications', ((req, res) => {
	var db = require('/etc/exlang/server/db/accounts_connec.js');

	var User= require('/etc/exlang/server/models/profile_model.js');
	var myUser= User.find({uname: req.session.uname}).limit(1);
	var Notification = require('/etc/exlang/server/models/notification_model.js');

	myUser.then((x, err) => {
		console.log('USER: ' + x);
		console.log('USER ID: ' + x[0]._id);
		var userNotifications = Notification.find({not_owner: x[0]._id});
		userNotifications.then((y, err) => {
			console.log(y);
			res.send(y);
		});
	});
	
}));

// takes user ID to retrieve their notifications
// to do: verify user id with user session - possible POST forgery if others happen to know user's db id - DONE
router.post('/is_friend', ((req, res) => {
	var db = require('/etc/exlang/server/db/accounts_connec.js');

	var User= require('/etc/exlang/server/models/profile_model.js');
	var myUser= User.find({uname: req.session.uname}).limit(1);
	var Friend= require('/etc/exlang/server/models/friend_model.js');

	myUser.then((x, err) => {
		var myFriendObj= Friend.find({$or:[{user_id_one: x[0]._id}, {user_id_two: x[0]._id}]});
		myFriendObj.then((y, err) => res.send(y));
	});
	
}));

router.post('/add_friend', ((req, res) => {
	var db = require('/etc/exlang/server/db/accounts_connec.js');

	var Friend= require('/etc/exlang/server/models/friend_model.js');
	var myFriendObj = new Friend({});

	myFriendObj.user_id_one = req.body.user_id_one;
	myFriendObj.user_id_two = req.body.user_id_two;

	myFriendObj.save();
	res.send({response:'good'});
	
}));

router.post('/reject_friend', ((req, res) => {
	var db = require('/etc/exlang/server/db/accounts_connec.js');

	var Notification= require('/etc/exlang/server/models/notification_model.js');
	Notification.findByIdAndRemove(req.body.not_id, ((err, x) => {
		res.send({response:'good'});
	}));

}));

router.post('/is_requested', ((req, res) => {
	var db = require('/etc/exlang/server/db/accounts_connec.js');

	var Notification= require('/etc/exlang/server/models/notification_model.js');
	var isRequested= Notification.find({not_owner: req.body.id_two, not_from_id: req.body.id_one});
	isRequested.then((y, err) => {
			!y[0]._id ? res.send(false) : res.send(true)
	});
}));

router.post('/send_message', ((req, res) => {
	var db = require('/etc/exlang/server/db/accounts_connec.js');
	var Message = require('/etc/exlang/server/models/message_model.js');

	var msg_chain = Message({sender_id: req.body.sender_id, receiver_id: req.body.receiver_id, msg_content: req.body.msg_content});
	msg_chain.save();
	res.send({response: 'good'});

}));

router.post('/get_friend_profiles', ((req, res) => {
	var db = require('/etc/exlang/server/db/accounts_connec.js');

	var User= require('/etc/exlang/server/models/profile_model.js');

	// get my user id
	var myUser= User.find({uname: req.session.uname}).limit(1);
	var Friend= require('/etc/exlang/server/models/friend_model.js');

	// once my id is fetched
	myUser.then((x, err) => {
		// get all my associated friends
		var myFriendObj = Friend.find({$or:[{user_id_one: x[0]._id}, {user_id_two: x[0]._id}]});
		// once my associated friends are fetched
		myFriendObj.then((y, err) => {
			// push all my friends' ids onto an array
			var myFriendsIds = [];
			y.map((z) => {
				console.log("MY ID: " + x[0]._id);
				console.log("ID 1: " + z.user_id_one);
				console.log("ID 2: " + z.user_id_two);
				if(z.user_id_one.equals(x[0]._id)) {
					myFriendsIds.push(z.user_id_two);
					console.log("FRIEND ID ADDED 2: " + z.user_id_two);
				}
				else {
					myFriendsIds.push(z.user_id_one);
					console.log("FRIEND ID ADDED 1: " + z.user_id_one);
				}	
			});
			// find all profiles associated with the friends' ids array
			var myFriendProfilesObj= User.find({_id:{$in: myFriendsIds}});
			// send back the found documents
			myFriendProfilesObj.then((finalObjResp, err) => {	
				res.send(finalObjResp);
			})	
		})
	});
}));

router.post('/get_messages', ((req, res) => {
	var db = require('/etc/exlang/server/db/accounts_connec.js');

	var User = require('/etc/exlang/server/models/profile_model.js');

	// get my user id
	var myUser = User.find({uname: req.session.uname}).limit(1);
	var Message = require('/etc/exlang/server/models/message_model.js');

	// once my id is fetched
	myUser.then((x, err) => {
		// get all my associated friends
		var myMessageObj = Message.find({$or:[{sender_id: x[0]._id}, {receiver_id: x[0]._id}]});
		// once my associated friends are fetched
		myMessageObj.then((y, err) => {
				res.send(y);
		})
	});
}));

module.exports = router;
