Rails.application.routes.draw do
  resources :moods
  resources :users
  resources :comments
  resources :likes
  resources :playlists
  root 'application#index'

 get '/signup', to: "users#new"

  get '/login', to: "sessions#new", as: 'login'
  post '/login', to: "sessions#create", as: 'create_session'
  get '/logout', to: "sessions#destroy", as: 'logout'

#         Prefix Verb   URI Pattern                   Controller#Action
#          moods GET    /moods(.:format)              moods#index
#                POST   /moods(.:format)              moods#create
#       new_mood GET    /moods/new(.:format)          moods#new
#      edit_mood GET    /moods/:id/edit(.:format)     moods#edit
#           mood GET    /moods/:id(.:format)          moods#show
#                PATCH  /moods/:id(.:format)          moods#update
#                PUT    /moods/:id(.:format)          moods#update
#                DELETE /moods/:id(.:format)          moods#destroy
#          users GET    /users(.:format)              users#index
#                POST   /users(.:format)              users#create
#       new_user GET    /users/new(.:format)          users#new
#      edit_user GET    /users/:id/edit(.:format)     users#edit
#           user GET    /users/:id(.:format)          users#show
#                PATCH  /users/:id(.:format)          users#update
#                PUT    /users/:id(.:format)          users#update
#                DELETE /users/:id(.:format)          users#destroy
#       comments GET    /comments(.:format)           comments#index
#                POST   /comments(.:format)           comments#create
#    new_comment GET    /comments/new(.:format)       comments#new
#   edit_comment GET    /comments/:id/edit(.:format)  comments#edit
#        comment GET    /comments/:id(.:format)       comments#show
#                PATCH  /comments/:id(.:format)       comments#update
#                PUT    /comments/:id(.:format)       comments#update
#                DELETE /comments/:id(.:format)       comments#destroy
#          likes GET    /likes(.:format)              likes#index
#                POST   /likes(.:format)              likes#create
#       new_like GET    /likes/new(.:format)          likes#new
#      edit_like GET    /likes/:id/edit(.:format)     likes#edit
#           like GET    /likes/:id(.:format)          likes#show
#                PATCH  /likes/:id(.:format)          likes#update
#                PUT    /likes/:id(.:format)          likes#update
#                DELETE /likes/:id(.:format)          likes#destroy
#      playlists GET    /playlists(.:format)          playlists#index
#                POST   /playlists(.:format)          playlists#create
#   new_playlist GET    /playlists/new(.:format)      playlists#new
#  edit_playlist GET    /playlists/:id/edit(.:format) playlists#edit
#       playlist GET    /playlists/:id(.:format)      playlists#show
#                PATCH  /playlists/:id(.:format)      playlists#update
#                PUT    /playlists/:id(.:format)      playlists#update
#                DELETE /playlists/:id(.:format)      playlists#destroy
#           root GET    /                             application#index
#         signup GET    /signup(.:format)             users#new
#          login GET    /login(.:format)              sessions#new
# create_session POST   /login(.:format)              sessions#create
#         logout GET    /logout(.:format)             sessions#destroy

end
