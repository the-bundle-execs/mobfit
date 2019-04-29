class Event < ApplicationRecord
  after_validation :geocode, if: ->(obj){ obj.location_name.present? and obj.location_name_changed? }

  geocoded_by :location_name, latitude: :loc_latitude, longitude: :loc_longitude

  has_many :attendance_logs
  has_many :users, through: :attendance_logs
  belongs_to :trainer, class_name: 'User', foreign_key: 'trainer_id'
end
