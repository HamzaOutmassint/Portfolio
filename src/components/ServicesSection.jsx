import { MenuButton } from "react-bootstrap-icons"

export const ServicesSection = () => {
  return (
    <section className="h-screen pt-9" id="services-section">
      <div className="flex items-center justify-center">
          <div className="border-1 border-second-color items-center rounded-full text-sm p-1 px-4 font-second-font tracking-normal w-30 flex justify-between">
              <MenuButton size={18}/>
              SERVICES
          </div>
      </div>
    </section>
  )
}
