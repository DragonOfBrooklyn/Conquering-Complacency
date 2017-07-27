

/*START - div
 *When user selects the text box:
 *	Set value to blank, if blank when deselected, repopulate with sample text
 *	change the font color to white
 *When user clicks 'search' button:
 *	site will look for events in its database that occur in places near to that location
 *	Start div will shrink to only show the H3 element and will show 'searching' div
 *
 *SEARCHING - div
 *	This will show only while the site searches for events in its database
 *	For each event near to the user's location, create an 'event object' in the 'locations' div
 *	Once search is complete, searching div will shrink
 *		Reveal H3 element for searching div and reveal 'Locations' div
 *LOCATIONS - div
 *	Create an ordered list with each event objects information
 *	Make selected event object larger in size than others by applying a 'selected' sort of class that makes it have flex-grow = 2
*/
