import React from "react";
import { useNavigate } from "react-router-dom";
import "./FeaturedRooms.css";



const rooms = [
  {
    id: 1,
    title: "Non/AC Standard",
    description: "Spacious room with a king-size bed and beautiful views.",
    imageUrl: "https://thumbs.dreamstime.com/z/luxury-hotel-room-king-size-bed-28639463.jpg",
  },
  {
    id: 2,
    title: "AC Standard",
    description: "Comfortable room with a queen-size bed.",
    imageUrl: "https://c8.alamy.com/comp/EH1MH9/modern-hotel-room-with-king-size-bed-EH1MH9.jpg",
  },
  {
    id: 3,
    title: "Non/AC Deluxe",
    description: "Luxury suite with separate living area and premium amenities.",
    imageUrl: "https://media.istockphoto.com/id/1472439241/photo/modern-bedroom-interior-with-double-bed-armchair-and-night-tables.jpg?s=612x612&w=0&k=20&c=01VbSKis3IUTIWmrKCz7hv_ik0syHXffAQSmslijaEM=",
  },
  {
    id: 4,
    title: "AC Super Deluxe",
    description: "Cozy room for solo travelers.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrYjcQi9ARE3pEAOlVZwdS8a_ergizDv1JY6zXpZ8082lEzmgkD5Qa1Ffxh5ZCEN_PEyw&usqp=CAU",
  },
  {
    id: 5,
    title: "Non/AC Suite",
    description: "Spacious room suitable for families.",
    imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/12/b1/ae/28/5-person-room.jpg",
  },
  {
    id: 6,
    title: "AC Suite",
    description: "Top-tier suite with luxurious furnishings.",
    imageUrl: "https://media.istockphoto.com/id/1042424568/photo/3d-rendering-luxury-modern-bedroom-suite-tv-with-wardrobe-and-walk-in-closet.jpg?s=612x612&w=0&k=20&c=AGoD3syG6mjPqWcqFVrcpzgFK_nt5SgwlVcsmyPoLbk=",
  },
];

export default function RoomSelection() {
  
const navigate = useNavigate();
const handleBooking = () => {
  navigate("/booking");
};

  return (
    <section id="rooms">
    <div className="room-selection">
      <h2 className="section-title">Select Your Room</h2>
      <div className="room-grid">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <img
              src={room.imageUrl}
              alt={room.title}
              className="room-image"
            />
            <div className="room-content">
              <h3 className="room-title">{room.title}</h3>
              <p className="room-description">{room.description}</p>
              <button className="select-button" onClick={handleBooking}>Select Room</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
