import axios from "axios";
export const fetchTopAlbum = async () => {
  try {
    let res = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchNewAlbum = async () => {
  try {
    let res = await axios.get("https://qtify-backend-labs.crio.do/albums/new");
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
