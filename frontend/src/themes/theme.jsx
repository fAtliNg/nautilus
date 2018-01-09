import {createMuiTheme} from 'material-ui/styles';

const palette = {
    backgroundColorMain: "#021229",
    backgroundColorComponent: "#042554",
    textColor: "rgba(255, 255, 255, 0.87)",
    textColorSubsidiary: "rgba(255, 255, 255, 0.54)"
};

export default createMuiTheme({
    palette: palette,
    font: {
        title: {
            color: palette.textColor,
            fontSize: "1.3125rem",
            fontWeight: "500",
            lineHeight: "1.16667em"
        },
        subheading: {
            color: palette.textColor,
            fontSize: "1rem",
            fontWeight: "400",
            lineHeight: "1.5rem"
        },
        display2: {
            color: palette.textColorSubsidiary,
            fontSize: "2.8125rem",
            fontWeight: "400",
            lineHeight: "1.06667em"
        },
    }
});