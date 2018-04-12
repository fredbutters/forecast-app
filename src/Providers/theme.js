let colorSecondary = "#ff8a00",
    colorSecondaryHover = "#cc6e00",
    colorPrimary = "#049204",
    colorPrimaryHover = "#4f9900";

export const theme = {
    color: {
        secondary: colorSecondary,
        primary: colorPrimary,
        white: "#fff",
        lightGray: "#ddd",
        danger: "red"
    },
    gradient: {
        primary: `linear-gradient(to bottom, ${colorPrimary} 0, #036803 100%)`,
        secondary: `linear-gradient(to bottom, ${colorSecondary} 0, #e57a00 100%)`
    },
    button: {
        primary: {
            backgroundImage: `linear-gradient(to bottom, ${colorPrimary} 0%, #036803 100%)`,
            color: "#fff",
            backgroundColor: colorPrimary,
            border: "2px solid transparent",
            ":hover": {
                backgroundImage: `linear-gradient(to bottom, ${colorPrimary} 0%, #4f9900 100%)`,
                borderColor: colorPrimaryHover,
                backgroundColor: colorPrimaryHover
            }
        },
        secondary: {
            backgroundImage: `linear-gradient(to bottom, ${colorSecondary} 0%, #e57a00 100%)`,
            color: "#fff",
            backgroundColor: colorSecondary,
            border: "2px solid transparent",
            ":hover": {
                backgroundImage: `linear-gradient(to bottom, #cc6e00 0%, #b25f00 100%)`,
                borderColor: colorSecondaryHover,
                backgroundColor: colorSecondaryHover
            }
        },
        disabled: {
            backgroundImage: `linear-gradient(to bottom,#999  0%, #999 100%)`,
            color: "#fff",
            backgroundColor: colorSecondary,
            border: "2px solid transparent",
            ":hover": {
                backgroundImage: `linear-gradient(to bottom, #999 0%, #999 100%)`,
                borderColor: colorSecondaryHover,
                backgroundColor: colorSecondaryHover
            }
        }
    }
};
