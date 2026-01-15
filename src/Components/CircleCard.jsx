import React from 'react'

const CircleCard = (elem) => {
   const artist =  [
{
"position": "artist",
"name": "Arijit Singh",
"photo": "https://i.pinimg.com/736x/48/d0/a4/48d0a43a2f533bd999ce5de0a9bce629.jpg"
},
{
"position": "artist",
"name": "A.R. Rahman",
"photo": "https://i.pinimg.com/736x/8a/33/7e/8a337e8142145d98801ea4a5700d60fb.jpg"
},
{
"position": "artist",
"name": "Pritam Chakraborty",
"photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTa6mnXuKBEhNwXHVCMcxk6CdGWTQ9DpwhYxU9BRHodlitXYUDixQCkTNk-Gl406kIlogiI5ylqtvkT-XMfIgDDTAJvAEfQQsopLqkvFo&s=10"
},
{
"position": "artist",
"name": "Shreya Ghoshal",
"photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1sEwTqZTFCokqJa-uMOmGh910-L_YwFhXRyTCQxz2Ms60qsoByttFvFSWoH7_rY0HhNdFpriiqjgC79NcR_p9h54TqQ2qEyJV7t2Nqw&s=10"
},
{
"position": "artist",
"name": "Asha Bhosle",
"photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe1Mj_WvpP-hjcBCw5VjhLdWLZnRj3mXHok3UkbtziVqZbKl3uAfa-HLSm-a9fmB5_AU8Gpkun7CSjntgi9pOXZGu3lymJo3hdFW3JGCQ&s=10"
},
{
"position": "artist",
"name": "Jasleen Royal",
"photo": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Jasleen_Royal_performing_in_Rajasthan_%28cropped%29.jpg"
},
{
"position": "artist",
"name": "Sachet Tandon",
"photo": "https://i.scdn.co/image/ab6761610000e5ebe34fad78221a2cb31da57946"
},
{
"position": "artist",
"name": "Vishal Dadlani",
"photo": "https://i.scdn.co/image/ab6761610000e5eb76328e37a2c1280ab9adb90c"
},
{
"position": "artist",
"name": "Shekhar Ravjiani",
"photo": "https://c.saavncdn.com/artists/Shekhar_Ravjiani_003_20231030085118_500x500.jpg"
},
{
"position": "artist",
"name": "Jeet Gannguli",
"photo": "https://cdn-images.dzcdn.net/images/artist/41cb7a12b07f281f0d3aba7bb27211d5/1900x1900-000000-80-0-0.jpg"
},
{
"position": "artist",
"name": "Ed Sheeran",
"photo": "https://hips.hearstapps.com/hmg-prod/images/ed-sheeran-attends-the-f1-the-movie-european-premiere-at-news-photo-1757689303.pjpeg?crop=1.00xw:0.781xh;0,0.0385xh&resize=640:*"
},
{
"position": "artist",
"name": "Bruno Mars",
"photo": "https://cdn.britannica.com/20/181620-050-857BEA59/Bruno-Mars.jpg"
},
{
"position": "artist",
"name": "Lady Gaga",
"photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Lady_Gaga_at_the_White_House_in_2023_%281%29.jpg/330px-Lady_Gaga_at_the_White_House_in_2023_%281%29.jpg"
},
{
"position": "artist",
"name": "Taylor Swift",
"photo": "https://publish.purewow.net/wp-content/uploads/sites/2/2024/10/taylor-swift-hub.jpg?resize=720%2C780"
},
{
"position": "artist",
"name": "Adele",
"photo": "https://hips.hearstapps.com/hmg-prod/images/adele-attends-the-brit-awards-2022-at-the-o2-arena-on-news-photo-1709739132.jpg"
},
{
"position": "artist",
"name": "Pharrell Williams",
"photo": "https://m.media-amazon.com/images/M/MV5BMTQ3NzQ2ODYzMl5BMl5BanBnXkFtZTgwMDA4OTAzMTE@._V1_.jpg"
},
{
"position": "artist",
"name": "John Legend",
"photo": "https://upload.wikimedia.org/wikipedia/commons/3/35/John_Legend_May_2022.jpg"
},
{
"position": "artist",
"name": "Alicia Keys",
"photo": "https://cdn-p.smehost.net/sites/005297e5d91d4996984e966fac4389ea/wp-content/uploads/2020/09/Alicia-Keys-69194_SP1_200107_AK_MZ_SHOT_01_074_a.jpg"
},
{
"position": "artist",
"name": "Ryan Tedder",
"photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnL2rybmwMRoAAOG_4tXzO26ism5QeDvDuaA&s"
},
{
"position": "artist",
"name": "Stevie Wonder",
"photo": "https://upload.wikimedia.org/wikipedia/commons/b/b2/SWonderBSTHyde060719-72_%28cropped%29.jpg"
}
]
  return (
    <div className='flex overflow-x-auto gap-2  no-scrollbar'>
      {artist.map((e) => {
        return <div className='flex flex-shrink-0 p-2 justify-center items-center rounded-xl hover:bg-white/10 transition-all ease duration-300 cursor-pointer flex-col'>
            <div className='h-[170px] group w-[170px] transition-all duration-300 ease relative rounded-full bg-black/30'>
                <img className='h-[100%] rounded-full object-top object-cover w-[100%]' src={e.photo} alt="" />
                <i className="ri-play-large-fill bg-emerald-500 absolute bottom-0 right-2 transition-all ease duration-300 opacity-0 group-hover:opacity-100 flex p-2 px-3 justify-center items-center text-2xl rounded-full group-hover:translate-y-[-20%]"></i>
            </div>
            <h3 className='text-lg text-white font-medium'>{e.name}</h3>
            <h6 className='text-white/30 capitalize'>{e.position}</h6>
        </div>
      })}
    </div>
  )
}

export default CircleCard
