export default function styles(theme) {
    return {
        avatar: {
            width: "100%",
            height: "100%"
        },
        card: {
            backgroundColor: theme.palette.backgroundColorComponent
        },
        subheading: theme.font.subheading,
        display2: theme.font.display2,
        title: theme.font.title,
    }
};