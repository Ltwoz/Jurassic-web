import Card from "./components/card";
import Carousel from "./components/caroulsel";
export default function Home() {
  return (
    <main className="">
      <div className="w-screen">
        <Carousel />
      </div>

      <div className="grid grid-cols-4 gap-4 w-fit mx-auto my-2">
        <Card image={"/pic1.jpg"} />
        <Card image={"/pic2.jpg"}/>
        <Card image={"/pic3.jpg"}/>
        <Card image={"/pic1.jpg"}/>
      </div>
    </main>
  );
}
