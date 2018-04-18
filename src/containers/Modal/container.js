import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";
import { Modal as ModalDumb } from "../../components/Modal";

const mapStateToProps = state => ({
    show: state.show
});

const mapDispatchToProps = dispatch => {
    const boundActionCreators = bindActionCreators(actions, dispatch);
    return { ...boundActionCreators, dispatch };
};

export const Modal = connect(mapStateToProps, mapDispatchToProps)(ModalDumb);
