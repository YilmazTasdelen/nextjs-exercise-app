import Link from 'next/link';
import { useRouter } from 'next/router';

const ActiveLink = ({ children, href, className }) => {
  const router = useRouter();
  return (
    <Link href={href} scroll={false}>
      <a
        className={`${
          router.pathname === href
            ? 'text-gray-900 border-gray-800'
            : 'text-gray-600 hover:text-gray-700 border-transparent'
        } ${className} block pb-4 font-semibold text-sm sm:text-base border-b-2 focus:outline-none focus:text-gray-900 whitespace-no-wrap`}
      >
        {children}
      </a>
    </Link>
  );
};

const AccountSettingsLayout = ({ children }) => {
  return (
    <div className="max-w-xl mx-auto px-8">
      <h1 className="text-2xl text-gray-900 font-semibold">Account Settings</h1>

      <div
        className="mt-6 flex overflow-x-auto scrollbar-none"
        style={{ boxShadow: 'inset 0 -2px 0 #edf2f7' }}
      >
        <ActiveLink href="/account-settings/basic-information">
          Basic Information
        </ActiveLink>

        <ActiveLink href="/account-settings/profile" className="ml-10">
          Profile
        </ActiveLink>

        <ActiveLink href="/account-settings/team-settings" className="ml-10">
          Team Settings
        </ActiveLink>

        <ActiveLink href="/account-settings/billing" className="ml-10">
          Billing
        </ActiveLink>

        <ActiveLink href="/account-settings/notifications" className="ml-10">
          Notifications
        </ActiveLink>

        <ActiveLink href="/account-settings/security" className="ml-10">
          Security
        </ActiveLink>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default AccountSettingsLayout;
