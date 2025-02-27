import { bottomVector, topVector } from "@/public/image";
import Image from "next/image";

export default function BottomBorder() {
  return (
    <Image
      style={{
        width: "100%",
        marginTop: "-1px",
      }}
      src={bottomVector}
      alt=""
      width={1400}
      height={300}
    />
  );
}
