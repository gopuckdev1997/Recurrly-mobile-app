import { icons } from './icons';

export const tabs: AppTab[] = [
    {
        name: 'index',
        title: 'Home',
        icon: icons.home,
        href: null,
    },
    {
        name: 'subscriptions',
        title: 'Subscriptions',
        icon: icons.wallet,
    },
    {   
        name: 'insights',
        title: 'Insights',
        icon: icons.activity,
    },
    {
        name: 'settings',
        title: 'Settings',
        icon: icons.setting,
    },
    {
        name: 'subscriptions/[id]',
        title: 'Subscription Details',
        icon: icons.wallet,
        href: null,
    }
];