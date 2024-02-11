const CourseCard = (props) => {
  const { course_prefix, course_code, course_title, average_stars, total_reviews, offered_terms } = props.courseInfo;
  return (
    <a href="/course/COMP1511">
      <div className="box-border px-6 py-7 space-y-2 bg-unilectives-card hover:bg-gray-100 shadow-lg rounded-xl cursor-pointer">
        <div className="flex flex-wrap justify-between text-2xl gap-x-4">
          <h2 className="font-bold w-[8ch]">
            {course_prefix + course_code}
          </h2>
          <div className="text-left">
            <div className="text-2xl inline">
              <div className="relative text-[#999999]/30 inline-block">
                <span id="star-rating">
                  ★★★★★
                </span>
                <span className="bg-[#B789E5] absolute inset-0 text-transparent bg-clip-text select-none" style={{ width: ((average_stars / 5) * 100).toFixed(4) + '%' }}>
                  ★★★★★
                </span>
              </div>
            </div>
            <p className="text-xs text-[#989898] text-opacity-1">
              {total_reviews} reviews
            </p>
          </div>
        </div>
          <p className="text-sm w-full text-[#202020] text-opacity-1 h-16 break-all line-clamp-3">
            {course_title}
          </p>
          <div className="flex flex-wrap gap-2">
            {
              offered_terms.map((term) => {
                return (
                  <span className="text-xs py-1 px-2 rounded-full bg-[#CCEBF6]">
                    {term}
                  </span>
                )
              })
            }
          </div>
        </div>
    </a>
  )
}

export default CourseCard;