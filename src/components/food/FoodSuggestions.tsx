import { Card } from "@nextui-org/react";
import CardItem from "../suggestions/Card";
import myImage from "../../public/food1.jpg";
import myImage1 from "../../public/food2.jpg";
import myImage2 from "../../public/food3.jpg";

export default function FoodSuggestions() {
  return (
    <div className="w-1192 mx-auto p-4">
      <Card className="p-4 mb-[50px]">
        <h1 className="block w-[985px] mb-[84px] m-auto text-center text-28px font-semibold mt-[20px]">
          Waste less, savor more—eat smart, live better. <br /> Here are some
          suggestions.
        </h1>
        <div className="flex gap-5 mb-[100px]">
          <CardItem
            title="Smaller y sometimes better"
            image={myImage as any}
            secondTitle="Portion Awareness"
            text="Choose smaller portions or take only what you can eat to avoid leftovers and reduce food waste."
          />
          <CardItem
            title="Leave the Tray"
            image={myImage1 as any}
            secondTitle="Trayless Dining"
            text="Opt for trayless dining to limit the amount of food taken and encourage mindful serving.
    "
          />
          <CardItem
            title="Sharing is caring"
            image={myImage2 as any}
            secondTitle="Share and Save"
            text="If portions are too large, share a meal with a friend or save leftovers for later instead of throwing them away.
    "
          />
        </div>
        <h2 className="block w-[985px] m-auto text-center text-28px font-semibold mb-6">
          Cut food waste, earn rewards. Save more, win more.
        </h2>
      </Card>
    </div>
  );
}
