// import React from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as actions from "./actions";
// import glamorous, { Div, P } from "glamorous";
// import { Container, Row, Col } from "glamorous-grid";
// import { Modal } from "../../containers/Modal";
// import { theme } from "../../Providers";
// import Button from "../../components/Button";

// export class HomeDumb extends React.Component {
//     // toggleModal() {
//     //     this.props.toggleShow(!this.props.show);
//     //     this.setState(prevState => ({
//     //         ...prevState,
//     //         showModal: !this.state.showModal
//     //     }));
//     // }
//     handleClick = () => {
//         this.props.toggleShow(!this.props.show);
//     };
//     render() {
//         const { show } = this.props;
//         return (
//             <Container>
//                 <Row>
//                     <Col>
//                         <Modal
//                             title="Modal Title"
//                             show={this.props.show}
//                             handleClose={this.handleClick}
//                         >
//                             <P>
//                                 Lorem ipsum dolor sit amet, consectetur
//                                 adipiscing elit, sed do eiusmod tempor
//                                 incididunt ut labore et dolore magna aliqua. Ut
//                                 enim ad minim veniam, quis nostrud exercitation
//                                 ullamco laboris nisi ut aliquip ex ea commodo
//                                 consequat. Duis aute irure dolor in
//                                 reprehenderit in voluptate velit esse cillum
//                                 dolore eu fugiat nulla pariatur. Excepteur sint
//                                 occaecat cupidatat non proident, sunt in culpa
//                                 qui officia deserunt mollit anim id est laborum.
//                             </P>
//                         </Modal>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col>
//                         <Button onClick={() => this.handleClick()}>
//                             Show Modal
//                         </Button>
//                     </Col>
//                 </Row>
//             </Container>
//         );
//     }
// }

// const mapStateToProps = state => ({
//     show: state.modal.show
// });

// const mapDispatchToProps = dispatch => {
//     const boundActionCreators = bindActionCreators(actions, dispatch);
//     return { ...boundActionCreators, dispatch };
// };

// export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeDumb);
