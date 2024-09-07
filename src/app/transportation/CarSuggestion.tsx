import { Card } from "@nextui-org/react";
import Image from "next/image";
import CardItem from "@/components/suggestions/Card";
import myImage from "../../public/transport1.jpg";
import myImage1 from "../../public/transport2.jpg";
import myImage2 from "../../public/transport3.jpg";

export default function CarSuggestion() {
  return (
    <div className="w-1192 mx-auto p-4">
      <Card className=" p-4 mb-[50px]">
        <h1 className="block w-[985px] mb-[84px] m-auto text-center text-28px font-semibold mt-[20px]">
          Drive less, live more—cut the kilometers, boost your lifestyle Here
          are some suggestions.
        </h1>
        <div className="flex gap-5 mb-[100px]">
          <CardItem
            title="Sharing a car, know others"
            image={myImage as any}
            secondTitle="Co-workers car sharing:"
            text="Share rides with coworkers or friends to cut down on the number of cars on the road and reduce your carbon footprint."
          />
          <CardItem
            title="Cycling enjoying the view "
            image={myImage1 as any}
            secondTitle="Bike to work "
            text="If you are nearby, use your bike or combined it with public transportation, improving both your health and the environment.
"
          />
          <CardItem
            title="Use your connections "
            image={myImage2 as any}
            secondTitle="Use Public Transportation"
            text="Opt for buses, trains, or other public transit options to minimize car use and lower overall emissions.
"
          />
        </div>
        <h2 className="block w-[985px] m-auto text-center text-28px font-semibold mb-6">
          Let your car rest—discover more by driving less. <br /> Less car, more
          rewards
        </h2>
      </Card>
    </div>
  );
}
