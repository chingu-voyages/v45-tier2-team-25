import { fetchStrikes } from "./api";

export async function layoutLoader() {
  const strikesList = await fetchStrikes();
  return { strikesList };
}
