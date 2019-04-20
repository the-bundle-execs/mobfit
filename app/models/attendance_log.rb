class AttendanceLog < ApplicationRecord
  belongs_to user, foreign_key: 'user_id'
  belongs_to event, foreign_key: 'event_id'
end
