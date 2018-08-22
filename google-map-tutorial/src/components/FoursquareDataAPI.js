export const getLocationsAll = () =>
  fetch(`https://api.foursquare.com/v2/venues/search?ll=51.48257659999999,-0.0076589&radius=10000&intent=browse&query=pub&client_id=2EIUKRSH1HE350VDDFQC122U51WVYKGN3VHHAMKQ4X4LI0KB&client_secret=TVM0XXYWKQYSB5UUV1GEUHGHETIDUU1DYPG4ITSQHOST5PGU&v=20180820`)
    .then(handleErrors)
    .then(res => res.json())
    .then(data => data.response.venues)


export const getVenueDetails = (venueId)=> {
let venueDetailsUrl =[`/venues/${venueId}?`,
					  `client_id=2EIUKRSH1HE350VDDFQC122U51WVYKGN3VHHAMKQ4X4LI0KB`, `&client_secret=TVM0XXYWKQYSB5UUV1GEUHGHETIDUU1DYPG4ITSQHOST5PGU&v=20180820`].join("")

return	fetch(`https://api.foursquare.com/v2${venueDetailsUrl}`)
		.then(res => res.json())
		.then(data => data.response.venue)
}