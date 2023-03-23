import { getData } from "./call-api"

export const getApplicationData = async () => {
  return await getData("data");
}