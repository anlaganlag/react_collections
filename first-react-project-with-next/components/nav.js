import Link from "next/link";

const Nav = () => {
  return (
    <nav className="border-b p-3">
      <div className="container mx-auto">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/users">
          <a>Users</a>
        </Link>
        <Link href="/counter-example">
          <a>Counter</a>
        </Link>
        <style jsx>
          {`
            a {
              margin-right: 25px;
            }
          `}
        </style>
      </div>
    </nav>
  );
};

export default Nav;
