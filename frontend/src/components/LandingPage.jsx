import PageHeader from "./LandingPageComponents/PageHeader";
import SearchBar from "./LandingPageComponents/FilterComponents/SearchBar";
import SortDropdown from "./LandingPageComponents/FilterComponents/SortDropdown";
import courses from "../courses.json";
import CourseCard from "./LandingPageComponents/CardComponents/CourseCard";

const LandingPage = () => {
  return (
    <div id="unilectives-landing-page">
      <div className="ml-20 xs:ml-15">
        <div className="mb-20">
          <PageHeader />
          <div className="flex flex-col justify-center items-center mt-10 w-full">
            <SearchBar />
            <SortDropdown />
            <div className="grid grid-rows-1 grid-cols-1 sm:grid-rows-2 sm:grid-cols-3 gap-12 mt-10 w-5/6 items-center">
              {
                courses.map((course) => {
                  return <CourseCard courseInfo={course} key={`course-${course.course_prefix}${course.course_code}`} />
                })
              }
            </div>
            <p className="m-10">Thanks looking at my application 😄</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;