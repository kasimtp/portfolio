import React from "react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 md:px-16 py-10 font-sans">
      
      {/* Header */}
      <header className="border-b border-gray-800 pb-6 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          PORTFOLIO
        </h1>
        <p className="text-gray-400 mt-2">Updated 2025</p>
      </header>

      {/* Intro */}
      <section className="grid md:grid-cols-2 gap-10 mb-14">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Graphic Designer <span className="text-indigo-400">Ajnas C</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            I'm Ajnas C, from Kerala, India. A creative and motivated graphic
            designer with a strong passion for visual storytelling and brand
            design. I thrive on exploring new challenges that push the
            boundaries of my creativity.
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Known for my creative flair and ability to deliver impactful
            designs. I'm always exploring new trends and techniques to sharpen
            my creative thinking and skills.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-300">📞 +91 9946047897</p>
          <p className="text-gray-300 mt-2">✉️ cajnasaju786@gmail.com</p>
        </div>
      </section>

      {/* Skills */}
      <section className="grid md:grid-cols-2 gap-10 mb-14">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Software Skills</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Proficient</li>
            <li>• Intermediate</li>
            <li>• Intermediate</li>
            <li>• Native</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
          <ul className="grid grid-cols-2 gap-2 text-gray-300">
            <li>Attention to detail</li>
            <li>Love learning</li>
            <li>Time Management</li>
            <li>Creative</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-14">
        <h3 className="text-2xl font-semibold mb-4">Education</h3>
        <div className="bg-gray-900 p-6 rounded-xl">
          <p className="font-medium">
            Under Graduate in Arts (2019 – 2022)
          </p>
          <p className="text-gray-400">
            University of Calicut
          </p>
          <p className="text-gray-400 mt-2">
            Darul Quran Academy, Payyannur, Kannur
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-14">
        <h3 className="text-2xl font-semibold mb-6">Experience</h3>

        <div className="space-y-5">
          {[
            ["Freelance (Remote)", "Digital Head", "2022 - 2025"],
            ["Mizcode, Thiruvananthapuram", "UI/UX Designer"],
            ["Avex Cargo, UAE", "Graphic Designer"],
            ["Trip Destination, Kannur", "Graphic Designer"],
            ["Lestora Technologies, Calicut", "Graphic Designer"],
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-900 p-5 rounded-xl hover:bg-gray-800 transition"
            >
              <p className="font-semibold">{item[0]}</p>
              <p className="text-gray-400">{item[1]}</p>
              {item[2] && (
                <p className="text-sm text-gray-500 mt-1">{item[2]}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Languages & Interests */}
      <section className="grid md:grid-cols-2 gap-10 mb-14">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Languages</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Malayalam</li>
            <li>English</li>
            <li>Urdu</li>
            <li>Hindi</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Interests</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Writing</li>
            <li>Drawing</li>
            <li>Reading</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 border-t border-gray-800 pt-6">
        © 2025 Ajnas C – Portfolio
      </footer>
    </div>
  );
};

export default Portfolio;
