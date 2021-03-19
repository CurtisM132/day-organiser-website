import React, { useMemo, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types'

// TODO: Add comment
const ListItemLink = (props) => {
    const { icon, primary, to } = props;

    const routerLink = useMemo(
        () =>
            forwardRef((linkProps, ref) => (
                <Link ref={ref} to={to} {...linkProps} />
            )),
        [to],
    );

    return (
        <ListItem button component={routerLink}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={primary} />
        </ListItem>
    );
}

ListItemLink.propTypes = {
    icon: PropTypes.element.isRequired,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}

export default ListItemLink;