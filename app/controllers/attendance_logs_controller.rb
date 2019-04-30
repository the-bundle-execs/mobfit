class AttendanceLogsController < ApplicationController
    skip_before_action :verify_authenticity_token

  def index
    attendance_logs = AttendanceLog.all
    render json: attendance_logs
  end

  def show
  end


  def new

  end


  def edit
  end


  def create
    attendance_log = current_user.attendance_logs.new(attendance_log_params)

    if attendance_log.valid?
      attendance_log.save
      render json: attendance_log
    else
      render json: attendance_log.errors, status: :unprocessable_entity
    end

  end


  def update

  end

  # DELETE /attendance_logs/1

  def destroy
    @attendance_log = AttendanceLog.find(params[:id])
    @attendance_log.destroy
    # respond_to do |format|
    #   format.html { redirect_to attendance_logs_url, notice: 'Attendance log was successfully destroyed.' }
    #   format.json { head :no_content }
    # end
  end

  private


    def attendance_log_params
      params.require(:attendance_log).permit(:user_id, :event_id)
    end
end
