export default function styles (theme) {
  return {
    textPaper: theme.mixins.gutters({
      backgroundColor: theme.palette.backgroundColorComponent,
      paddingTop: 16,
      paddingBottom: 16
    }),
    subheading: theme.font.subheading
  }
};
