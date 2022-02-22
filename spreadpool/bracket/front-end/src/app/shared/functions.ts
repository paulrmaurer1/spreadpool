// Functions used by the app

export const convertTime12to24 = time12h => {
  // This function converts a 12 hour time returned by the Calendar widget (hh:mm PM) to
  // a 24 hour time (hh:mm) that can be sent to, stored by the back-end
  const [time, modifier] = time12h.split(" ");
 
  let [hours, minutes] = time.split(":");
 
  if (hours === "12") {
    hours = "00";
  }
 
  if (modifier === "PM") {
    hours = parseInt(hours, 10) + 12;
  }
 
  return `${hours}:${minutes}`;
};

export const convertTime24to12 = time24h => {
  // This function converts a 24 hr time from the back-end (hh:mm) into a 
  // 12 hour time string (hh:mm PM) that can populate the calendar widget with the currently
  // set value

  // Check correct time format and split into components
  var time = time24h.match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time24h];

  if (time.length > 1) { // If time format correct
    time = time.slice(1);  // Remove full string match value
    time[5] = " "; // add space between time & AM/PM
    time[6] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join ('') // return adjusted time or original string
}