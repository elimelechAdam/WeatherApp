export function kelvinToCelsius(kelvin) {
  return Math.floor(kelvin - 273.15);
}
export function convertTimeToReadable(unixTime) {
  const date = new Date(unixTime * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Format hours and minutes to always be two digits
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return formattedHours + ":" + formattedMinutes;
}
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
};
