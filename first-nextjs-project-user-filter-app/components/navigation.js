import Link from "next/link";

function Navigation() {
  return (
    <div className="border-b block w-full p-3">
      <ul className="flex container mx-auto">
        <li className="menu-item">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/users">
            <a>User</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
