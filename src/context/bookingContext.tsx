import { createContext, useContext, useState } from "react";
import { useRoom } from "./RoomContext";
import { useNotification } from "./notificationContext";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [booking, setBooking] = useState([]);
    const { rooms, setRooms } = useRoom();
    const [filteredBooking, setFilteredBooking] = useState();
    const {showNotification} = useNotification();

    const bookRoom = (room) => {
        const updatedRooms = rooms.map(r =>
            r.id === room.id ? { ...r, status: "Not Available" } : r
        );
        setRooms(updatedRooms);
        const newBooking = {
            id: room.id,
            room: room.room,
            date: room.date,
            status: "Not Available"
        };
        setBooking(prev => [...prev, newBooking]);
        showNotification("success", "Room Booked Successfully");
    };
    const checkoutRoom = (id) => {
        const confirm = window.confirm("Are you sure you want to checkout?");
        if (!confirm) {
            showNotification("error", "Checkout Cancelled");
            return;
        }
        const updatedRooms = rooms.map(r => r.id === id ? { ...r, status: "Available" } : r);
        setRooms(updatedRooms);
        setBooking(prev => prev.filter(b => b.id !== id));
        showNotification("success", "Room Checked Out Successfully");
    };

    return (
        <BookingContext.Provider value={{
            booking,
            filteredBooking,
            bookRoom,
            checkoutRoom
        }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => useContext(BookingContext);
