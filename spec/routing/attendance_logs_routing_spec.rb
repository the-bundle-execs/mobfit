require "rails_helper"

RSpec.describe AttendanceLogsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(:get => "/attendance_logs").to route_to("attendance_logs#index")
    end

    it "routes to #new" do
      expect(:get => "/attendance_logs/new").to route_to("attendance_logs#new")
    end

    it "routes to #show" do
      expect(:get => "/attendance_logs/1").to route_to("attendance_logs#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/attendance_logs/1/edit").to route_to("attendance_logs#edit", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/attendance_logs").to route_to("attendance_logs#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/attendance_logs/1").to route_to("attendance_logs#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/attendance_logs/1").to route_to("attendance_logs#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/attendance_logs/1").to route_to("attendance_logs#destroy", :id => "1")
    end
  end
end
