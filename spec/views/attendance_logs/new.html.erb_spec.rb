require 'rails_helper'

RSpec.describe "attendance_logs/new", type: :view do
  before(:each) do
    assign(:attendance_log, AttendanceLog.new())
  end

  it "renders new attendance_log form" do
    render

    assert_select "form[action=?][method=?]", attendance_logs_path, "post" do
    end
  end
end
