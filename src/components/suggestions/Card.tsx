import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import Image from "next/image";
import { EllipsisVertical } from "lucide-react";

interface CardItemProps {
  title: string;
  image: string;
  secondTitle: string;
  text: string;
}

export default function CardItem({
  title,
  image,
  secondTitle,
  text,
}: CardItemProps) {
  return (
    <Card className="w-[382px] pt-[14px] pb-[14px] pl-2 pr-2">
      <CardHeader className="flex justify-between items-center ">
        <h2 className="font-bold">{title}</h2>
        <EllipsisVertical />
      </CardHeader>
      <CardBody>
        <div className="relative w-full mb-[30px]">
          <Image src={image} width={382} height={140} alt="image" />
        </div>
        <h3 className="font-bold text-base mb-[32px]">{secondTitle}</h3>
        <p>{text}</p>
      </CardBody>
      <CardFooter className="flex justify-end gap-3">
        <Button size="sm">Know more</Button>
        <Button size="sm">Discard</Button>
      </CardFooter>
    </Card>
  );
}
