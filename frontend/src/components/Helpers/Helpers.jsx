import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "material-ui/styles/index";
import styles from './styles';

class ReplaceBbCode extends Component {
    replaceBbCode = text => {
        var re = new RegExp('\\[id\\d+\\|.*?\\]', 'g');
        let matches = text.match(re) || [];
        return <div>
            {text.split(re)[0]}
            {matches.map((match, i) => {
                let url = match
                    .substring(1, match.length - 1)
                    .split('|')[0];
                let label = match
                    .substring(1, match.length - 1)
                    .split('|')[1];
                return <text>
                    <a className={this.props.classes.subheading} href={"https://vk.com/"+url}>
                        {label}
                    </a>
                    {text.split(re)[i+1]}
                    </text>
            })}
        </div>
    };

    static replaceBbCodeWithoutUrl = text => {
        let result = text;
        let re = new RegExp('\\[id\\d+\\|.*?\\]', 'g');
        let matches = text.match(re) || [];
        matches.forEach(match => {
            result = result.replace(match, match.substring(1, match.length - 1).split('|')[1]);
        });
        return result;
    };

    lineBreak = text => text.split('\n');

    render() {
        const {text} = this.props;
        let lines = this.lineBreak(text);
        return (
            <div>
                {lines.map(line => this.replaceBbCode(line))}
            </div>
        );
    }
}

ReplaceBbCode.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
};

export default withStyles(styles)(ReplaceBbCode);