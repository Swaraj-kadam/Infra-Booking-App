import { Button, Card, Table } from "react-bootstrap"
import Pagination from "../common/Pagination"
import { useEffect, useState } from "react";
import useAuth from "../../context/authContext";
import { useBooking } from "../../context/bookingContext";
import AddBooking from "./addBooking";

const Booking = () => {
    const { filteredBooking, booking, deleteBooking } = useBooking();
    const { isLoggedIn, userRole } = useAuth();

    // const [currentPage, setCurrentPage] = useState(1);
    // const itemsPerPage = 10;

    // const indexOfLastSlide = currentPage * itemsPerPage;
    // const indexOfFirstSlide = indexOfLastSlide - itemsPerPage;
    // const currentProducts = filteredBooking.slice(indexOfFirstSlide, indexOfLastSlide);

    // useEffect(() => {
    //     setCurrentPage(1);
    // }, [filteredBooking]);

    return (
        <>
            <div>
                <Card>
                    <Card.Header className="d-flex">
                        <h1>Booking List</h1>
                    </Card.Header>
                    <Card.Body>
                        {/* <ProductFilter type={handleProductFilter}></ProductFilter> */}
                        <Table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    {/* <th>Client Name</th> */}
                                    <th>Room</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {booking.map(b => (
                                    <tr key={b.id}>
                                        <td>{b.id}</td>
                                        {/* <td>{b.client}</td> */}
                                        <td>{b.room}</td>
                                        <td>{b.date}</td>
                                        <td style={{ backgroundColor: b.status === "Available" ? "green" : "red" }}>{b.status}</td>
                                        <td>
                                            <Button
                                                className="btn-sm mx-1"
                                                variant="danger"
                                                disabled={!isLoggedIn}
                                                onClick={() => { deleteBooking(b.id) }}
                                            >
                                                CheckOut
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        {/* <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} List={filteredBooking} itemsPerPage={itemsPerPage}></Pagination> */}
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Booking