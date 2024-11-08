import React, { useContext } from 'react'
import EventCard from '../../components/eventCard/EventCard';

const EventPage = () => {
    const dummyEvents = [
        {
            name: "Charity Gala",
            Date: new Date(),
            Venue: "Community Hall",
            Quantity: "200",
            expectedWastage: 10,
            provider: "64cfcdee76fe7b00123abcd1",
            location: "City Center",
            Duration: 4
        },
        {
            name: "Tech Conference",
            Date: new Date(),
            Venue: "Tech Park Auditorium",
            Quantity: "500",
            expectedWastage: 50,
            provider: "64cfcdee76fe7b00123abcd2",
            location: "Downtown",
            Duration: 8
        },
        {
            name: "Food Festival",
            Date: new Date(),
            Venue: "Central Park",
            Quantity: "1000",
            expectedWastage: 100,
            provider: "64cfcdee76fe7b00123abcd3",
            location: "Uptown",
            Duration: 10
        },
        {
            name: "Music Concert",
            Date: new Date(),
            Venue: "Stadium",
            Quantity: "700",
            expectedWastage: 70,
            provider: "64cfcdee76fe7b00123abcd4",
            location: "Suburb",
            Duration: 5
        },
        {
            name: "Health Workshop",
            Date: new Date(),
            Venue: "Health Center",
            Quantity: "100",
            expectedWastage: 5,
            provider: "64cfcdee76fe7b00123abcd5",
            location: "Near City Hospital",
            Duration: 3
        }
    ];

    
  return (
    <div>
        {
            dummyEvents.map((event)=>{
                return (
                    <EventCard name={event.name} Date={event.Date} Venue={event.Venue} Quantity={event.Quantity} expectedWastage={event.expectedWastage} provider={event.provider} location={event.location} Duration={event.Duration} />
                )   
            })
        }
    </div>
  )
}

export default EventPage