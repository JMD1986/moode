var containerEl =  document.querySelector('#container');
// var MoodsCollection = new MoodCollection();
// MoodsCollection.fetch();
// console.log(MoodsCollection);

/* global Backbone React */
var App = Backbone.Router.extend({
    routes: {

        '':                     'login',
        '':                     'login',
        'login':                'login',
        'signup':               'signup',
        'moods/:category':      'moods',
        'playlist/:name':       'playlist',
        'userplaylist/:name':   'userplaylist',
        'profile/:name':        'profile'

    },
    home: function() {
        React.render(
            <Home/>,
            containerEl
        );
    },
    login: function() {
     
        React.render(
           <Login/>,
            containerEl
        );
    },
    signup: function() {
       
        React.render(
            <Signup/>,
            containerEl
        );
    },
    moods: function() {
        React.render(
            <Moods/>,
            containerEl
        );
    },
    playlist: function() {
        React.render(
           <Playlist/>,
            containerEl
        );
    },
    profile: function() {
        React.render(
           <Profile/>,
            containerEl
        );
    },
    userplaylist: function(){
        React.render(
            <UserPlaylist/>,
            containerEl
        );
    }
});

var app = new App();
Backbone.history.start();
// app.navigate('');
