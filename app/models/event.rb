class Event < ApplicationRecord
  has_many :attendance_logs
  has_many :users through: :attendance_logs
  belongs_to :trainer, class_name: 'User', foreign_key: :trainer_id
end
