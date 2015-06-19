Rails.application.routes.draw do
  resources :moods
  resources :users
  resources :comments
  resources :likes
  resources :playlists
  root 'application#index'

end
