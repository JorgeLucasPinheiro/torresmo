import { 
  Nav , 
  Products ,
  Banner
 } from "./components/components"

export default function Home() {
  return (
    <div className="bg-orange-900">
      <Nav/>
      <Banner/>
      <Products/>
    </div>
  )}
