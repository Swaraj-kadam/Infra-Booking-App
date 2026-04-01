import { useState } from "react";
import { Button, Container, Form, Modal } from 'react-bootstrap'
import { useRoom } from "../../context/RoomContext";

const AddRoom = () => {
    const [clientName, setClientName] = useState('');
    const [roomName, setRoomName] = useState('');
    const [show, setShow] = useState(false);
    const { addRoom } = useRoom();

    const handleRoomAdd = (e) => {
        e.preventDefault();

        try {
            addRoom({ clientName, roomName });
            setClientName('');
            setRoomName('');
            setShow(false);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <Container>
                <Modal show={show} onHide={() => setShow(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Room</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={handleRoomAdd}>
                            <Form.Group className="mb-3">
                                <Form.Label>Client Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={clientName}
                                    placeholder="Client  Name"
                                    onChange={(e) => setClientName(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Room Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={roomName}
                                    placeholder="Room Name"
                                    onChange={(e) => setRoomName(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Button type="submit" variant="primary" className="w-100">
                                Add Room
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>

                <Button variant="primary" onClick={() => setShow(true)}>
                    Add Room
                </Button>
            </Container>
        </>
    )
}

export default AddRoom;