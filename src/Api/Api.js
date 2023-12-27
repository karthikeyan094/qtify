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

export const fetchAllSongs = async () => {
  try {
    const response = await axios.get(
      `https://qtify-backend-labs.crio.do/songs`
    );
    console.log("songs api", response.data);
    return response.data;
  } catch (err) {
    console.log("ERROR IN API", err);
  }
};
export const fetchGenres = async () => {
  try {
    const response = await axios.get(
      "https://qtify-backend-labs.crio.do/genres"
    );
    console.log("songs api", response.data);
    return response.data;
  } catch (err) {
    console.log("ERROR IN API", err);
  }
};
