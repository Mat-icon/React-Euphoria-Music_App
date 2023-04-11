import one from '../assets/1.png'
import two from '../assets/linkin park.jpg'
import three from '../assets/3.jpg'
import five from '../assets/10.jpg'
import six from '../assets/7.jpg'
import eight from '../assets/9.jpg'
import audio1 from '../assets/audio/audio1.mp4'
import audio2 from '../assets/audio/audio2.mp4'
import audio3 from '../assets/audio/audio3.mp4'
import audio8 from '../assets/audio/audio4.mp3'
import audio5 from '../assets/audio/audio5.mp4'
import audio6 from '../assets/audio/audio6.mp3'

const artistData =[
    {
        id :1,
        artistName :'Eminem',
        src : audio1,
        coverart:one,
        songName : 'Unaccommodating',
        subtitle : 'From D2 To LBC'
    },
    {
        id :2,
        artistName : 'Six Pence None The Richer',
        src : audio2,
         coverart: eight,
        subtitle : "Kiss Me"
    },
    {
        id :3,
        artistName : 'Jay-Z',
        src : audio3 ,
        coverart:three,
        songName : "Encore/Numb",
        subtitle : 'Holy Grail'
    },
    {
        id :4,
        artistName : 'Linkin Park',
        src : audio6,
        coverart:two,
        subtitle : 'Heavy',
        songName : 'Lost'
    },
    {
        id :5,
        artistName : 'Dr Dre',
        coverart:five,
        subtitle : 'Gospel'
    },
    {
        id :6,
        artistName : 'Kendrick Lamar',
        subtitle : 'Rich Spirit',
        src : audio8,
       coverart: six,
        songName : 'Count me Out'
    },

]

export default artistData