import Image from "next/image";
export default function Card(props: any) {
  return (
    <div className="bg-white drop-shadow-2xl rounded overflow-hidden">
      <Image
        src={props.image} // Replace with your image path
        alt="Slide 2"
        layout="fixed" // Ensure fixed dimensions
        width={300}
        height={300}
        className="h-[300px] object-cover"
      />
      <div className="px-6 py-4 w-[300px]">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">
          This is some text content describing the image or the card itself. You
          can add more details here.
        </p>
      </div>
    </div>
  );
}
