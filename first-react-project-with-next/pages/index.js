import Link from "next/link";

export default function Index() {
  return <div className="container mx-auto p-3">
    <h1 className="font-bold text-3xl mb-3">
      Home page
    </h1>

    <p className="mb-3">
      Take a look at the <Link href="/users">
          <a className="text-blue-500">user filter app</a>
        </Link>.
    </p>

    <p>
      Or see the simple <Link href="/counter-example">
          <a className="text-blue-500">counter app</a>
        </Link>.
    </p>
  </div>;
}
