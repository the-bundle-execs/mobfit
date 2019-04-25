require 'rails_helper'

RSpec.describe "attendance_logs/edit", type: :view do
  before(:each) do
    @attendance_log = assign(:attendance_log, AttendanceLog.create!())
  end

  it "renders the edit attendance_log form" do
    render

    assert_select "form[action=?][method=?]", attendance_log_path(@attendance_log), "post" do
    end
  end
end
