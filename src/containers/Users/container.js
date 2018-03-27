import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";
import { Users as UsersDumb } from "../../components/Users";

const mapStateToProps = state => ({
    allUsers: state.users,
    selectedUser: state.users.selectedUser,
    userCount: state.users.userCount
});
const mapDispatchToProps = dispatch => {
    const boundActionCreators = bindActionCreators(actions, dispatch);
    return { ...boundActionCreators, dispatch };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export const Users = withConnect(UsersDumb);
