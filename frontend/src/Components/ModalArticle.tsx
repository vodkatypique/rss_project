import { useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "./Item"


export default function ModalArticle(props: {slug: string, title: string, read: ()=>void}) {
    const slug = props.slug;
    const title = props.title;

    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false); props.read()}
    const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Read {title}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>titre de l'article : {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Item slug={slug}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
  