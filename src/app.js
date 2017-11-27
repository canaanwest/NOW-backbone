// Vendor Modules
/*eslint-disable*/
import $ from 'jquery';
import _ from 'underscore';

// CSS
import './css/foundation.css';
import './css/style.css';
import Song from './models/song';
import SongList from './collections/song_list';

//hard coded data
let songTemplate;
const songData = [
    {
      title: "Drop It Like It's Hot",
      year: 2004,
      artist: "Snoop Dog"
    },
    {
      title: "On and Off",
      year: 2017,
      artist: "Maggie Rogers"
    },
    {
      title: "Suit and Jacket",
      year: 2016,
      artist: "Judah and the Lion"
    },
  ];

// create a new instance of song using the model
const alaska = new Song({
  title: "Alaska",
  year: 2017,
  artist: "Maggie Rogers"
})

console.log(alaska)
// create a new list of songs using song data;
const songList = new SongList(songData);
songList.add(alaska);


// document ready
$(document).ready( () => {
  songTemplate = _.template($('#song-template').html());
  songData.forEach((song) => {
    $('#song-list').append(songTemplate(song))
  })
  $('#song-list').append(songTemplate(alaska.attributes));
});


//INSTRUCTIONS

// There is an Underscore template stub already created for you in the dist/index.html file. Update this template to display some of the song fields that you want to see displayed.
// Compile the template in app.js in the appropriate section of code
// Invoke the compiled template to generate the HTML for the model instance created above
// Add the song's HTML to the DOM (check out index.html to see where you'd like to add it)
