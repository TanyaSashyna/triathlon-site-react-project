export default {

    eventFormInitialValue: {
        mainBannerPicture: "https://tokyo2020.org/assets/img/pages/news/20180802-01-photo-main.jpg",
        title: "",
        eventType: "",
        eventDate: "",
        country: "",
        city: "",
        overview: "",
        contentPicture: "",
        contentVideo: "",
        marathoneDistancePrice: "",
        halfmarathoneDistancePrice: "",
        ageLimit: "",
        awardMedals: "",
        maximumTime: "",
        aidStations: "",
        equipmentStorage: "",
        parking: "",
        refreshments: "",
        map: "",
        addEventMessage: null
    },

    eventList: [],
    editFormFlag: false,
    gallery: [],

    eventTypes: [
        { optionName: 'Select Event Type', id: 1 },
        { optionName: 'Triathlon', id: 2 },
        { optionName: 'Marathon', id: 3 },
        { optionName: 'Cycling', id: 4 }
    ]
}