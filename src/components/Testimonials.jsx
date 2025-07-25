import { Quote } from "lucide-react";
export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content:
        "PG Finder helped me find the perfect accommodation when I moved to a new city for my job. The detailed listings and verified reviews made the decision so much easier.",
      author: "Priya Sharma",
      role: "Software Engineer",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 2,
      content:
        "As a student on a budget, I was worried about finding a good PG. This platform made it super easy to filter options based on my budget and preferred location near my college.",
      author: "Rahul Verma",
      role: "College Student",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      content:
        "The virtual tour feature saved me so much time! I was able to check out multiple PGs from the comfort of my home before making the final decision.",
      author: "Ananya Patel",
      role: "Marketing Professional",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 4,
      content:
        "Being a freelance designer, I travel a lot. PG Finder helped me find short-term, comfortable stays with reliable amenities. Super helpful!",
      author: "Karan Malhotra",
      role: "Freelance Designer",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      id: 5,
      content:
        "I recently got placed as a data analyst and needed a safe place near my office. The verified PGs and map feature were spot on!",
      author: "Sneha Desai",
      role: "Data Analyst",
      avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    },
    {
      id: 6,
      content:
        "Thanks to PG Finder, I could book my room even before moving to the city for my internship. It’s simple, fast, and reliable.",
      author: "Amit Raj",
      role: "Engineering Intern",
      avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Thousands of people have found their perfect PG accommodation using
            our platform
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-6 relative"
            >
              <Quote className="h-8 w-8 text-indigo-200 absolute top-3 left-6 opacity-50" />
              <p className="text-gray-600 relative pl-4">
                "{testimonial.content}"
              </p>
              
              <div className="mt-6 flex items-center">
                {/* <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-10 w-10 rounded-full object-cover"
                /> */}
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900 underline">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
