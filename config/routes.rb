Rails.application.routes.draw do
  resources :posts do
    resources :comments
  end
  
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      get '/posts/search/'=>'posts#search'
    end
  end
  
  root :to => "posts#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
