import Link from 'next/link';
import { useRouter,  } from 'next/router';
import { BaseRouter } from 'next/dist/shared/lib/router/router';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Login', href: '/login' },
  { name: 'Signup', href: '/signup' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function isLinkActive(currentUrl: string, anchorUrl: string) {
  return currentUrl === anchorUrl;
}

export default function AppNavbar() {
  const router = (useRouter() as BaseRouter);

  return (
    <div className="bg-indigo-700">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link 
                    key={item.name}
                    href={item.href}>
                      <a
                        className={classNames(
                          isLinkActive(router.pathname, item.href) ?
                            'bg-white text-indigo-600' :
                            'text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
