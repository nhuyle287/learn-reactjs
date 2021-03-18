import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {
    album:PropTypes.object.isRequired,
};
Album.defaultProps = {
    album:[],
};
function Album(props) {
    const {album}=props;
    return (
        <div className="album">
            <p>{album.name}</p>
        </div>
    );
}

export default Album;