class AttendanceLogsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    attendance_logs = AttendanceLog.all
    render json: attendance_logs
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

  def destroy
    attendance_log = AttendanceLog.find(params[:id])
    attendance_log.destroy
  end

  private
    def attendance_log_params
      params.require(:attendance_log).permit(:user_id, :event_id)
    end
end
