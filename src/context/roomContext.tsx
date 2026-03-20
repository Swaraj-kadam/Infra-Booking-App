

import { createContext, useContext, useState } from "react";

const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
    const [Room, setRoom] = useState([
        { id: 1, name: "Room A", status: "Full" },
        { id: 2, name: "Room B", status: "Pending" },
        { id: 3, name: "Room C", status: "Pending" },
        { id: 4, name: "Room D", status: "Full" },
        { id: 5, name: "Room E", status: "Pending" },
    ]);
    const [filteredRoom, setFilteredRoom] = useState();

    const addRoom = (newRoom) => {
        setRoom(prev => [...prev, { ...newRoom, id: Date.now(), status: "Pending" }]);
    };

    const deleteRoom = (id) => {
        setRoom(prev => prev.filter(Room => Room.id !== id));
    }

    return (
        <RoomContext.Provider value={{
            Room,
            filteredRoom,
            addRoom,
            deleteRoom,
        }}>
            {children}
        </RoomContext.Provider>
    );
};

export const useRoom = () => useContext(RoomContext);
