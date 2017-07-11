class AddLongitudeToSightings < ActiveRecord::Migration[5.1]
  def change
    add_column :sightings, :longitude, :decimal
  end
end
