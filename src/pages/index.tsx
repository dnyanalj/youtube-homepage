import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "../components/VideoCard";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
   <div>
    <VideoCard
    thumbnail={"image.png"}
    title={"Ground Reality of Tier 3 colleges is Horrifying | harkirat Singh"}
    channelimage={"channel_photo.jpg"}
    channelname={"Harkirat Singh"}
    views={"10k"}
    timestamp={"8 days"}
    ></VideoCard>
   </div>
  );
}
