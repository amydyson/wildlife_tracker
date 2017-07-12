require 'rails_helper'

RSpec.feature "LandingPages", type: :feature do

  context 'Going to home page' do

    Steps 'Go to home page' do
      Given 'I am on the landing page' do
        visit '/'
      end #end given
      Then 'I expect to see two links' do
        expect(page).to have_content('Add an animal')
        expect(page).to have_content('Sighting')
      end #end then
    end #end steps
  end #end context

    context 'Clicking on add an animal link' do
      Steps 'Go to home page' do
        Given 'I am on the landing page' do
          visit '/'
        end
      When 'I click on the link to see an animal' do
        click_link  ("Add an animal")
      end
      Then "I go to the Animal page" do
        expect(page).to have_content('Animals')
        expect(page).to have_content('Common name')
        expect(page).to have_content('Latin name')
        expect(page).to have_content('Kingdom')
       end #then do
      end #Steps do
     end #context

     context 'Clicking on the sighting link' do
       Steps 'Go to home page' do
         Given 'I am on the landing page' do
           visit '/'
         end
       When 'I click on the link add a sighting' do
         click_link  ("Sighting")
       end
       Then "I go to the Sighting page" do
         expect(page).to have_content('New Sighting')
         expect(page).to have_content('Date')
         expect(page).to have_content('Time')
         expect(page).to have_content('Longitude')
         expect(page).to have_content('Latitude')
         expect(page).to have_content('Region')
         expect(page).to have_content('Animal')
         expect(page).to have_button('Create Sighting')
        end #then do
       end #Steps do
      end #context

      context 'Recording a sighting' do
        Steps 'Go to new sighting record page' do
          Given 'I am on the record a sighting page' do
            visit '/sightings/new'
          end
        When 'I record a specific citing' do
          # params[:date] = 2017-07-28
          # # Select option from select tag
          select 'West', from: 'Region'
          # select 'Bear', from: 'Animal'
          select '2017', from: 'sighting_date_1i'
          select 'July', from: 'sighting_date_2i'
          select '28', from: 'sighting_date_3i'


          click_button  ("Create Sighting")
        end
        Then "I see the sighting" do
          expect(page).to have_content("West")
          expect(page).to have_content("2017")
          expect(page).to have_content("07")
          expect(page).to have_content("28")
          # expect(page).to have_field("Animal", :with => "Bear")
          # # expect(page).to have_content("Bear")
          # expect(page).to have_content("2017-07-28")

         end #then do
        end #Steps do
       end #context











end #feature do
