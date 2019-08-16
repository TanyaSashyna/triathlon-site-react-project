import * as types from "../actionTypes/actionTypes";

const initialState = {
    events: [],
    eventsArrTitles: [],
    eventsArrShort: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_REQUEST_EVENTS: {
            return state;
        }

        case types.GET_REQUEST_SUCCESS_EVENTS: {            
            const allEvents = action.payload.events.reverse().map( event => ({
                    ...event,
                    eventDate: new Date(event.eventDate).toDateString().split(' ').slice(1,4)
                })
            )

            const eventsTitles = allEvents.map(event => event.title); 

            const eventsArr = allEvents.map(event => ({
                title: event.title,
                id: event._id
            }));

            return {
                ...state,
                events: allEvents,
                eventsArrTitles: eventsTitles,
                eventsArrShort: eventsArr
            };
        }

        case types.GET_REQUEST_ERROR_EVENTS: {
            console.log('error events');
            return state;
        }

        default:
            return state;
    }
}