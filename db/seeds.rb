# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
trainer1 = User.where(email: 'trainer1@gym.com').first_or_create do |user|
  user.username = 'Trainer1',
  user.email = 'trainer1@gym.com',
  user.password = '111111'
end

trainer2 = User.where(email: 'trainer2@gym.com').first_or_create do |user|
  user.username = 'Trainer2',
  user.email = 'trainer2@gym.com',
  user.password = '111111'
end


event_attributes = [
  {
    event_name: 'Vinyasa at Sunset Cliffs',
    date: 'Friday May 7 2019',
    time: '6:00 am',
    location_name: 'Sunset Cliffs',
    loc_latitude: 32.54,
    loc_longitude: -117.46,
    activity: 'Vinyasa',
    level: 'intermediate',
    max_enrollment: 10,
    equipment: 'yoga mat',
    trainer: trainer1,
    duration: '1 hour',
    comments: 'Come watch the sunrise with us!'
  },
  {
    event_name: 'Kickboxing at the Forum',
    date: 'Saturday April 20 2019',
    time: '2:00 pm',
    location_name: 'The Shoppes Carlsbad Forum',
    loc_latitude: 32.23456,
    loc_longitude: -183.345,
    activity: 'Kickboxing',
    level: 'beginner',
    max_enrollment: 25,
    equipment: 'Gloves',
    trainer: trainer1,
    duration: '1 hour',
    comments: ''
  },
  {
    event_name: 'Crossfit on Park Blvd',
    date: 'Monday June 26 2019',
    time: '4:00 pm',
    location_name: 'John Magee Park',
    loc_latitude: 32.765,
    loc_longitude: 12.4654,
    activity: 'Crossfit',
    level: 'beginner',
    max_enrollment: 20,
    equipment: 'Running Shoes',
    trainer: trainer2,
    duration: '45 min',
    comments: ''
  },
  {
    event_name: 'Robertson ave Running Club',
    date: 'Wednesday May 10 2019',
    time: '8:00 am',
    location_name: 'Robertson av and Vermont',
    loc_latitude: 32.987,
    loc_longitude: -115.9876,
    activity: 'Cross-country',
    level: 'beginner',
    max_enrollment: 25,
    equipment: 'Running Shoes',
    trainer: trainer2,
    duration: '1 hr',
    comments: 'We meet every Wednesday! Come Join us!'
  },
  {
    event_name: 'Flag Football at Grace Park',
    date: 'Thurday June 12 2019',
    time: '3:00pm',
    location_name: 'Grace Park',
    loc_latitude: 54.654,
    loc_longitude: 234.76,
    activity: 'Flag Football',
    level: 'intermediate',
    max_enrollment: 25,
    equipment: 'Cleats',
    trainer: trainer2,
    duration: '1.5 hrs',
    comments: 'Ages 18-25'
  }
]

event_attributes.each do |attributes|
  Event.where(attributes).first_or_create
end
