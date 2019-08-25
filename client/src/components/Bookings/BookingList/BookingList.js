import React from 'react';

import './BookingList.css'

const bookingList = props => (
  <ul className='bookings_list'>
    {props.bookings.map(booking => {
      return (
        <li key={booking._id} className='bookings_item'>
          <div className='booking_item-data'>
            {booking.event.title} -{' '}
            {new Date(booking.event.createdAt).toLocaleDateString()}
          </div>
          <div className='booking_item-actions'>
            <button className='btn' onClick={props.onDelete.bind(this, booking._id)}>Cancel</button>
          </div>
        </li>
      );
    })}
  </ul>
);

export default bookingList;