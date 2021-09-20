// location: 'Somestreet 25, 12345 San Somewhereo',
// date: '2021-05-12',

export const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export const formattedAddress = location.replace(", ", "\n");
