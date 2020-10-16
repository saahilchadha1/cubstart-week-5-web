let songs = [
    {
        artist: "Eagles", 
        url: "albums/their_greatest_hits_1971_1975.jpeg"
    }, 
    {
        artist: "Michael Jackson", 
        url: "albums/thriller.jpeg"
    }, 
    {
        artist: "Eagles", 
        url: "albums/hotel_california.jpeg"
    }, 
    {
        artist: "Billy Joel", 
        url: "albums/greatest_hits_vol_1_and_2.jpeg"
    }, 
    {
        artist: "Led Zeppelin", 
        url: "albums/led_zeppelin_iv.jpeg"
    }, 
    {
        artist: "Pink Floyd", 
        url: "albums/the_wall.jpeg"
    }, 
    {
        artist: "AC/DC", 
        url: "albums/back_in_black.jpeg"
    }, 
    {
        artist: "Garth Brooks", 
        url: "albums/double_live.jpeg"
    }, 
    {
        artist: "Hootie & The Blowfish", 
        url: "albums/cracked_rear_view.jpeg"
    }, 
    {
        artist: "Fleetwood Mac", 
        url: "albums/rumours.jpeg"
    }, 
    {
        artist: "Eagles", 
        url: "albums/their_greatest_hits_1971_1975.jpeg"
    }, 
    {
        artist: "Shania Twain", 
        url: "albums/come_on_over.jpeg"
    }, 
    {
        artist: "The Beatles", 
        url: "albums/the_white_album.jpeg"
    }, 
    {
        artist: "Guns N' Roses", 
        url: "albums/appetite_for_destruction.jpeg"
    }, 
    {
        artist: "Whitney Houston", 
        url: "albums/the_bodyguard.jpeg"
    }, 
    {
        artist: "Boston", 
        url: "albums/boston.jpeg"
    },
    {
        artist: "Elton John", 
        url: "albums/greatest_hits.jpeg"
    },
    {
        artist: "Garth Brooks", 
        url: "albums/no_fences.jpeg"
    },
    {
        artist: "The Beatles", 
        url: "albums/the_beatles_1967_1970.jpeg"
    },
    {
        artist: "Alanis Morisette", 
        url: "albums/jagged_little_pill.jpeg"
    },
    {
        artist: "Bee Gees", 
        url: "albums/saturday_night_fever.jpeg"
    }
]


/**
 * Shuffles an array in-place
 * The return value is void in all cases.
 * @param {array} array - Any-length array
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * To be executed when button clicked
 * The return value is void in all cases.
 */
function clickHandler() {
    // YOUR CODE HERE
}

/**
 * Validates inputted data
 * The return value is void in all cases.
 * @param {HTMLElement} parent  Parent of greeting and error nodes
 * @param {string} name         Name input
 * @param {number} numSongs     Number of songs input
 * @returns {boolean}           True if there is an error in inputted data            
 */
function dataValidation (parent, name, numSongs) {
    // YOUR CODE HERE
}

/**
 * Displays album covers and artist names
 * The return value is void in all cases.
 * @param {number} numSongs     Number of album cover/artist(s) to display
 */
function displayAlbums(numSongs) {
    // YOUR CODE HERE
}

const submit = document.getElementById("submit")
submit.addEventListener("click", clickHandler)