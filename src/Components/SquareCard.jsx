import React, { useEffect, useRef, useState } from 'react' 
import { getSongs } from '../apis/songapi';

const SquareCard = ({elem}) => {
//     const trending = [
//   // 🎵 Bollywood
//   {
//     song: "Kesariya",
//     artist: "Arijit Singh",
//     poster: "https://i.pinimg.com/736x/fc/a0/50/fca0505927838270c47c116bbc012e6e.jpg",
//     id: 1,
//     audio: '/Audios/Gehra-Hua-by-Irshad-Kamil(PagalWorldi.com.co).mp3'
//   },
//   {
//     song: "Tum Hi Ho",
//     artist: "Arijit Singh",
//     poster: "https://i.pinimg.com/1200x/c4/11/2e/c4112e2f3db04d79b737541e50f1cb50.jpg"
//   },
//   {
//     song: "Chaleya",
//     artist: "Arijit Singh, Shilpa Rao",
//     poster: "https://i.pinimg.com/1200x/43/8c/1f/438c1f52d6c180e0fa5a9839979de740.jpg"
//   },
//   {
//     song: "Apna Bana Le",
//     artist: "Arijit Singh",
//     poster: "https://i.pinimg.com/736x/6b/21/45/6b2145aad25d61ac5bf7d490c4e94fe7.jpg"
//   },
//   {
//     song: "Raataan Lambiyan",
//     artist: "Jubin Nautiyal, Asees Kaur",
//     poster: "https://i.pinimg.com/1200x/8b/1b/87/8b1b87a0d8ce1299eeeb48c55fdea750.jpg"
//   },
//   {
//     song: "Shayad",
//     artist: "Arijit Singh",
//     poster: "https://i.pinimg.com/736x/01/3f/d1/013fd171d097b6739cfc47c210ad25a6.jpg"
//   },
//   {
//     song: "Kaise Hua",
//     artist: "Vishal Mishra",
//     poster: "https://i.pinimg.com/1200x/b7/e3/6c/b7e36ccb14dcd6ea4385bd00a00af088.jpg"
//   },
//   {
//     song: "Tera Yaar Hoon Main",
//     artist: "Arijit Singh",
//     poster: "https://i.pinimg.com/736x/d4/5f/ec/d45fecc606b7ea7f7396d35bfedec671.jpg"
//   },
//   {
//     song: "Ghungroo",
//     artist: "Arijit Singh, Shilpa Rao",
//     poster: "https://i.pinimg.com/736x/3b/5d/17/3b5d17da4f8d207beb8e4db08fbb3a31.jpg"
//   },
//   {
//     song: "Kalank Title Track",
//     artist: "Arijit Singh",
//     poster: "https://i.pinimg.com/736x/8a/bd/46/8abd46111c4cba0add2a4e473b56abb1.jpg"
//   },

//   // 🎧 Hollywood
//   {
//     song: "Blinding Lights",
//     artist: "The Weeknd",
//     poster: "https://i.pinimg.com/736x/52/4b/f2/524bf295e7c4d965187bc69cd71a7fe6.jpg"
//   },
//   {
//     song: "Shape of You",
//     artist: "Ed Sheeran",
//     poster: "https://i.pinimg.com/736x/73/6b/ea/736bea93a89fba9865883abf65892f77.jpg"
//   },
//   {
//     song: "Someone You Loved",
//     artist: "Lewis Capaldi",
//     poster: "https://i.pinimg.com/736x/47/82/32/47823263dfdac5cd6a2252a2692c3261.jpg"
//   },
//   {
//     song: "As It Was",
//     artist: "Harry Styles",
//     poster: "https://i.pinimg.com/1200x/a8/6d/c9/a86dc9d3df902148bc5ef931d38f4b47.jpg"
//   },
//   {
//     song: "Levitating",
//     artist: "Dua Lipa",
//     poster: "https://i.pinimg.com/1200x/0a/b2/e8/0ab2e805df8ad726854ee6456686fe95.jpg"
//   },
//   {
//     song: "Perfect",
//     artist: "Ed Sheeran",
//     poster: "https://i.pinimg.com/736x/73/6b/ea/736bea93a89fba9865883abf65892f77.jpg"
//   },
//   {
//     song: "Stay",
//     artist: "The Kid LAROI, Justin Bieber",
//     poster: "https://i.pinimg.com/736x/0f/44/39/0f4439035da7c846d1df00961dc78807.jpg"
//   },
//   {
//     song: "Believer",
//     artist: "Imagine Dragons",
//     poster: "https://i.pinimg.com/736x/4e/51/15/4e5115e42a0042b22c70b4d3d8132ca0.jpg"
//   },
//   {
//     song: "Counting Stars",
//     artist: "OneRepublic",
//     poster: "https://i.pinimg.com/1200x/5a/56/8f/5a568f7e54f485438104e14c538db661.jpg"
//   },
//   {
//     song: "Closer",
//     artist: "The Chainsmokers",
//     poster: "https://i.pinimg.com/1200x/69/82/1a/69821afed2835226ba715b8b3f5881c6.jpg"
//   }
// ];
// const popular = [
//   //  Bollywood
//   {
//     song: "Heeriye",
//     artist: "Arijit Singh, Jasleen Royal",
//     poster: "https://i.scdn.co/image/ab67616d0000b2734a60872ae145776164540a7f"
//   },
//   {
//     song: "O Bedardeya",
//     artist: "Arijit Singh",
//     poster: "https://c.saavncdn.com/576/O-Bedardeya-From-Tu-Jhoothi-Main-Makkaar-Hindi-2023-20230303194422-500x500.jpg"
//   },
//   {
//     song: "Phir Aur Kya Chahiye",
//     artist: "Arijit Singh",
//     poster: "https://c.saavncdn.com/012/Phir-Aur-Kya-Chahiye-From-Zara-Hatke-Zara-Bachke-Hindi-2023-20250129153123-500x500.jpg"
//   },
//   {
//     song: "Tum Se Hi",
//     artist: "Mohit Chauhan",
//     poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRogU-aeZjIUojLXjUPP3BmH24-kFACeevhqA&s"
//   },
//   {
//     song: "Agar Tum Saath Ho",
//     artist: "Arijit Singh, Alka Yagnik",
//     poster: "https://pbs.twimg.com/media/CRSC-VaUYAAP4oV.png"
//   },
//   {
//     song: "Kabira",
//     artist: "Arijit Singh, Harshdeep Kaur",
//     poster: "https://i.scdn.co/image/ab67616d0000b273a9a39100e092d63ffa102405"
//   },
//   {
//     song: "Ilahi",
//     artist: "Arijit Singh",
//     poster: "https://i.pinimg.com/474x/76/bc/40/76bc40062549d4668481042acbf89a38.jpg"
//   },
//   {
//     song: "Hawayein",
//     artist: "Arijit Singh",
//     poster: "https://c.saavncdn.com/260/Hawayein-From-Jab-Harry-Met-Sejal--Hindi-201720170726112607-500x500.jpg"
//   },
//   {
//     song: "Jeene Laga Hoon",
//     artist: "Atif Aslam, Shreya Ghoshal",
//     poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRet2qA5OptafPQNGaZPStua_LvAnj92sOUxA&s"
//   },
//   {
//     song: "Dil Diyan Gallan",
//     artist: "Atif Aslam",
//     poster: "https://a10.gaanacdn.com/gn_img/song/2lV3d1WRgB/V3d56QQoWR/size_m_1516003439.jpg"
//   },

//   //  Hollywood
//   {
//     song: "Heat Waves",
//     artist: "Glass Animals",
//     poster: "https://upload.wikimedia.org/wikipedia/en/b/b0/Glass_Animals_-_Heat_Waves.png"
//   },
//   {
//     song: "Lovely",
//     artist: "Billie Eilish, Khalid",
//     poster: "https://upload.wikimedia.org/wikipedia/en/f/fa/Billie_Eilish_and_Khalid_-_Lovely.png"
//   },
//   {
//     song: "Bad Guy",
//     artist: "Billie Eilish",
//     poster: "https://i1.sndcdn.com/artworks-000537584385-41r6ld-t1080x1080.jpg"
//   },
//   {
//     song: "Senorita",
//     artist: "Shawn Mendes, Camila Cabello",
//     poster: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Shawn_Mendes_and_Camila_Cabello_-_Se%C3%B1orita.png"
//   },
//   {
//     song: "Sunflower",
//     artist: "Post Malone, Swae Lee",
//     poster: "https://c.saavncdn.com/658/Sunflower-Spider-Man-Into-the-Spider-Verse--English-2018-20181018121039-500x500.jpg"
//   },
//   {
//     song: "Shallow",
//     artist: "Lady Gaga, Bradley Cooper",
//     poster: "https://upload.wikimedia.org/wikipedia/en/0/0d/Lady_Gaga_%26_Bradley_Cooper_-_Shallow_%28Single_Cover%29.jpg"
//   },
//   {
//     song: "Dance Monkey",
//     artist: "Tones and I",
//     poster: "https://upload.wikimedia.org/wikipedia/en/1/1f/Dance_Monkey_by_Tones_and_I.jpg"
//   },
//   {
//     song: "Let Me Love You",
//     artist: "DJ Snake, Justin Bieber",
//     poster: "https://upload.wikimedia.org/wikipedia/en/a/a5/DJSnakeLetMeLoveYou.jpg"
//   },
//   {
//     song: "Starboy",
//     artist: "The Weeknd",
//     poster: "https://upload.wikimedia.org/wikipedia/en/3/3f/The_Weeknd_-_Starboy_%28single%29.jpg"
//   },
//   {
//     song: "Thunder",
//     artist: "Imagine Dragons",
//     poster: "https://c.saavncdn.com/918/Thunder-English-2018-20180523150713-500x500.jpg"
//   }
// ];
// const neww = [
//   //  Bollywood
//   {
//     song: "Tum Hi Ho",
//     artist: "Arijit Singh",
//     poster: "https://upload.wikimedia.org/wikipedia/en/f/ff/Tum_Hi_Ho_cover.jpeg"
//   },
//   {
//     song: "Agar Tum Saath Ho",
//     artist: "Arijit Singh, Alka Yagnik",
//     poster: "https://i.scdn.co/image/ab67616d00001e02e211a32490d19aa970956a7d"
//   },
//   {
//     song: "Pee Loon",
//     artist: "Mohit Chauhan",
//     poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKz780_9T6sYgn4vCWPU87tR7gmcwdzRSfMA&s"
//   },
//   {
//     song: "Kabira",
//     artist: "Arijit Singh, Harshdeep Kaur",
//     poster: "https://c.saavncdn.com/440/Yeh-Jawaani-Hai-Deewani-2013-500x500.jpg"
//   },
//   {
//     song: "Tum Se Hi",
//     artist: "Mohit Chauhan",
//     poster: "https://c.saavncdn.com/987/Tum-Se-Hi-Unplugged-Hindi-2023-20230922165837-500x500.jpg"
//   },
//   {
//     song: "Dil Diyan Gallan",
//     artist: "Atif Aslam",
//     poster: "https://a10.gaanacdn.com/gn_img/song/2lV3d1WRgB/V3d56QQoWR/size_m_1516003439.jpg"
//   },
//   {
//     song: "Jeene Laga Hoon",
//     artist: "Atif Aslam, Shreya Ghoshal",
//     poster: "https://i.scdn.co/image/ab67616d0000b273862625340b43eea1beae2dde"
//   },
//   {
//     song: "Hawayein",
//     artist: "Arijit Singh",
//     poster: "https://c.saavncdn.com/260/Hawayein-From-Jab-Harry-Met-Sejal--Hindi-201720170726112607-500x500.jpg"
//   },
//   {
//     song: "Saibo",
//     artist: "Shreya Ghoshal, Tochi Raina",
//     poster: "https://c.saavncdn.com/277/Saibo-Sped-Up-Hindi-2024-20240215120008-500x500.jpg"
//   },
//   {
//     song: "Iktara",
//     artist: "Kavita Seth",
//     poster: "https://c.saavncdn.com/910/Wake-Up-Sid-Hindi-2009-20190617160255-500x500.jpg"
//   },

//   //  Hollywood
//   {
//     song: "Let Me Down Slowly",
//     artist: "Alec Benjamin",
//     poster: "https://c.saavncdn.com/904/Let-Me-Down-Slowly-English-2018-20181113221004-500x500.jpg"
//   },
//   {
//     song: "Lovely",
//     artist: "Billie Eilish, Khalid",
//     poster: "https://c.saavncdn.com/952/Lovely-English-2020-20220511234821-500x500.jpg"
//   },
//   {
//     song: "Happier",
//     artist: "Ed Sheeran",
//     poster: "https://c.saavncdn.com/443/SOUR-English-2021-20210622205946-500x500.jpg"
//   },
//   {
//     song: "Photograph",
//     artist: "Ed Sheeran",
//     poster: "https://i.scdn.co/image/ab67616d0000b27313b3e37318a0c247b550bccd"
//   },
//   {
//     song: "All of Me",
//     artist: "John Legend",
//     poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjq74_9Y0ZXEFdeLIMH8e14iOB9-v1SK8kwg&s"
//   },
//   {
//     song: "Take Me To Church",
//     artist: "Hozier",
//     poster: "https://i.scdn.co/image/ab67616d0000b2737a9bf5f82e32d33d4503fe7b"
//   },
//   {
//     song: "See You Again",
//     artist: "Wiz Khalifa, Charlie Puth",
//     poster: "https://c.saavncdn.com/184/Furious-7-Original-Motion-Picture-Soundtrack-English-2015-500x500.jpg"
//   },
//   {
//     song: "Arcade",
//     artist: "Duncan Laurence",
//     poster: "https://upload.wikimedia.org/wikipedia/en/2/2f/Arcade_%28Duncan_Laurence_song%29.png"
//   },
//   {
//     song: "Shallow",
//     artist: "Lady Gaga, Bradley Cooper",
//     poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTLvXa24-nlE4ZU0Gu3l7TR73e7N0r8DWSOA&s"
//   },
//   {
//     song: "Say You Won’t Let Go",
//     artist: "James Arthur",
//     poster: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Say_You_Won%27t_Let_Go.jpg/250px-Say_You_Won%27t_Let_Go.jpg"
//   }
// ];

// let curr = [];
// if(elem.genre === "Trending") curr = trending
// else if(elem.genre === "Popular") curr = popular
// else if(elem.genre === "Neww") curr = neww

const [curr,setcurr] = useState([])
const [currsong,setcurrsong] = useState(null) 
const audioref = useRef(null);
const fetchsongs = async () => {
    let terms = 'bollywood'
    if(elem.genre === 'Neww') terms = "latest songs" 
    if(elem.genre === 'Popular') terms = "bollywood trending 2025" 
    const songs = await getSongs({term:terms,limit:20});
    const formatted = songs.map(song => ({
    name: song.trackName,
    artist: song.artistName,
    poster: song.artworkUrl100,
    audio: song.previewUrl,
    }))
    setcurr(formatted)
    console.log(songs)
}
const handleplay = (song) => {
    const audio = audioref.current;
    if(!song.audio) return;
    if(currsong === song.audio){
        if(audio.paused) audio.play()
        else audio.pause();
    } 
    else{
        audio.src = song.audio;
        audio.currentTime = 0;
        audio.play();
        setcurrsong(song.audio)
    }
}

useEffect(() => {fetchsongs()},[])

    const playsong = () => {
        audioref.current.play();
    }
    const pausesong = () => {
        audioref.current.pause();
    }

  return (
    <div className='flex overflow-x-auto gap-2  no-scrollbar'>
      {curr.map((e) => {
        return <div onClick={() => {
            handleplay(e)
        }} className='flex group shrink-0 h-full hover:bg-white/30 p-2 transition-all duration-300 ease rounded-xl cursor-pointer flex-col'>
            <div className=' w-[170px] transition-all duration-300 ease relative rounded-xl '>
                <img className='h-[170px] rounded-xl object-center object-cover w-[100%]' src={e.poster} alt="" />
                <i className="ri-play-large-fill bg-emerald-500 absolute bottom-0 right-2 transition-all ease duration-300 opacity-0 group-hover:opacity-100 flex p-2 px-3 justify-center items-center text-2xl rounded-full group-hover:translate-y-[-20%]"></i>
            </div>
            <h3 className='text-lg font-medium text-white w-[170px] break-words whitespace-normal text-center'>{e.name}</h3>
            <h6 className='text-white/30 w-[170px] break-words whitespace-normal text-center'>{e.artist}</h6>
        </div>
      })}
      <audio ref={audioref}/>
    </div>
  )
}

export default SquareCard
