"use client";

import {
  Card,
  Checkbox,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadioGroup,
  Radio,
  Tooltip,
} from "@nextui-org/react";
import {
  Barcode,
  BatteryCharging,
  BicepsFlexed,
  CirclePlus,
  Pizza,
  Receipt,
  ScanBarcode,
  Star,
  Trophy,
} from "lucide-react";
import React, { useState } from "react";

export default function Milestone() {
  const [awardSelected, setAwardSelected] = useState("");
  return (
    <div className="w-1192 mx-auto p-4">
      <Card className="p-4 mb-[50px]">
        <div className="flex justify-center gap-[185px]">
          <div className="flex flex-col items-center">
            <Star
              fill="rgba(246, 165, 8, 0.90)"
              color="rgba(246, 165, 8, 0.90)"
            />
            <span className="font-semibold">20%</span>
          </div>
          <div className="flex flex-col items-center">
            <Star
              fill="rgba(246, 165, 8, 0.90)"
              color="rgba(246, 165, 8, 0.90)"
            />
            <span className="font-semibold">40%</span>
          </div>
          <div className="flex flex-col items-center">
            <Star color="rgba(246, 165, 8, 0.90)" />
            <span className="font-semibold">60%</span>
          </div>
          <div className="flex flex-col items-center">
            <Star color="rgba(246, 165, 8, 0.90)" />
            <span className="font-semibold">80%</span>
          </div>
        </div>
        <div className="flex items-end">
          <BatteryCharging className="mr-2" size={45} />
          <Progress
            size="lg"
            value={40}
            color="success"
            className="max-w-[1100px] m-auto"
          />
          <Trophy className="ml-2" size={40} />
        </div>
        <div className="flex justify-center gap-[76px] mt-4">
          <span className="font-semibold">Progress daily</span>
          <span className="font-semibold">You're on a roll</span>
          <span className="font-semibold">Don’t stop now</span>
          <span className="font-semibold">One more push</span>
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex flex-col items-center gap-2 w-[220px]">
            <Pizza />
            <span>Free Pizza</span>
          </div>
          <div>
            <Popover placement="top" showArrow={true}>
              <PopoverTrigger>
                <div>
                  {awardSelected ? (
                    awardSelected === "edeka" ? (
                      <div className="flex flex-col items-center gap-2 w-[220px] cursor-pointer">
                        <ScanBarcode />
                        <span>50% off at Edeka</span>
                      </div>
                    ) : awardSelected === "douglas" ? (
                      <div className="flex flex-col items-center gap-2 w-[220px] cursor-pointer">
                        <Receipt />
                        <span>40% off at Douglas</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2 w-[220px] cursor-pointer">
                        <Barcode />
                        <span>20% off at Shop Apotheke</span>
                      </div>
                    )
                  ) : (
                    <div className="flex flex-col items-center gap-2 w-[220px] cursor-pointer">
                      <CirclePlus />
                      <span>Choose your reward</span>
                    </div>
                  )}
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <div className="text-small font-bold mb-3">
                    Great job, keep shining
                  </div>
                  <div className="text-tiny flex flex-col gap-3">
                    <RadioGroup>
                      <Radio
                        value="edeka"
                        onClick={() => setAwardSelected("edeka")}
                      >
                        50% off at Edeka
                      </Radio>
                      <Radio
                        value="douglas"
                        onClick={() => setAwardSelected("douglas")}
                      >
                        40% off at Douglas{" "}
                      </Radio>
                      <Radio
                        value="apotheke"
                        onClick={() => setAwardSelected("apotheke")}
                      >
                        20% off at Shop Apotheke
                      </Radio>
                    </RadioGroup>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <Popover placement="top" showArrow={true}>
            <PopoverTrigger>
              <div className="flex flex-col items-center gap-2 w-[220px] cursor-pointer">
                <CirclePlus />
                <span>Choose reward</span>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-small font-bold">Keep on the work</div>
              </div>
            </PopoverContent>
          </Popover>
          <Popover placement="top" showArrow={true}>
            <PopoverTrigger>
              <div className="flex flex-col items-center gap-2 w-[220px] cursor-pointer">
                <CirclePlus />
                <span>Choose reward</span>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <div className="text-small font-bold">Keep on the work</div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </Card>
    </div>
  );
}
