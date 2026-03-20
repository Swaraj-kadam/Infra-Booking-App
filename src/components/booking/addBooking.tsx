import { Container, Modal, Form, Button } from "react-bootstrap"
import { useBooking } from "../../context/bookingContext";
import { useState } from "react";

const AddBooking = () => {
    const { addBooking } = useBooking();
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [show, setShow] = useState(false);

    const handleAddProduct = async (e) => {
        e.preventDefault();

        if (!productName.trim() || productPrice <= 0) {
            alert("Please enter valid product details");
            return;
        }

        await addBooking(productName, productPrice);

        setProductName('');
        setProductPrice(0);
        setShow(false);
    }
    return (
        <>
            <Container>
                <Modal show={show} onHide={() => setShow(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Product</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={handleAddProduct}>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={productName}
                                    placeholder="Product Name"
                                    onChange={(e) => setProductName(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={productPrice}
                                    placeholder="Product Price"
                                    onChange={(e) => setProductPrice(Number(e.target.value))}
                                    min="1"
                                    required
                                />
                            </Form.Group>

                            <Button type="submit" variant="primary" className="w-100">
                                Add Product
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>

                <Button variant="primary" onClick={() => setShow(true)}>
                    Add Product
                </Button>
            </Container>
        </>
    )
}

export default AddBooking