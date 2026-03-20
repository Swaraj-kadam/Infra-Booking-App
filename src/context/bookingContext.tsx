import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [booking, setBooking] = useState([
        { id: 1, date: "2023-06-01", client: "John Doe", room: "Room A", status: "Pending" },
        { id: 2, date: "2023-06-02", client: "Jane Smith", room: "Room B", status: "Pending" },
        { id: 3, date: "2023-06-03", client: "Mark Johnson", room: "Room C", status: "Pending" },
        { id: 4, date: "2023-06-04", client: "Emily Davis", room: "Room D", status: "Pending" },
        { id: 5, date: "2023-06-05", client: "Robert Wilson", room: "Room E", status: "Pending" },
    ]);
    const [filteredBooking, setFilteredBooking] = useState();

    const addBooking = (newBooking) => {
        setBooking(prev => [...prev, { ...newBooking, id: Date.now(), status: "Pending" }]);
    };

    const deleteBooking = (id) => {
        setBooking(prev => prev.filter(booking => booking.id !== id));
    }

    return (
        <BookingContext.Provider value={{
            booking,
            filteredBooking,
            addBooking,
            deleteBooking,
        }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => useContext(BookingContext);
