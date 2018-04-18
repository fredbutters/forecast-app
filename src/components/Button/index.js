import glamorous from "glamorous";
import { theme } from "../../Providers/theme";

export default glamorous.button(
    {
        display: "inline-block",
        border: "none",
        padding: "5px 10px",
        borderRadius: "5px",
        cursor: "pointer",
        ":hover": {
            color: theme.color.lightGray,
            backgroundColor: theme.color.primary
        }
    },
    ({ type = "primary" }) => ({
        color: theme.color.white,
        backgroundImage:
            type === "primary"
                ? theme.gradient.primary
                : theme.gradient.secondary
    })
);
