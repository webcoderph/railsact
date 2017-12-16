class CommentsController < ApplicationController
  def new
    @comment = Comment.new
  end
  
  def create
    @post = Post.find(params[:post_id])
    @comment = Comment.new(post: @post)

    @comment.update_attributes(comment_params)
    redirect_to @post
  end  

  private
  def comment_params
    params.require(:comment).permit(:message)
  end
end
