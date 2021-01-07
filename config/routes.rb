Rails.application.routes.draw do
  scope "(:locale)", locale: /en-US|it/ do

  root to: 'pages#home'
  get 'about', to: 'pages#about'
  get 'products', to: 'pages#products'
  get 'contact', to: 'pages#contact'
  get 'gallery', to: 'pages#gallery'
end
