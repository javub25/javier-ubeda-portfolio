const Footer = () => 
{
    const date = new Date();
    const fullYear = date.getFullYear();
    return (
        <footer className="p-6 mt-12 bg-[#0057b7] dark:bg-blue-500 rounded-md">
            <p className="text-sm text-white">Copyright © {fullYear} Javier Úbeda</p>
        </footer>
    )
}
export default Footer;