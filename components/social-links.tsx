const links = [
  {
    label: "X · @guillermorodas",
    href: "https://x.com/guillermorodas",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
      </svg>
    ),
  },
  {
    label: "Instagram · @_guillermorodas",
    href: "https://instagram.com/_guillermorodas",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

export function SocialLinks() {
  return (
    <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6">
      {links.map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-brand font-semibold hover:underline underline-offset-4 decoration-2"
          >
            {l.icon}
            <span>{l.label}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
