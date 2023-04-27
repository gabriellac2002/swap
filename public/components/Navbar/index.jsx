import Link from 'next/link';

export default function Navbar() {
    return (
      <div>
        <ul>
          <Link href="./Home/HomePage"><li>Home</li></Link>
          <li>Sistema Ej</li>
          <li>Ps</li>
        </ul>
      </div>
    )
  }