export const setPhrase = (hours) => {
    hours = parseInt(hours.substr(0, 2));
    if (hours <= 12) {
      return "MORNING";
    } else if (hours > 12 && hours < 18) {
      return "AFTERNOON";
    } else {
      return "NIGHT";
    }
  };
  