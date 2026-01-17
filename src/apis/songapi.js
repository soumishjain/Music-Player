
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

export const getArtistsfromsongs = async() => {
    const songs = await getSongs({term:"top",limit:50,country:"IN"})
    const map = new Map();
    songs.forEach(song => {
        if(!map.has(song.artistId)){
            map.set(song.artistId,{
                artistId: song.artistId,
                artistname: song.artistName,
                photo: song.artworkUrl100,
                genre: song.primaryGenreName,
            })
        }
    })
    console.log(map)
    return Array.from(map.values());
}