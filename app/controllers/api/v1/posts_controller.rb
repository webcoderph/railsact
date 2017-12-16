class Api::V1::PostsController < ApplicationController
  def search
 
    posts = Post.all
   
    response = {posts: posts, total: posts.count}
    return render json: response    
  end
end