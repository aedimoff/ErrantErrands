import React from 'react'; 
// import some data or some shit

class FavoritesIndex extends React.Component {
    constructor(props) {
        super(props)
        this.addToSelected = this.addToSelected.bind(this)
    }

    addToSelected() {
        // if !selected
        // some function to add to selected if we're still doing that
        // selected add to "selected" array, which interacts with directions api, 
    }

    removeFromSelected() {
        // if selected 
    }

    render() {
        if (this.props.favorites.length) {
            return (
        //         <div> 
        //              {this.props.favorites.map(fav =>
        //              <i onClick = addToFavorite>heart icon </i> <BusinessItem key={place_id} className=fav-index/>
        //              <button onClick={this.addToSelected} <i check mark icon ></i>>{fav}</button>
        //             )}
        //         </div>
               <>
               <button className="select-button"><i className="far fa-check-square"></i></button>
               <button className="favorite-button"><i class="far fa-heart"></i></button>
               <h1>
               List of favorite businesses here
               </h1>
               </>
            )
        }
    }
}

export default FavoritesIndex