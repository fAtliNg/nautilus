export default function styles (theme) {
  return {
    root: {
      width: '100%'
    },
    flex: {
      flex: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
      color: theme.palette.textColor
    },
    drawer: {
      margin: 8
    },
    appBar: {
      backgroundColor: theme.palette.backgroundColorComponent
    }
  }
}
