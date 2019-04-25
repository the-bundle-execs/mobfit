require 'rails_helper'

RSpec.describe "attendance_logs/index", type: :view do
  before(:each) do
    assign(:attendance_logs, [
      AttendanceLog.create!(),
      AttendanceLog.create!()
    ])
  end

  it "renders a list of attendance_logs" do
    render
  end
end
