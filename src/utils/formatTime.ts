import moment from "moment"

export const formatTime = (time: number | null) => {
  if (time) {
    return moment(time).format("DD.MM.YYYY HH:mm")
  } else {
    return "null"
  }
}
