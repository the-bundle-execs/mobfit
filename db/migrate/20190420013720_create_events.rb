class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :event_name
      t.string :date
      t.string :time
      t.string :location_name
      t.decimal :loc_latitude
      t.decimal :loc_longitude
      t.string :activity
      t.string :level
      t.integer :max_enrollment
      t.string :equipment
      t.integer :trainer_id

      t.timestamps
    end
  end
end
