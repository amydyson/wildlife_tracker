class RemoveLongitudeFromSightings < ActiveRecord::Migration[5.1]
  def change
    remove_column :sightings, :longitude, :integer
  end
end
