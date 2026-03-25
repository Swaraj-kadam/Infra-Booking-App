import { createContext, useContext, useState } from "react";
import { useRoom } from "./RoomContext";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [booking, setBooking] = useState([
        { id: 1, user_id: 1, date: "2023-06-01", client: "John Doe", room: "Computer Room", status: "Not Available" },
        { id: 2, user_id: 2, date: "2023-06-02", client: "Jane Smith", room: "Electricity Room", status: "Not Available" },
        { id: 3, user_id: 1, date: "2023-06-03", client: "Mark Johnson", room: "Physics Room", status: "Not Available" },
    ]);
    const { rooms,setRooms } = useRoom();
    const [filteredBooking, setFilteredBooking] = useState();

    const bookRoom = (room) => {
        // update room status
        const updatedRooms = rooms.map(r =>
            r.id === room.id ? { ...r, status: "Not Available" } : r
        );

        setRooms(updatedRooms);

        // add to booking
        const newBooking = {
            id: Date.now(),
            room: room.room,
            date: room.date,
            status: "Not Available"
        };

        setBooking(prev => [...prev, newBooking]);
    };

    const deleteBooking = (id) => {
        setBooking(prev => prev.filter(booking => booking.id !== id));
    }
    const checkoutRoom = (id) => {
        setBooking(prev => prev.filter(b => b.id !== id));
    };

    return (
        <BookingContext.Provider value={{
            booking,
            filteredBooking,
            deleteBooking,
            bookRoom,
            checkoutRoom
        }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => useContext(BookingContext);
