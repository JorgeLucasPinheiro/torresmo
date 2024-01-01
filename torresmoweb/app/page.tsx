import { 
  Nav , 
  Products ,
  Banner ,
  About
 } from "./components/components"

export default function Home() {
  return (
    <div className="bg-orange-900">
      <Nav/>
      <Banner/>
      <Products/>
      <About/>
    </div>
  )}
