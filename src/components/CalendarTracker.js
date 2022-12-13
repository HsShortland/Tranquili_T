import { Calendar} from 'react-native-calendars';
import { useSelector } from 'react-redux';

function transformDatesToCalendarFormat(dates) {
    if (!dates || dates.length === 0)
        return {};

    console.log(dates)

    const transformedDates =
        Object.fromEntries(
            dates.map(x =>
                [x, { selected: true, selectedColor: '#384A72' }]
            )
        );

    return transformedDates;
}


export default function CalendarTracker() {

    const markOnCalendar = useSelector(
        ((state) => state.datesNotMarkedToMark)
    );

    return (
        <Calendar markedDates={transformDatesToCalendarFormat(markOnCalendar)} firstDay={1} enableSwipeMonths={true}
        theme={{calendarBackground: '#15224c', textSectionTitleColor: '#AEA488', dayTextColor:'#727e94',
        monthTextColor: '#E0AB78'}} />
    );
}