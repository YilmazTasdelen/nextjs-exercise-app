import Link from 'next/link';

const SiteLayout = ({ children }) => (
  <div>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/account-settings/basic-information">
        <a>Account Settings</a>
      </Link>
    </nav>
    <div>{children}</div>
  </div>
);

export default SiteLayout;
