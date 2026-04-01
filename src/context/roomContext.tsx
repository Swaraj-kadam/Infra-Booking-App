

import { createContext, useContext, useState } from "react";

const RoomContext = createContext(null);

export const RoomProvider = ({ children }) => {
    const [rooms, setRooms] = useState([
        { id: 1, date: "2023-06-01", booked_count: 2, client: "John Doe", room: "Computer Room", status: "Available" },
        { id: 2, date: "2023-06-02", booked_count: 1, client: "Jane Smith", room: "Electricity Room", status: "Available" },
        { id: 3, date: "2023-06-03", booked_count: 3, client: "Mark Johnson", room: "Physics Room", status: "Available" },
        { id: 4, date: "2023-06-04", booked_count: 1, client: "Emily Davis", room: "Chemistry Room", status: "Available" },
        { id: 5, date: "2023-06-05", booked_count: 2, client: "Robert Wilson", room: "Design Room", status: "Available" },
    ]);
    const [filteredRoom, setFilteredRoom] = useState([]);
    const [booking, setBooking] = useState([]);

    const addRoom = ({ clientName, roomName }) => {
        setRooms(prev => [
            ...prev,
            {
                id: Date.now(),
                date: new Date().toISOString().split("T")[0],
                booked_count: 0,
                client: clientName,
                room: roomName,
                status: "Available"
            }
        ]);
    };

    const deleteRoom = (id) => {
        setRooms(prev => prev.filter(room => room.id !== id));
    }

    return (
        <RoomContext.Provider value={{
            rooms,
            setRooms,
            filteredRoom,
            addRoom,
            deleteRoom,
        }}>
            {children}
        </RoomContext.Provider>
    );
};

export const useRoom = () => {
    const context = useContext(RoomContext);
    if (!context) {
        throw new Error("useRoom must be used within RoomProvider");
    }
    return context;
};
