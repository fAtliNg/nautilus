export default function styles(theme) {
    return {
        card: {
            backgroundColor: theme.palette.backgroundColorComponent
        },
        subheading: theme.font.subheading,
        title: theme.font.title,
        button: {
            width: "100%",
            backgroundColor: theme.palette.backgroundColorMain,
            color: theme.palette.textColor
        },
        divider: {
            backgroundColor: theme.palette.backgroundColorMain
        },
        link: {
            textDecoration: "none"
        },
        paper: {
            textAlign: 'center'
        },
        avatar: {
            width: 40,
            height: 40
        },
        tooltipBottom: {
            top: 8
        }
    }
};