import * as types from "../actionTypes/actionTypes";

const initialState = {
    results: [],
    marathoneResults: [],
    halfMarathoneResults: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_RESULT: {
            return state;
        }

        case types.GET_RESULT_SUCCESS: {            
            const resultsArr = action.payload.results;
            //console.log(resultsArr);
            const marathoneResultsArr = resultsArr.filter( elem => elem.eventUser.distance === "Marathone" );
            
            const halfMarathoneResultsArr = resultsArr.filter( elem => elem.eventUser.distance === "Half marathone" );

            return {
                ...state,
                results: action.payload.results,
                marathoneResults: marathoneResultsArr,
                halfMarathoneResults: halfMarathoneResultsArr
            };
        }

        case types.GET_RESULT_ERROR: {
            console.log('error results');
            return state;
        }

        default:
            return state;
    }
}