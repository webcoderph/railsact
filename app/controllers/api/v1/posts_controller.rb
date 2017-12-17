class Api::V1::PostsController < ApplicationController
  def search
    posts = Post.all
   
    response = {posts: posts, total: posts.count}
    return render json: response    
  end
 
  def index
    @posts = Post.all

    response = {posts: posts, total: posts.count}
    render json: response
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      response = {status: :ok}
    else
      response = {status: :failed}
    end

    render json: response
  end	  

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
