Rails.application.routes.draw do
  match '(*path)', to: 'pages#index', via: [:get]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
