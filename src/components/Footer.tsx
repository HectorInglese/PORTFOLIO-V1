import { Button, Divider } from '@nextui-org/react';
import { Link } from "@nextui-org/react";

const footerData = [
    {
        title: 'Company',
        links: ['About', 'Our Team', 'Careers', 'Contact']
    },
    {
        title: 'Features',
        links: ['Link Shortening', 'Branded Links', 'Analytics']
    },
    {
        title: 'Resources',
        links: ['Blog', 'Developers', 'Support']
    },
];

const Footer = () => {
    return (
        <footer
            className='mx-auto w-full sm:pt-5 pb-2 dark:bg-slate-900 bg-slate-200 '
        >
            <div
                className='container mx-auto h-100% sm:min-h-[100px] flex flex-col sm:flex-row sm:justify-around p-4 sm:p-0'
            >
                <div
                    className='w-full md:w-2/5 md:pl-10 pb-5'
                >
                    <h3 className='text-lg font-semibold'><span className='text-primary'>NextUI </span>Landing</h3>
                    <p className='my-5 max-w-sm text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda alias quasi cupiditate error, debitis beatae tempore.</p>
                    <div
                        className='flex gap-5 '
                    >
                        <Button
                            isIconOnly
                            radius='sm'
                            size="sm"
                        >
                        </Button>
                        <Button
                            isIconOnly
                            radius='sm'
                            size="sm"
                        >
                        </Button>
                        <Button
                            isIconOnly
                            radius='sm'
                            size="sm"
                        >
                        </Button>
                    </div>
                </div>
                <div
                    className='flex flex-col sm:flex-row gap-5 sm:gap-10 w-3/5 justify-evenly '
                >
                    {footerData.map((item, index) => (
                        <div
                            key={index}
                        >
                            <h4
                                className='font-medium text-md text-primary'
                            >{item.title}</h4>
                            <ul
                                className='mt-5 flex flex-col gap-3 '
                            >
                                {item.links.map((link, index) => (
                                    <Link
                                        color='foreground'
                                        key={index}
                                        href={'#'}
                                        className='py-2 text-sm hover:text-primary'
                                    >
                                        {link}
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <Divider className='my-2' />
            <div className='text-center '>
                <p className='text-center text-sm [text-wrap:balance]'>Copyright © {new Date().getFullYear()} NextUILanding. All rights reserved.</p>
                <Link href='#' color='foreground' className='text-center text-sm'>Privacy Policy</Link> | <Link href='#' color='foreground' className='text-center text-sm '>Terms of Service</Link>
            </div>
        </footer>
    );
};
export default Footer;