var playlist = {
  'John Mayer': 'Gravity',
  'Jimi Hendrix': 'Little Wing',
  'Stevie Ray Vaugn': 'Pride and Joy',
};

function updatePlaylist(playlist, artist, song) {
  playlist.artist = song;
  return playlist;
}

updatePlaylist(playlist, 'Steve Vai', 'For the Love of God')
