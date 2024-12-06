const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4 border-t-4 border-gray-700">
      <div className="container mx-auto text-center">
        <p className="text-sm font-mono tracking-wide">
          &copy; {new Date().getFullYear()} PokeDev. Tous droits réservés.
        </p>
        <ul className="flex justify-center space-x-6 mt-2">
          <li>
            <a
              href="#"
              className="hover:text-gray-200 transition tracking-wide font-mono"
            >
              Mentions légales
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-gray-200 transition tracking-wide font-mono"
            >
              Politique de confidentialité
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-gray-200 transition tracking-wide font-mono"
            >
              Contactez-nous
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
