export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Russell Hoy',
    subtitle: 'Building well designed interfaces to solve tricky problems.',
    description: 'Blog and portfolio for Russell Hoy',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Github',
            href: 'https://github.com/moarsel'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/russell-hoy-a3345591/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/RussellHoy'
        }
    ],
    hero: {
        title: 'Hello & Welcome',
        text: `I'm **Russell Hoy**, a friendly human with a nerdy interest in software development, design, and using those for the public good. 
        When I'm not thinking about all that stuff, I'm playing some guitar or enjoying some nature-based adventures.`,
        image: {
            src: '/russell.jpeg',
            alt: 'Me smiling because of the mountain in the background'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 12,
    projectsPerPage: 12
};

export default siteConfig;
