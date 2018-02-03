export default function styles (theme) {
  return {
    card: {
      display: 'flex',
      backgroundColor: theme.palette.backgroundColorComponent
    },
    photo: {
      width: '100%'
    },
    number: {
      backgroundColor: theme.palette.turquoise,
      marginTop: 16,
      textAlign: 'center',
      borderRadius: 4,
      width: 30,
      height: 25
    },
    info: {
      paddingLeft: 8
    },
    infoItem: {
      padding: 0
    },
    cover: {
      height: '100%'
    },
    title: theme.font.title,
    subheading: theme.font.subheading,
    role: {
      color: theme.palette.textColor,
      fontStyle: 'italic'
    }
  }
};
