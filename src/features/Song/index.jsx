import React from 'react';
// import PropTypes from 'prop-types';

import AlbumList from './components/AlbumList/index';
// AlbumFeatue.propTypes = {

// };

function AlbumFeatue(props) {
    const albumlist = [
        {
            id: 1,
            name: 'nhạc việt',
            thumbnaiUrl: 'https://zingmp3.vn/album/Top-100-Bai-Hat-Nhac-Tre-Hay-Nhat-Various-Artists/ZWZB969E.html',
        },
        {
            id: 2,
            name: 'nhạc việt2',
            thumbnaiUrl: 'https://zingmp3.vn/album/Top-100-Bai-Hat-Nhac-Tre-Hay-Nhat-Various-Artists/ZWZB969E.html',
        },
        {
            id: 3,
            name: 'nhạc việt3',
            thumbnaiUrl: 'https://zingmp3.vn/album/Top-100-Bai-Hat-Nhac-Tre-Hay-Nhat-Various-Artists/ZWZB969E.html',
        }
        , {
            id: 4,
            name: 'nhạc việt4',
            thumbnaiUrl: 'https://zingmp3.vn/album/Top-100-Bai-Hat-Nhac-Tre-Hay-Nhat-Various-Artists/ZWZB969E.html',
        }
    ];
    return (
        <div>
            <AlbumList albumList={albumlist}/>
        </div>
    );
}

export default AlbumFeatue;