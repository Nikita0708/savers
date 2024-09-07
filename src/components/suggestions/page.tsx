import { Card } from "@nextui-org/react";
import Image from "next/image";
import CardItem from "./Card";
import myImage from "../../public/Media.jpg";
import myImage1 from "../../public/Media1.jpg";
import myImage2 from "../../public/Media2.jpg";

export default function Suggestions() {
  return (
    <div className="w-1192 mx-auto p-4">
      <Card className="p-4 mb-[50px]">
        <h1 className="block w-[985px] mb-[84px] m-auto text-center text-28px font-semibold mt-[20px]">
          Power down today, light up tomorrow—save energy, save the future. Here
          are some suggestions.
        </h1>
        <div className="flex gap-5 mb-[100px]">
          <CardItem
            title="Ideas to optimize your settings"
            image={myImage as any}
            secondTitle="Optimize Power Settings:"
            text="Adjust your laptop's power settings to enter sleep mode when inactive"
          />
          <CardItem
            title="Unplug your devices"
            image={myImage1 as any}
            secondTitle="Unplug Peripherals"
            text="Disconnect external devices like USB drives, external hard drives, and accessories when not in use, as they draw power even when idle.
"
          />
          <CardItem
            title="Bye bye google Tabs"
            image={myImage2 as any}
            secondTitle="Limit Background Applications:"
            text="Close unnecessary apps and browser tabs to reduce CPU load, which in turn lowers energy consumption and extends battery life.
"
          />
        </div>
        <h2 className="block w-[985px] m-auto text-center text-28px font-semibold mb-6">
          Small steps spark big change—level up and own your emissions. Cut your
          emissions and win for the planet and ypurself
        </h2>
      </Card>
    </div>
  );
}
