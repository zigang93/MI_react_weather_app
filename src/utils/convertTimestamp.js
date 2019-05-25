export const convertTimestamp = (timestamp, format ) => {

  let monthNames = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June',
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
  ]

  let weekdayName = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'
  ]
  
  const getMonthNames = d =>  monthNames[d];
  const getWeekDayName = d => weekdayName[d];

  let d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
      yyyy = d.getFullYear(), // get year
      weekday = format === 'list' ? 
        getWeekDayName( d.getDay() ) 
      : 
        getWeekDayName( d.getDay() ).substr(0, 3), // shortname weekday
      mm = getMonthNames(d.getMonth()).substr(0, 3), // shortname month
      dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
      hh = d.getHours(), // get hour
      h = hh,
      min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
      ampm = 'AM';

  // AM/PM 
  if (hh > 12) {
      h = hh - 12;
      ampm = 'PM';
  } else if (hh === 12) {
      h = 12;
      ampm = 'PM';
  } else if (hh === 0) {
      h = 12;
  }

  if (format === 'list') {
    return `${dd} ${mm} ${yyyy} , ${weekday}` 
  } else {
    return `${weekday} ${dd} ${mm} ${yyyy} ${h}:${min} ${ampm}` 
  }
  
  
}