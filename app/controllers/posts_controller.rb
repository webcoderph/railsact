class PostsController < ApplicationController
  def index
    @posts = Post.all
  end
  
  def new
    @post = Post.new
  end
  
  def create
    @post = Post.new(post_params)
    
    if @post.save
      redirect_to posts_path
    else
      render 'new'
    end
  end
  
  def show
    @post = Post.find(params[:id])
  end
  
  def search

    posts = Post.all
   
    response = {posts: posts, total: posts.total_entries}
    return render json: response    
  end
  
  private
  def post_params
    params.require(:post).permit(:title, :content)
  end
end
