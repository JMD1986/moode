class LikesController < ApplicationController
  before_action :set_like, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token


  def create

    authenticate_user!
    @like = Like.new(like_params)

      if @like.save
        format.json { render :show, status: :created, location: @like }
      else
         format.json { render json: @like.errors, status: :unprocessable_entity }
      end

  end

  # def show
  #   like = Playlist.all
  #   like.each do |l| l.
  # end


  private
    def set_like
      @like = Like.find(params[:id])
    end

    def like_params
      params.require(:like).permit(:like, :user_id, :comment_id, :playlist_id)
    end
end
