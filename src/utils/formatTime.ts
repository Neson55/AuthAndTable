import moment from "moment";

export const formatTime = (time: number | null) => {
  if (time) {
    const momentTime = moment.unix(time);
    return momentTime.format("DD.MM.YYYY HH:mm");
  } else {
    return "null";
  }
};