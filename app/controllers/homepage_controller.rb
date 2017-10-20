class HomepageController < ApplicationController

  def index
    @event = Event.new
    @events = Event.all
    render :index
  end
end
