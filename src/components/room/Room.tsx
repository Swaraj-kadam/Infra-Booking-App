import { Button, Card, Table } from "react-bootstrap"
import Pagination from "../common/Pagination"
import { useEffect, useState } from "react";
import useAuth from "../../context/authContext";
import { useRoom } from "../../context/RoomContext";
import { useBooking } from "../../context/bookingContext";
// import AddRoom from "./addRoom";

const Room = () => {
    const { filteredRoom, rooms, deleteRoom } = useRoom();
    const { bookRoom } = useBooking();
    const { isLoggedIn, userRole } = useAuth();

    // const [currentPage, setCurrentPage] = useState(1);
    // const itemsPerPage = 10;

    // const indexOfLastSlide = currentPage * itemsPerPage;
    // const indexOfFirstSlide = indexOfLastSlide - itemsPerPage;
    // const currentProducts = filteredRoom.slice(indexOfFirstSlide, indexOfLastSlide);

    // useEffect(() => {
    //     setCurrentPage(1);
    // }, [filteredRoom]);

    return (
        <>
            <div>
                <Card>
                    <Card.Header className="d-flex">
                        <h1>Room List</h1>
                        {/* {userRole === "admin" && (
                            <AddRoom />
                        )} */}
                    </Card.Header>
                    <Card.Body>
                        {/* <ProductFilter type={handleProductFilter}></ProductFilter> */}
                        <Table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Client Name</th>
                                    <th>Room</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rooms.map(b => (
                                    <tr key={b.id}>
                                        <td>{b.id}</td>
                                        <td>{b.client}</td>
                                        <td>{b.room}</td>
                                        <td>{b.date}</td>
                                        <td style={{
                                            backgroundColor: b.status === "Available" ? "green" : "red",
                                            color: "white"
                                        }}
                                        >
                                            {b.status}
                                        </td>
                                        <td>
                                            <Button
                                                className="btn-sm mx-1"
                                                variant="success"
                                                disabled={!isLoggedIn || b.status === "Not Available"}
                                                onClick={() => { bookRoom(b) }}
                                            >
                                                {b.status === "Available" ? "Book Now" : "Booked"}
                                            </Button>
                                            {/* {userRole === "admin" &&
                                                <Button
                                                    className="btn-sm mx-1"
                                                    variant="danger"
                                                    disabled={!isLoggedIn}
                                                    onClick={() => { deleteRoom(b.id) }}
                                                >
                                                    Delete from list
                                                </Button>
                                            } */}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        {/* <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} List={filteredRoom} itemsPerPage={itemsPerPage}></Pagination> */}
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Room