// src/hooks/useBreadcrumb.js
import {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {addBreadcrumbItem, setBreadcrumbPath} from '../store/breadcrumbSlice';

// Configuration des routes avec leurs métadonnées
const routeConfig = {
    '/home': {label: 'Home'},
    '/dashboard': {label: 'Dashboard'},
    '/calendars': {label: 'Calendars'},
    '/calendars/new': {label: 'New Calendar'},
    '/settings/account': {label: 'Account'},
    '/settings/profile': {label: 'Profile'},
    '/settings/general': {label: 'General'},
    '/settings/billing': {label: 'Billing'},
    '/settings/notifications': {label: 'Notifications'},
    '/sessions': {label: 'Sessions'},
};

export const useBreadcrumb = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const breadcrumbItems = useSelector((state: any) => state.breadcrumb.items);

    // Fonction pour obtenir la configuration d'une route
    const getRouteConfig = (pathname) => {
        // Chercher d'abord une correspondance exacte
        if (routeConfig[pathname]) {
            return routeConfig[pathname];
        }

        // Chercher une correspondance avec paramètres
        for (const [pattern, config] of Object.entries(routeConfig)) {
            if (pattern.includes(':')) {
                const regex = new RegExp(pattern.replace(/:[^/]+/g, '[^/]+'));
                if (regex.test(pathname)) {
                    return config;
                }
            }
        }

        return {label: 'Page inconnue'};
    };

    // Mettre à jour le breadcrumb quand la route change
    useEffect(() => {
        const config = getRouteConfig(location.pathname);
        dispatch(addBreadcrumbItem({
            label: config.label,
            path: location.pathname,
            icon: config.icon
        }));
    }, [location.pathname, dispatch]);

    // Fonction pour naviguer vers un élément du breadcrumb
    const navigateToBreadcrumb = (path) => {
        navigate(path);
    };

    return {
        breadcrumbItems,
        navigateToBreadcrumb,
        currentPath: location.pathname
    };
};