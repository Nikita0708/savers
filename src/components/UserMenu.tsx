import { Card, CardBody, Divider } from "@nextui-org/react";
import Image from "next/image";
import Icon from "./Icon";
import photoProfileImg from "../public/profile_img.png";
import myImage2 from "../public/Media2.jpg";
import { School } from "lucide-react";

export default function UserMenu() {
  return (
    <Card className="w-[283px] mb-[53px]">
      <CardBody>
        <Image
          src={photoProfileImg}
          alt="Profile image"
          width={50}
          height={50}
        />
        <span className="text-base font-medium not-italic">Neide Patra</span>
        <span className=" block text-xs not-italic font-275 mt-[8px] mb-[8px]">
          Senior IT manager
        </span>
        <Divider />
        <div className="flex justify-between mt-[8px] mb-[8px]">
          <span className="text-base font-medium not-italic block ">
            Your rewards
          </span>
          <span className="text-base font-medium not-italic block">2</span>
        </div>
        <div className="flex justify-between mt-[8px] mb-[8px]">
          <span className="text-base font-medium not-italic block ">
            CO2 Score
          </span>
          <span className="text-base font-medium not-italic block">60%</span>
        </div>
        <Divider />
        <div className="flex justify-between mt-[8px] mb-[8px]">
          <span className="text-base font-medium not-italic block ">
            My Learnings
          </span>
          <School />
        </div>
      </CardBody>
    </Card>
  );
}
