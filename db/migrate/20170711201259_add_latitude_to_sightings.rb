class AddLatitudeToSightings < ActiveRecord::Migration[5.1]
  def change
    add_column :sightings, :latitude, :decimal
  end
end
