class PlaylistsController < ApplicationController
  before_action :set_playlist, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token
  def index
    @playlists = Playlist.all
    render json: @playlists
  end

  def show
    render json: @playlist = Playlist.find(params[:id])
  end

  # GET /playlists/new
  def new
    @playlist = Playlist.new
  end

  def create
    @playlist = Playlist.new(playlist_params)

    respond_to do |format|
      if @playlist.save
        format.html { redirect_to @playlist, notice: 'Playlist was successfully created.' }
        format.json { render :show, status: :created, location: @playlist }
      else
        format.html { render :new }
        format.json { render json: @playlist.errors, status: :unprocessable_entity }
      end
    end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_playlist
      @playlist = Playlist.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def playlist_params
      params.require(:playlist).permit(:user, :title, :mood_id)
    end
  end
end
