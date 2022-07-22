import React from 'react'
import "./footer.css"

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

function Footer() {
  return (
      <div className="swipeButtons">
          <IconButton className='replayIcon icon'>
              <ReplayIcon fontSize="large"/>
          </IconButton >

          <IconButton className='closeIcon icon'>
              <CloseIcon fontSize="large" />
          </IconButton >

          <IconButton className='starRateIcon icon'>
              <StarRateIcon fontSize="large" />
          </IconButton >

          <IconButton className='favoriteIcon icon'>
              <FavoriteIcon fontSize="large" />
          </IconButton >

          <IconButton className='flashOnIcon icon'>
              <FlashOnIcon fontSize="large" />
          </IconButton >
    </div>
  )
}

export default Footer