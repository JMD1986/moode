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

end
