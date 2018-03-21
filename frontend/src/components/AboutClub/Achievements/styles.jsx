export default function styles (theme) {
  return {
    textPaper: theme.mixins.gutters({
      backgroundColor: theme.palette.backgroundColorComponent,
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3
    }),
    title: theme.font.title,
    subheading: theme.font.subheading,
    url: {...theme.font.subheading, textDecoration: 'none'}
  }
}
