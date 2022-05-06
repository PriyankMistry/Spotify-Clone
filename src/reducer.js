export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    selectedPlaylistId: "5TZkls9cEOzWDR6qCxwDot",
    selectedPlaylist: null,
    playerState: false,
    // token: null,
};

const reducer = (state, action) => {
    switch(action.type) {
       case 'SET USER':
           return{
               ...state,
               user: action.user
           };
        case 'SET TOKEN':
            return{
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            }
        case 'SET_PLAYLIST':
            return{
                ...state,
                selectedPlaylist: action.selectedPlaylist
            }
        case 'SET_PLAYING':
            return{
                ...state,
                currentlyPlayling: action.currentlyPlayling
            }
        case 'SET_PLAYER_STATE':
            return{
                ...state,
                playerState: action.playerState
            }
        case 'SET_PLAYLIST_ID':
            return{
                ...state,
                selectedPlaylistId: action.selectedPlaylistId
            }

        default:
            return state;
    }
}
export default reducer;