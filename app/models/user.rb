class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :attendance_logs
  has_many :events, through: :attendance_logs
  has_many :hosted_events, class_name: 'Event', foreign_key: :trainer_id
end
