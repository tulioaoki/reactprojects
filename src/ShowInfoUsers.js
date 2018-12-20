import React, { Component } from 'react';

class ShowInfoUsers extends Component {
    render() {
        return (
            <ol className='list-users-favorites'>
                { this.props.profiles.map((profiles) => (
                    <li key={ profiles.id }>
                        <p>{`${this.props.users[profiles.userID].name}'s favorite movie is \`${this.props.movies[profiles.favoriteMovieID].name}`}</p>
                    </li>
                ))
                }
            </ol>
        )
    }
}



export default ShowInfoUsers;