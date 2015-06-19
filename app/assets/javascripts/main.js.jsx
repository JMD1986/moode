var containerEl =  document.querySelector('#container');

/* global Backbone React */
var App = Backbone.Router.extend({
    routes: {
        '':                     'home',
        'login':                'login',
        'signup':               'signup',
        'moods/:category':      'moods',
        'playlist/:name':       'playlist',
        'userplaylist/:name':   'userplaylist',
        'profile/:name':        'profile'

    },
    home: function() {
        console.log('home')
        React.render(
            <Home/>,
            containerEl
        );
    },
    login: function() {
        console.log('login')
        React.render(
           <Login/>,
            containerEl
        );
    },
    signup: function() {
        console.log('signup')
        React.render(
            <Signup/>,
            containerEl
        );
    },
    moods: function() {
        console.log('moods')
        React.render(
            <Moods/>,
            containerEl
        );
    },
    playlist: function() {
        console.log('playlist')
        React.render(
           <Playlist/>,
            containerEl
        );
    },
    profile: function() {
        console.log('profile')
        React.render(
           <Profile/>,
            containerEl
        );
    },
    soundcloud: function(){
        console.log('userplaylist')
        React.render(
            <Userplaylist/>,
            containerEl
        );
    }
});

var app = new App();
Backbone.history.start();
// app.navigate('');
