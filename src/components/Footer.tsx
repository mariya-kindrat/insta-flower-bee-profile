import { CameraIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactLinks = [
    {
      href: "mailto:irynamelnyk339@gmail.com",
      icon: EnvelopeIcon,
      label: "Email",
      ariaLabel: "Send an email to Iryna Melnyk",
    },
    {
      href: "tel:+14756554646",
      icon: PhoneIcon,
      label: "Phone",
      ariaLabel: "Call Iryna Melnyk",
    },
    {
      href: "https://www.instagram.com/instaflowerbee",
      icon: CameraIcon,
      label: "Instagram",
      ariaLabel: "Visit Iryna Melnyk's Instagram profile",
      external: true,
    },
  ];

  return (
    <footer className="bg-ivory py-12 border-t border-hairline mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-graphite text-lg md:text-xl font-medium tracking-wideish mb-2">
              &copy; {currentYear} Iryna Melnyk · Florist
            </p>
            <p className="text-graphite/70 text-sm md:text-base">
              Timeless flowers for heartfelt moments
            </p>
          </div>

          <nav
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 text-graphite"
            aria-label="Contact links"
          >
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="hover:text-forest transition-colors duration-300 flex items-center gap-3 text-base md:text-lg font-medium group focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 focus:ring-offset-ivory rounded-sm p-2"
                aria-label={link.ariaLabel}
              >
                <link.icon
                  className="h-6 w-6 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                />
                <span>{link.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;