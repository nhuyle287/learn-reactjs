import React from 'react';
import PropTypes from 'prop-types';
import Album from './../Album/index';

AlbumList.propTypes = {
    albumList: PropTypes.array,
};
AlbumList.defaultProps = {
    albumList: [],
};
function AlbumList(props) {
    const {albumList}=props;
    return (
        <ul className="album_list">
            {albumList.map(album => (
                <li key={album.id}>
                    <Album album={album} />
                </li>
            ))}

        </ul>
    );
}

export default AlbumList;