# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# these are the parent and child classes
class BlogPostsController < ApplicationController
  def index
    # ---2)
    #this is defining that the index will show all of the blog posts
    @posts = BlogPost.all
  end

  # ---3)
  #this is saying that the show command will show the specifed blog post by the id
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  #the new command and directs you to a form to input a new entry
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    #the crate command will take in the blog post params to create a post action
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    #the edit command will take in the id params and direct to the specific post
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # the update command takes in the id param and if valid updates the post
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # the else in the destory if statement saying that something is not right (the post doesnt exist or didnt specify and if directing you to specify the post id)
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  #this privte line is a hidden param that keeps these vaiables unchangeable unless it is accessed though specified controller
  private
  def blog_post_params
    # ---10)
    #this is the specifacation for the param
    params.require(:blog_post).permit(:title, :content)
  end
end
