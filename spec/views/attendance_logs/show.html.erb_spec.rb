require 'rails_helper'

RSpec.describe "attendance_logs/show", type: :view do
  before(:each) do
    @attendance_log = assign(:attendance_log, AttendanceLog.create!())
  end

  it "renders attributes in <p>" do
    render
  end
end
