import React from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const testimonials = [
  {
    quote:
      "Working with them was a game-changer. They delivered exceptional results on a tight deadline, showing remarkable skill and dedication.",
    name: "Jane Doe",
    role: "CEO at Innovate Inc.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDpbbXl1z-UONpOkPUm16r5zuyxUacuraLXTrgz_wCKk1FZ9RO7_8roL4w-QjEOu_ANrwUI1dq_TrQ016u6x_crkFQ-ga-BE1COEREMZWqi94aDPPEw6yv89yYUqvFUcJUbwEIqh4RQNXPKzLrrQ8JKWJHRWjw7uYqi1uzGlO3wthpzHYZJouI-LVMMxBMgZ6GwJLh3prZzWXxd4SH8mtU4nYJIQC_1PrO-ySxi0ulHkz-q69ptErpO-WVDGVVX7_Qgk7RMg9neSbr",
  },
  {
    quote:
      "An incredibly talented developer who brought our vision to life with precision and creativity. The final product exceeded all our expectations.",
    name: "John Smith",
    role: "Product Manager at Tech Solutions",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQfeaF0m7bGHOhrnKLmHOO0mkCh9hqpcNsYEJZrzjURsSCvYcIR7urCFYkXuvRwMUeN9WUUpgIYOxVlS-PGZgClFJ3JyGI1b2OboBAM_N4BQVC0QvecR9ZFBvmySNHaj7_FUk3nxsHH6vpMXlpQDAGh-4h5dmz21-s8kJ6ePDv-8g0EkJtJOsxJd2P9XJlq0n5yf93HFHRwkgTp8SVYDRAES_6K1ZH7nCQJk67ul_1tf0fVb9c_TnfuAc15T4zgnFRNgzHtlL-cMrh",
  },
  {
    quote:
      "Their ability to tackle complex problems with elegant solutions is unparalleled. A true professional and an asset to any project.",
    name: "Alex Ray",
    role: "Founder of Creative Co.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAaisonckKKbsWcR3ZwzCRIC8aq3BWe9MiYJkIzRolLq9LY8fWdkAbchpEjlf0TMLZeAixLIGtMKv3QwPJPiKfuxAgS2KDFrLR3xBd4mMgVNDecpA0naD-7uF1-js63sbDvESI0WcF-rPZ0rd5qlWA7vx95ZPO2p5xq_I631rTfuD11iyuouaTyfbK8dTvFOFFhUyntyTK6KVKM5e4r3pCxUya3er3QPWOrz5wqTb-Mrr9cBvOhHjAH7dhm_OKEX44353n84X-tgGF9",
  },
  {
    quote:
      "The communication was seamless, and their proactive approach helped us navigate challenges effectively. Highly recommended!",
    name: "Emily Carter",
    role: "Marketing Director at DigitalFirst",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEh362VQwaHergb2cme8LKHNMHljYEVje2ndQ4l-y6mXr5T2tdHLQtBeESKdlm7QkzYE1u8lvA9k5BqvmcZPJKAoEyvxdXhms9iXAY2TFdqDa_rlR4u3hlsoIQsQz1yYmU_rGh-PJKHxIcUEbe6BdM9u-JIkLOmiPZvDEJwyjg0e1xYMOrtNpvgncYFQRW1kQ6eacz-YN3RHOzMqhMdh1p_g44t1FwK_PeJw5bKymmZI6lL9bDDFbCI_DTmmumMKt6xuhtp5xi-71M",
  },
];

const ClientTestimonials = () => {
  return (
    <section
      id="testimonial"
      className="relative flex min-h-screen w-full flex-col items-center justify-center p-8 bg-background-light dark:bg-background-dark font-display"
    >
      <div className="flex flex-col items-center gap-8 w-full max-w-6xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white text-center">
          What Clients Say
        </h1>

        <div className="relative w-full flex items-center">
          <button className="hidden lg:flex items-center justify-center rounded-full bg-white/10 p-2 text-white hover:bg-white/20 mr-2">
            <MdArrowBack size={24} />
          </button>

          <div className="w-full overflow-x-auto">
            <div className="flex gap-6 px-2 py-4">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="flex w-80 flex-shrink-0 flex-col rounded-xl bg-zinc-100/5 dark:bg-zinc-800/20 p-6 shadow-lg"
                >
                  <p className="text-5xl text-primary">“</p>
                  <div className="flex flex-col justify-between pt-2">
                    <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      {t.quote}
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                      <div
                        className="h-12 w-12 rounded-full bg-cover bg-center flex-shrink-0"
                        style={{ backgroundImage: `url(${t.image})` }}
                        alt={`Headshot of ${t.name}`}
                      />
                      <div>
                        <p className="font-semibold text-zinc-900 dark:text-white">
                          {t.name}
                        </p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="hidden lg:flex items-center justify-center rounded-full bg-white/10 p-2 text-white hover:bg-white/20 ml-2">
            <MdArrowForward size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 w-2 rounded-full ${
                idx === 0 ? "bg-primary" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
