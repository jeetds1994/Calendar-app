class EventsController < ApplicationController

  def create
    event = params["event"]
    startdatetime = DateTime.strptime("#{event["start(3i)"]}/#{event["start(2i)"]}/#{event["start(1i)"]} #{event["start(4i)"]}:#{event["start(5i)"]}:00", '%d/%m/%Y %H:%M:%S')
    enddatetime = DateTime.strptime("#{event["end(3i)"]}/#{event["end(2i)"]}/#{event["end(1i)"]} #{event["end(4i)"]}:#{event["end(5i)"]}:00", '%d/%m/%Y %H:%M:%S')
    title = event["title"]
    description = event["description"]
    @event = Event.new(start: startdatetime, end: enddatetime, title: title, description: description)
    @event.save
    redirect_to '/'
  end


end
