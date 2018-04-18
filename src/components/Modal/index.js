import React from "react";
import glamorous, { Div, H3 } from "glamorous";
import Button from "../../components/Button";

const ModalBackground = glamorous.div({
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1500",
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    opacity: ".6"
});
const ModalContainer = glamorous.div({
    backgroundColor: "#fff",
    position: "fixed",
    top: "0px",
    left: "0",
    right: "0",
    bottom: "0",
    zIndex: "2000",
    margin: "auto",
    height: "300px",
    width: "400px",
    padding: "15px"
});
const Header = glamorous.div({
    height: "30px",
    padding: "15px"
});
const Footer = glamorous.div({
    height: "30px",
    padding: "15px"
});
const Body = glamorous.div({
    padding: "0 15px"
});

export const Modal = ({ show, title, children, handleClose, handleSubmit }) => {
    if (!show) {
        return null;
    }
    return (
        <ModalBackground>
            <ModalContainer>
                <Header>{title}</Header>
                <Body>{children}</Body>
                <Footer>
                    <Button onClick={handleClose}>Close</Button>&nbsp;
                    <Button onClick={handleSubmit}>Submit</Button>
                </Footer>
            </ModalContainer>
        </ModalBackground>
    );
};
