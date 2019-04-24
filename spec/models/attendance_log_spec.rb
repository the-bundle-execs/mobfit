require 'rails_helper'

RSpec.describe AttendanceLog, type: :model do
  it "should validate event id" do
    att_log = AttendanceLog.create
    expect(att_log.errors[:event_id]).to_not be_empty
  end
end
