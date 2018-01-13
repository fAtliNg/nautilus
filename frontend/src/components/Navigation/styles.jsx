export default function styles(theme) {
    return {
        toolbar: {
            minHeight: 0,
            backgroundColor: theme.palette.backgroundColorComponent
        },
        menuItem: {
            color: theme.palette.textColor
        },
        footerButton: {
            height: 4,
            backgroundColor: theme.palette.turquoise
        },
        link: {
            textDecoration: "none"
        },
        header: {
            width: "100%"
        }
    }
};