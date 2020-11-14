Rails.application.routes.draw do
  root to: 'pages#home'
  get 'about', to: 'pages#about'
  get 'products', to: 'pages#products'
  get 'contact', to: 'pages#contact'
  get 'gallery', to: 'pages#gallery'

  resources :pages, only: %i[index new create]
end
