const Footer = () => {
  return (
    <footer className="bg-gradient-to-bl from-sky-900 to-indigo-400 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left mb-4 md:mb-0">
            © 2024 CSCRani. Todos los derechos reservados.
          </p>
          <ul className="flex space-x-6 mb-4 md:mb-0">
            <li>
              <a href="/about" className="hover:underline">
                Sobre nosotros
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Política de Privacidad
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Términos de Servicio
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
          <div className="flex space-x-4"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
