import {useSelector} from 'react-redux';
import { Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...props}) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated );

    return (
        <Route {...props} render={() => (
            isAuthenticated
            ? <Component {...props}/>
            :  <Redirect to='/login'/>
        )}/>
    );
};

export default PrivateRoute;
