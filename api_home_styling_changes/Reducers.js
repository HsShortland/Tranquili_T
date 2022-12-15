export const initialState = { datesNotMarkedToMark: ['2022-12-09', '2022-12-04'] }

export default function markCalendarReducer(state = initialState, action) {
    switch (action.type) {
        case "MARK_CALENDAR":
            console.log('meditation marked on calendar');
            if (state.datesNotMarkedToMark.includes(action.payload)){
                return state
            }
            return state.datesNotMarkedToMark = {
                ...state,
                datesNotMarkedToMark: [...state.datesNotMarkedToMark, action.payload]
            }
        default:
            console.log('default')
            return state
    }
}
