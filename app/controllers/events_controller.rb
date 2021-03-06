class EventsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @events = Event.all
  end

  def create
    @event = current_user.hosted_events.new(event_params)
    if @event.valid?
      @event.save
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  def new
    @event = Event.new
  end

  def show
    @event = Event.find(params[:id])
    render json: @event
  end

  def edit
  end

  def update
    @event = Event.find(params[:id])
    if @event.update(event_params)
      @event.save
      render json: @event
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
  end

  def unsubscribe
    @event = Event.find(params[:id])
    @event.attendance_logs.where(user: current_user).destroy_all if @event
    render :show
  end

  private
    def event_params
      params.fetch(:event, {}).permit(:event_name, :date, :time, :location_name, :activity, :level, :max_enrollment, :equipment, :duration)
    end
end
