class LikesController < ApplicationController
  before_action :set_like, only: [:show, :edit, :update, :destroy]

  def create

    authenticate_user!
    @like = Like.new(like_params)

    respond_to do |format|
      if @like.save
        format.html { redirect_to @like, notice: 'Like was successfully created.' }
        format.json { render :show, status: :created, location: @like }
      else
        format.html { render :new }
        format.json { render json: @like.errors, status: :unprocessable_entity }
      end
    end
  end


  private
    def set_like
      @like = Like.find(params[:id])
    end

    def like_params
      params.require(:like).permit(:like, :user_id, :comment_id, :playlist_id)
    end
end
