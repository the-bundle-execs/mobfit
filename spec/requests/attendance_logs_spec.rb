require 'rails_helper'

RSpec.describe "AttendanceLogs", type: :request do
  describe "GET /attendance_logs" do
    it "works! (now write some real specs)" do
      get attendance_logs_path
      expect(response).to have_http_status(200)
    end
  end
end
