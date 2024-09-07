import CanteenUsage from "@/components/food/FoodCanteenGraph";
import FoodGraph from "@/components/food/FoodGraph";
import FoodSuggestions from "@/components/food/FoodSuggestions";
import Milestone from "@/components/milestone/page";

export default function FoodPage() {
  const canteenData = {
    week: [120, 150, 90, 60], // Kilograms of food types A, B, C, and D for the week
    month: [480, 620, 370, 240], // Kilograms of food types A, B, C, and D for the month
    year: [5800, 7400, 4500, 2900], // Kilograms of food types A, B, C, and D for the year
  };
  return (
    <div>
      <CanteenUsage data={canteenData} />
      <FoodSuggestions />
      <Milestone />
    </div>
  );
}
