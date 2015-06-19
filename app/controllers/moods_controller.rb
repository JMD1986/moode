class MoodsController < ApplicationController
  before_action :set_mood, only: [:show, :edit, :update, :destroy]

  # GET /moods
  # GET /moods.json
  def index
    @moods = Mood.all
    @playlist = PLaylist.all
    @like = like.new
    @comment = comment.new
  end

  # GET /moods/1
  # GET /moods/1.json
  def show
    @mood = mood.find(params[:id])
    @playlist = playlist.all.sort_by
  end



  # POST /moods
  # POST /moods.json
  def create
    @mood = Mood.new(mood_params)

    respond_to do |format|
      if @mood.save
        format.html { redirect_to @mood, notice: 'Mood was successfully created.' }
        format.json { render :show, status: :created, location: @mood }
      else
        format.html { render :new }
        format.json { render json: @mood.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mood
      @mood = Mood.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def mood_params
      params.require(:mood).permit(:mood)
    end
end
