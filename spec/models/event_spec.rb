require 'rails_helper'

RSpec.describe Event, type: :model do
  let(:user){User.create(email:'jim@gym.com', username: "jim", password: '123456')}
  let(:event){Event.create(event_name: 'Yoga', date: '3/22/2020', time: '2pm', location_name: 'balboa park', activity: 'yoga', level: 'beginner', max_enrollment: 20, equipment: 'yoga mat', duration: '1hour', trainer: user)}

  it "should be a valid event" do
      expect(event.valid?).to be_truthy
  end

  describe "attendance check" do
    let(:user_2){User.create(email:'jim@gym.com', username: "jim", password: '123456')}
    let!(:log){AttendanceLog.create(user: user, event: event)}

    it "should report true for user attending event" do
      expect(event.attending?(user)).to be_truthy
    end

    it "should report false for user not attending event" do
      expect(event.attending?(user_2)).to be_falsy
    end

  end

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
  # 
  # it "should validate max enrollment as an integer" do
  #   event = Event.create(max_enrollment: "15")
  #   expect(event.errors[:max_enrollment]).to_not be_empty
  # end
  #
  # it "should validate max enrollment as a postive number" do
  #   event = Event.create(max_enrollment: -1)
  #   expect(event.errors[:max_enrollment]).to_not be_empty
  # end
end
