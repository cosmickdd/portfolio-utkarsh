// Icons (defined locally — NOT exported)
const TwitterIcon = () => (
  <svg viewBox="0 0 52 42" className="w-full h-full" fill="none">
    <path
      d="M31.5537 0.751665C27.9129 2.3698 25.2834 6.49606 25.2834 10.5414V12.8068L23.0989 12.4832C16.5455 11.5932 9.87065 8.15465 5.50167 3.42159C4.57124 2.41026 3.72172 1.60119 3.64081 1.6821C3.60036 1.763 3.23628 2.69343 2.8722 3.74522C1.61814 7.42649 2.2654 11.1482 4.6926 14.1822C6.06802 15.9217 5.90621 16.0835 3.68127 15.1531L2.22494 14.5463V16.0431C2.2654 19.158 4.6926 22.7988 7.84798 24.4574L9.70884 25.4283L7.76707 25.4687C5.94666 25.4687 5.8253 25.5092 6.06802 26.3587C6.83664 28.8264 10.5179 32.1031 12.9856 32.5886C13.7542 32.7099 14.4419 32.9931 14.5633 33.1549C14.806 33.5594 10.5179 35.7844 8.29296 36.3912C7.28163 36.6744 5.01623 36.998 3.23628 37.1598L0 37.4025L1.86086 38.4948C5.66349 40.7197 9.66838 41.7715 15.251 41.9738C23.6653 42.2569 30.0569 40.2747 35.8418 35.4608C42.2334 30.1613 46.7238 21.0189 46.7238 13.2922C46.7238 10.7032 46.8047 10.501 47.9374 9.69188C49.3128 8.721 52.185 5.32291 51.9018 5.03973C51.7805 4.91837 50.9309 5.12064 49.9601 5.44427C47.4924 6.33425 47.371 6.21289 48.706 4.51384C49.3532 3.70477 50.1219 2.49116 50.3646 1.84391C50.85 0.508944 51.0523 0.508944 46.7238 2.12708L44.1347 3.13842L42.8807 2.16754C42.193 1.64164 40.9389 0.953933 40.1299 0.589851C38.0667 -0.259672 33.5764 -0.178765 31.5537 0.751665Z"
      fill="#ECECEC"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 43 42" className="w-full h-full" fill="none">
    <path d="M3.62703 0.0912804C2.24765 0.375269 0.381439 2.44433 0.0974504 3.98599C-0.754516 8.61095 4.15444 12.0188 8.00857 9.42235C11.9438 6.78531 10.5645 0.659258 5.93951 0.0912804C5.16868 -0.0304292 4.11387 -0.0304292 3.62703 0.0912804Z" fill="#ECECEC"/>
    <path d="M27.1577 14.0068C26.184 14.4125 24.9669 15.2239 24.3989 15.7919L23.3847 16.8061V15.2239V13.6011H19.1248H14.865V27.8006V42H19.3277H23.7904V33.6832C23.7904 27.0703 23.9121 25.0418 24.4395 23.7841C25.616 20.8225 29.389 20.0517 31.5392 22.3642C32.5129 23.3784 32.5129 23.5001 32.6346 32.7095L32.7563 42H37.4624H42.1279L41.9656 31.533C41.8034 22.0396 41.6817 20.9037 40.9108 18.8346C39.856 16.157 38.3955 14.6559 36.0019 13.804C33.5271 12.952 29.2673 13.0331 27.1577 14.0068Z" fill="#ECECEC"/>
    <path d="M0.665649 27.8006V42H5.12833H9.59102V27.8006V13.6011H5.12833H0.665649V27.8006Z" fill="#ECECEC"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 23 42" className="w-full h-full" fill="none">
    <path d="M22.3865 26.2979L23.3865 17.1579H14.5865V10.9079C14.5865 8.57792 15.7365 6.31792 19.1365 6.31792H23.6865V-0.512078C21.7965 -0.812078 18.9565 -1.39208 15.8865 -1.39208C7.98648 -1.39208 2.75648 4.40792 2.75648 13.0579V17.1579H-0.613525V26.2979H2.75648V42.1579H11.8465V26.2979H20.2265L22.3865 26.2979Z" fill="#ECECEC"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="#ECECEC" strokeWidth="2"/>
    <circle cx="12" cy="12" r="5" stroke="#ECECEC" strokeWidth="2" fill="none"/>
    <circle cx="17" cy="7" r="1" fill="#ECECEC"/>
  </svg>
);

export default function Header() {
  return (
    <header className="w-full bg-black sticky top-0 z-50">
      <div className="max-w-[1900px] mx-auto flex items-center justify-between px-5 md:px-10 py-4 md:py-6">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 hover:opacity-80">
          <img src="/logo.svg" alt="COSMICKDD" className="h-7 md:h-9 w-auto" />
        </a>

        {/* Social Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          {[
            { href: "https://twitter.com", icon: TwitterIcon },
            { href: "https://linkedin.com", icon: LinkedInIcon },
            { href: "https://facebook.com", icon: FacebookIcon },
            { href: "https://instagram.com", icon: InstagramIcon },
          ].map(({ href, icon: Icon }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-5 h-5 md:w-6 md:h-6 opacity-80 hover:opacity-100 transition"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
