import { Person} from "react-bootstrap-icons";

export const AboutMeSection = () => {
  return (
    <section className="lg:h-screen pt-9 exactly-1024:mt-24 " id="about-me-section">
      <div className="flex items-center justify-center">
          <div className="border-1 border-second-color  items-center rounded-full text-sm p-1 px-4 font-second-font tracking-normal  md:w-md lg:w-lg xl:w-xl flex justify-between">
              <Person size={19}/>
              ABOUT ME
          </div>
      </div>
    </section>
  )
}
