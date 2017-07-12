require 'rails_helper'

RSpec.feature "SimulateWildlifeTracker", type: :feature, js: true do
  context 'Getting to home page' do
    Steps 'Go to home page' do
      Given 'I am on the landing page' do
        visit '/'
      end
      When 'I click on the link to see an animal' do
        click_link  "See an animal? Add it to our DB if it's not there already "
      end
      Then "I go to the Animal page" do
        expect(page).to have_content('Animals')
        expect(page).to have_content('Year: 1985')
      end
      And 'I can see the speed of the car' do
        expect(page).to have_content('Speed: 0Km/h')
      end
    end
  end
  context 'Simulating a car' do
     Steps 'Speeding up a car' do
       Given 'I have created a car' do
         visit '/'
         fill_in 'make', with: 'DeLorean'
         fill_in 'model_year', with: '1985'
         click_button 'Create new car'
       end
       Then "the car's speed is 0Km/h" do
         expect(page).to have_content('Speed: 0Km/h')
       end
       When "I can click the accelerate button" do
         click_button 'Accelerate'

       end
       Then 'the speed of the car should be 10Km/h higher' do
         expect(page).to have_content('Speed: 10Km/h')
       end
     end
  end

  context 'Simulating a car' do
    Steps 'Slowing down a car' do
      Given 'I have created a car' do
        visit '/'
        fill_in 'make', with: 'DeLorean'
        fill_in 'model_year', with: '1985'
        click_button 'Create new car'
      end
      Then "the car's speed is 0Km/h" do
        expect(page).to have_content('Speed: 0Km/h')
      end
      When "I can click the accelerate button" do
        click_button 'Accelerate'
      end
      Then 'the speed of the car should be 10Km/h higher' do
        expect(page).to have_content('Speed: 10Km/h')
      end
      When "I can click the brake button" do
        click_button 'Brake'
      end
      Then 'the speed of the car should be 7Km/h lower' do
        expect(page).to have_content('Speed: 3Km/h')
      end
      When 'I repreatedly click the brake' do
        click_button 'Brake'
        click_button 'Brake'
        click_button 'Brake'
      end
      Then 'the car slows down to 0Km/h and does not go backwards' do
        expect(page).to have_content('Speed: 0Km/h')
      end
    end
  end # end of Simulating car

  context 'Status of light' do
    Steps 'Turning on and off' do
      Given 'I have created a car' do
        visit '/'
        fill_in 'make', with: 'DeLorean'
        fill_in 'model_year', with: '1985'
        click_button 'Create new car'
      end
      When "clicking on a button labelled Simulate Car" do
        click_button 'Simulate Car'
      end
      Then 'I am taken to a status page that shows whether the lights on the car are on or off. They start off.' do
        expect(page).to have_content('Lights: false')
      end
      When "clicking on a button labelled Lights" do
        click_button 'Lights'
      end
      Then 'I am taken to a status page that shows whether the lights on the car are on or off. They turn to on.' do
        expect(page).to have_content('Lights: true')
      end

    end
  end # end of Status of lights

  context 'Status of Parking Brake' do
    Steps 'Setting the parking brakes on and off' do
      Given 'I have created a car' do
        visit '/'
        fill_in 'make', with: 'DeLorean'
        fill_in 'model_year', with: '1985'
        click_button 'Create new car'
      end

      When "I can set the parking brake" do
        choose 'set'        #use the id here from the form input
        save_and_open_page
      end
      When "I can release the parking brake" do
        choose 'release'  #use the id here from the form input
      end
      When "the parking brake is set, then the accelerate button will not work" do
        choose 'set'
        expect(page).to have_button('Accelerate', disabled: true)
      end
    end
  end # end of Brakes

end #end of rspec file
