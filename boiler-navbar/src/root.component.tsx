export default function Root(props) {
  return (
    <header className="masthead mb-auto">
      <div className="inner">
        <div>
          <nav className="nav nav-masthead justify-content-center">
            <a className={`nav-link ${location.pathname === '/' && 'active'}`} href="/">
              Home
            </a>
            <a className={`nav-link ${location.pathname === '/news' && 'active'}`} href="/news">
              News
            </a>
            <a className={`nav-link ${location.pathname === '/auth' && 'active'}`} href="/auth">
              Authenticate
            </a>
          </nav>
        </div>
      </div>
    </header>
  );

  //return <section>{props.name} is mounted!</section>;
}
