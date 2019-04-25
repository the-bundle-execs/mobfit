require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { User.create }
  it "should validate username" do
    expect(user.errors[:username]).to_not be_empty
  end

  #devise is testing this
  it "should validate email" do
    expect(user.errors[:email]).to_not be_empty
  end

  #devise is testing this
  it "should validate password" do
    expect(user.errors[:password]).to_not be_empty
  end

  it "should validate username is unique" do
      user_one = User.create(:username=>"user", :email=>"test@email.com", :password=>"1233453")
      user_two = User.new(:username=>"user", :email=>"test2@email.com", :password=>"confused")
      expect { user_two.save! }.to raise_error (ActiveRecord::RecordInvalid)
  end

  #devise is testing this
  it "should validate email is unique" do
    User.create!(:username=>"user", :email=>"test@email.com", :password=>"1233453")
    user_two = User.new(:username=>"user_two", :email=>"test@email.com", :password=>"confused")
    user_two.should_not be_valid
    user_two.errors[:email].should include("has already been taken")
  end

  #devise is testing this
  it "should validate password is at least 6 characters in length" do
    user_one = User.create(:username=>"user", :email=>"test@email.com", :password=>"12453")
    expect(user_one.errors[:password]).to_not be_empty
  end
end
