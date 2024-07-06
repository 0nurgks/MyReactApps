import My_Slider from "../component/home_component/My_Slider"
import Category from "../component/home_component/Category"
import Siralama from "../component/home_component/Siralama"
import Products from "../component/home_component/Products"

export default function Home() {
  return (
    
    <div>
      <My_Slider/>
    <div className="flex my-5">
      <Category/>
      <Siralama/>
      <Products/>
    </div>
    </div>
    
  )
}
