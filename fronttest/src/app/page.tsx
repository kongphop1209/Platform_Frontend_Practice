import Image from "next/image";
import Board from './components/Board'


export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <Board/>
    </main>
  );
}
