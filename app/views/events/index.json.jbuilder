json.array! @events do |event|
  json.event_name event.event_name
  json.date event.date
  json.time event.time
  json.location_name event.location_name
  json.loc_latitude event.loc_latitude
  json.loc_longitude event.loc_longitude
  json.activity event.activity
  json.level event.level
  json.max_enrollment event.max_enrollment
  json.equipment event.equipment
  json.trainer_id event.trainer_id
  json.duration event.duration
  json.comments event.comments
  json.attendance_count event.attendance_logs.length
  json.is_attending event.attending?(current_user)
end
