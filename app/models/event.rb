class Event < ApplicationRecord
  # after_validation :geocode, if: ->(obj){ obj.location_name.present? and obj.location_name_changed? }
  #
  # geocoded_by :location_name, latitude: :loc_latitude, longitude: :loc_longitude

  validates :event_name, :date, :time, :location_name, :activity, :level, :max_enrollment, :equipment, :duration, presence: true


  has_many :attendance_logs
  has_many :users, through: :attendance_logs
  belongs_to :trainer, class_name: 'User', foreign_key: 'trainer_id'

  def attending? user
    self.attendance_logs.where(user_id: user.id).count > 0
  end

end
