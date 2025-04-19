import { useLocalSearchParams } from "expo-router"
import RestaurantScreen from "../screens/RestaurantScreen"



export default function Restaurant() {

  const {item} = useLocalSearchParams();

  
  const parsedItem = item ? JSON.parse(item as string) : null;

return parsedItem ? <RestaurantScreen item={parsedItem} /> : null;

}