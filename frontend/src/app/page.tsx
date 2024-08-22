import { Main } from "next/document";
import Image from "next/image";
import NavBar from './components/navbar'
import SideBar from './components/sidebar'

export default function Home() {
  return (
    <main className="flex flex-row box-border">
      <SideBar/>
      <NavBar/>
    </main>
  );
}
