import { Quote } from "lucide-react";
import testimonials from "../assets/testimonialData";
export const Testimonials = () => {
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
