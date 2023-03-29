function timeConversion(str) {
  const AMIndex = str.slice().indexOf("AM");
  const PMIndex = str.slice().indexOf("PM");
  const hours = str.slice().slice(0, 2);
  const rest = str.slice().slice(2);

  let newTime = 0;

  if (AMIndex !== -1) {
    if (hours == 12) {
      return "00" + rest.slice(0, 6);
    }
    return (newTime = str.slice().slice(0, 8));
  } else if (PMIndex !== -1) {
    if (hours == 24) {
      return "12" + rest.slice(0, 6);
    }
    return (newTime = 12 + Number(hours) + rest.slice(0, 6));
  }

  return newTime;
}