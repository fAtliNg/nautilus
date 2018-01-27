export default function styles(theme) {
    return {
        card: {
            backgroundColor: theme.palette.backgroundColorComponent,
            // color: theme.palette.textColor,
            marginBottom: 16
        },
        header: {
            color: theme.palette.textColor
        },
        subheader: {
            color: theme.palette.textColorSubsidiary
        },
        expand: {
            transform: 'rotate(0deg)',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            })
        },
        expandOpen: {
            transform: 'rotate(180deg)'
        },
        avatar: {
            backgroundColor: theme.palette.backgroundColorComponent,
        },
        flexGrow: {
            flex: '1 1 auto',
        },
        content: {
            paddingTop: 0,
            paddingBottom: 0,
            color: theme.palette.textColor
        },
        title: theme.font.title,
        subheading: theme.font.subheading
    }
}