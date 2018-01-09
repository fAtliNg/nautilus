import {createMuiTheme} from 'material-ui/styles';

export default createMuiTheme({
    palette: {
        backgroundColorComponent: "#042554",
        textColor: "#ffffff"
    },
    font: {
        title: {
            color: "rgba(255, 255, 255, 0.87)",
            fontSize: "1.3125rem",
            fontWeight: "500",
            lineHeight: "1.16667em"
        },
        subheading: {
            color: "rgba(255, 255, 255, 0.87)",
            fontSize: "1rem",
            fontWeight: "400",
            lineHeight: "1.5rem"
        },
        display2: {
            color: "rgba(255, 255, 255, 0.54)",
            fontSize: "2.8125rem",
            fontWeight: "400",
            lineHeight: "1.06667em"
        },
    }
});