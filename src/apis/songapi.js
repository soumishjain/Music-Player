import axios from "axios";

const itunesApi = axios.create({
    baseURL: "https://itunes.apple.com",
});

export const getSongs = async ({
    term = "top songs",
    limit = 20,
    country = "IN",
} = {}) => {
    try{
        const res = await itunesApi.get("/search",{
            params:{
                term,
                media : 'music',
                entity: "song",
                limit,
                country,
            },
        });
        return res.data.results;
    } catch(err){
        console.log("Error fetching Songs: ", err);
        return []
    }
}