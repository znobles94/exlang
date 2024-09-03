var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/build');
var APP_DIR = path.resolve(__dirname, 'client/');

var config = {
	module: {
		loaders: [{
			test: /\.jsx?$/,
			include: APP_DIR,
			loader: 'babel-loader',
			query: {compact: false}
/*            query:
            {
                presets:['es2015', 'react']
            }
*/
		},
		{ 
			test: /\.css$/, 
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						url: false
					}
				}
			]
		}],
	},
};

var topLevelFolderConfig = Object.assign({}, config, {
	entry: {
		App: APP_DIR + '/App.jsx',
		AppContainer: APP_DIR + '/AppContainer.jsx',
		Root: APP_DIR + '/Root.jsx',
		index: APP_DIR + '/index.jsx',
		configureStore: APP_DIR + '/configureStore.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

var miscLevelFolderConfig = Object.assign({}, config, {
	entry: {
		404: APP_DIR + '/components/misc/404.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

var navLevelFolderConfig = Object.assign({}, config, {
	entry: {
		Navbar: APP_DIR + '/components/nav/Navbar.jsx',
		NavbarContainer: APP_DIR + '/components/nav/NavbarContainer.jsx',
		Footer: APP_DIR + '/components/nav/Footer.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});


var accountLevelFolderConfig = Object.assign({}, config, {
	entry: {
		LoginPage: APP_DIR + '/components/account/LoginPage.jsx',
		LoginContainer: APP_DIR + '/components/account/LoginContainer.jsx',
		LogoutPage: APP_DIR + '/components/account/LogoutPage.jsx',
		LogoutContainer: APP_DIR + '/components/account/LogoutContainer.jsx',
		RegisterPage: APP_DIR + '/components/account/RegisterPage.jsx',
		RegisterContainer: APP_DIR + '/components/account/RegisterContainer.jsx',
		accConfirmPage: APP_DIR + '/components/account/accConfirmPage.jsx',
		accConfirmContainer: APP_DIR + '/components/account/accConfirmContainer.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

var homeLevelFolderConfig = Object.assign({}, config, {
	entry: {
		LP: APP_DIR + '/components/home/LP.jsx',
		HomeContainer: APP_DIR + '/components/home/HomeContainer.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

var notificationsLevelFolderConfig = Object.assign({}, config, {
	entry: {
		NotificationPage: APP_DIR + '/components/home/NotificationPage.jsx',
		NotificationContainer: APP_DIR + '/components/home/NotificationContainer.jsx',
		NotificationLinkComponent: APP_DIR + '/components/home/NotificationLinkComponent.jsx',
		NotificationLinkContainer: APP_DIR + '/components/home/NotificationLinkContainer.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

var communityLevelFolderConfig = Object.assign({}, config, {
	entry: {
		CommunityPage: APP_DIR + '/components/community/CommunityPage.jsx',
		CommunityContainer: APP_DIR + '/components/community/CommunityContainer.jsx',
		UserProfilePage: APP_DIR + '/components/community/UserProfilePage.jsx',
		UserProfileContainer: APP_DIR + '/components/community/UserProfileContainer.jsx',
		UserLinkComponent: APP_DIR + '/components/community/UserLinkComponent.jsx',
		UserLinkContainer: APP_DIR + '/components/community/UserLinkContainer.jsx',
		UserSearchComponent: APP_DIR + '/components/community/UserSearchComponent.jsx',
		UserSearchContainer: APP_DIR + '/components/community/UserSearchContainer.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

var profileLevelFolderConfig = Object.assign({}, config, {
	entry: {
		ProfilePage: APP_DIR + '/components/profile/ProfilePage.jsx',
		ProfileContainer: APP_DIR + '/components/profile/ProfileContainer.jsx',
		EditProfilePage: APP_DIR + '/components/profile/EditProfilePage.jsx',
		EditProfileContainer: APP_DIR + '/components/profile/EditProfileContainer.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

var friendsLevelFolderConfig = Object.assign({}, config, {
	entry: {
		FriendsPage: APP_DIR + '/components/friends/FriendsPage.jsx',
		FriendsContainer: APP_DIR + '/components/friends/FriendsContainer.jsx',
		FriendsLinkComponent: APP_DIR + '/components/friends/FriendsLinkComponent.jsx',
		FriendsLinkContainer: APP_DIR + '/components/friends/FriendsLinkContainer.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

var messagesLevelFolderConfig = Object.assign({}, config, {
	entry: {
		MessageChainPage: APP_DIR + '/components/messages/MessageChainPage.jsx',
		MessageChainContainer: APP_DIR + '/components/messages/MessageChainContainer.jsx',
		MessageComponent: APP_DIR + '/components/messages/MessageComponent.jsx',
		MessageContainer: APP_DIR + '/components/messages/MessageContainer.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});


module.exports = [
	topLevelFolderConfig, miscLevelFolderConfig, homeLevelFolderConfig, navLevelFolderConfig, accountLevelFolderConfig, communityLevelFolderConfig, profileLevelFolderConfig, friendsLevelFolderConfig, messagesLevelFolderConfig
];

