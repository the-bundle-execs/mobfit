require 'rails_helper'

RSpec.describe Event, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"


  it "should validate event name" do
    event = Event.create
    expect(event.errors[:event_name]).to_not be_empty
  end


  it "should validate date" do
    event = Event.create
    expect(event.errors[:date]).to_not be_empty
  end


  it "should validate time" do
    event = Event.create
    expect(event.errors[:time]).to_not be_empty
  end



  it "should validate duration" do
    event = Event.create
    expect(event.errors[:duration]).to_not be_empty
  end



  it "should validate location name" do
    event = Event.create
    expect(event.errors[:location_name]).to_not be_empty
  end



  it "should validate loc_latitude" do
    event = Event.create
    expect(event.errors[:loc_latitude]).to_not be_empty
  end

  it "loc_latitude should be entered as decimal" do
  event = Event.create(loc_latitude: "12.34")
  expect(event.errors[:loc_latitude]).to_not be_empty
  end



  it "should validate loc_longitude" do
    event = Event.create
    expect(event.errors[:loc_longitude]).to_not be_empty
  end

  it "loc_latitude should be entered as decimal" do
  event = Event.create(loc_longitude: "12.34")
  expect(event.errors[:loc_longitude]).to_not be_empty
  end



  it "should validate activity" do
    event = Event.create
    expect(event.errors[:activity]).to_not be_empty
  end



  it "should validate equipment" do
    event = Event.create
    expect(event.errors[:equipment]).to_not be_empty
  end



  it "should validate level" do
    event = Event.create
    expect(event.errors[:level]).to_not be_empty
  end



  it "should validate max enrollment" do
    event = Event.create
    expect(event.errors[:max_enrollment]).to_not be_empty
  end

  it "should validate max enrollment as an integer" do
    event = Event.create(max_enrollment: "15")
    expect(event.errors[:max_enrollment]).to_not be_empty
  end

  it "should validate max enrollment as an whole number" do
    event = Event.create(max_enrollment: 15.43)
    expect(event.errors[:max_enrollment]).to_not be_empty
  end

  it "should validate max enrollment as a postive number" do
    event = Event.create(max_enrollment: -1)
    expect(event.errors[:max_enrollment]).to_not be_empty
  end


  it "should validate trainer_id" do
    event = Event.create(trainer_id: "letter")
    expect(event.errors[:trainer_id]).to_not be_empty
  end
end
