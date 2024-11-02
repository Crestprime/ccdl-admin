import { RiHome3Fill } from '@remixicon/react';

export interface IRoute {
    icon: any;
    route: string;
    title: string;
    subRoutes: Array<IRoute>;
}

export const ROUTES: IRoute[] = [
    {
        icon: RiHome3Fill,
        title: 'Home',
        route: '/dashboard/',
        subRoutes: []
    },
    {
        icon: RiHome3Fill,
        title: 'Inbox',
        route: '/dashboard/inbox',
        subRoutes: []
    },
    {
        icon: RiHome3Fill,
        title: 'Property',
        route: '/dashboard/property',
        subRoutes: [
            {
                icon: RiHome3Fill,
                title: 'Listing',
                route: '/dashboard/property/listing',
                subRoutes: []
            },
            {
                icon: RiHome3Fill,
                title: 'Investments',
                route: '/dashboard/property/investments',
                subRoutes: []
            },
            {
                icon: RiHome3Fill,
                title: 'Sales & Reservation',
                route: '/dashboard/property/sales',
                subRoutes: []
            },
            {
                icon: RiHome3Fill,
                title: 'Schedule',
                route: '/dashboard/property/schedule',
                subRoutes: []
            },
        ],
    },
    {
        icon: RiHome3Fill,
        title: 'Users',
        route: '/dashboard/users',
        subRoutes: []
    },
    {
        icon: RiHome3Fill,
        title: 'Materials',
        route: '/dashboard/materials',
        subRoutes: []
    },
    {
        icon: RiHome3Fill,
        title: 'constructions',
        route: '/dashboard/construction',
        subRoutes: []
    },
    {
        icon: RiHome3Fill,
        title: 'wallet',
        route: '/dashboard/wallet',
        subRoutes: []
    },
    {
        icon: RiHome3Fill,
        title: 'Report & Analytics',
        route: '/dashboard/report',
        subRoutes: []
    },
    {
        icon: RiHome3Fill,
        title: 'Settings',
        route: '/dashboard/settings',
        subRoutes: []
    },
];