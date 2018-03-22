import { connect } from "react-redux";
import { bindActionCreattors } from "redux";
import * as actions from "./actions";
import { Users as UsersDumb } from "../../components/Users";

const mapStateToProps = () => {};
const mapDispatchToProps = dispatch => {};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export const Users = withConnect(UsersDumb);
