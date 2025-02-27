import { topVector } from "@/public/image";
import Image from "next/image";

export default function TopBorder() {
  return (
    <Image
      style={{ width: "100vw", marginBottom: "-1px", marginTop: "100px" }}
      src={topVector}
      alt=""
      width={1400}
      height={300}
    />
  );
}
