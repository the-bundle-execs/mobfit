class AddColummnsToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :duration, :string
    add_column :events, :comments, :string
  end
end
