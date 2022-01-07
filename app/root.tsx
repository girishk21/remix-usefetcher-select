import {
  NavLink,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction, LoaderFunction } from 'remix';

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' };
};

export const loader: LoaderFunction = () => {
  console.log('Root loader called');

  return {};
};

const Nav = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Select</NavLink>
        <NavLink to="/combobox">Combobox</NavLink>
      </nav>
    </header>
  );
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Nav />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
