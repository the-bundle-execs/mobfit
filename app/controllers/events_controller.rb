class EventsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    events = Event.all
      render json: events
  end

  def create
    event = current_user.hosted_events.new(event_params)
    if event.valid?
      event.save
      render json: event
    else
      render json: event.errors, status: :unprocessable_entity
    end
  end

  def new
    event = Event.new
  end

  def show
  end

  def edit
  end

  def update
    if @event.update(event_params)
      render json: event
    else
      render json: event.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @event.destroy
    respond_to do |format|
      format.html { redirect_to events_url }
      format.json { head :no_content }
    end
  end

  private
    def set_event
      @event = event.find(params[:id])
    end

    def event_params
      params.require(:event).permit(:event_name, :date, :time, :location_name, :loc_latitude, :loc_longitude, :activity, :level, :max_enrollment, :equipment, :duration, :comments)
    end
end
