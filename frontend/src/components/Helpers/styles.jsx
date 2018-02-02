export default function styles (theme) {
  return {
    avatar: {
      width: '100%',
      height: '100%'
    },
    card: {
      backgroundColor: theme.palette.backgroundColorComponent
    },
    teamHome: {
      ...theme.font.subheading,
      textAlign: 'left',
      overflow: 'hidden'
    },
    teamAway: {
      ...theme.font.subheading,
      textAlign: 'right',
      overflow: 'hidden'
    },
    subheading: theme.font.subheading,
    display2: theme.font.display2,
    title: theme.font.title
  }
};
