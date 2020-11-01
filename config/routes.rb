Rails.application.routes.draw do

  root to: 'pages#home'
  get 'about', to: 'pages#about'
  get 'products', to: 'pages#products'
  get 'contact', to: 'pages#contact'
  resources :pages, only: [:index, :new, :create]
end
