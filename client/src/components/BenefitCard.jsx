import help from "../assets/help.png";
import history from "../assets/history_edu.png";
import explore from "../assets/explore.png";
import botbanner from "../assets/botbanner.png";

export default function BenefitCard() {
  const benefits = [
    { icon: help, text: "Helping to develop your ideas" },
    { icon: history, text: "Create enganging stories" },
    { icon: explore, text: "Help to explore your mind" },
  ];

  return (
    <section className="mt-10">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col bg-primary rounded-xl gap-2 p-12">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <ul className="space-y-2">
              <h3 className="text-center text-3xl sm:text-5xl mb-10 overflow-clip font-bold text-text">
                With Inku
              </h3>
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <div className="flex items-center mb-2 gap-2">
                    <img
                      src={benefit.icon}
                      className="h-[35px] w-[35px]"
                      alt="benefit icon"
                    />
                    <p className="text-text font-medium">{benefit.text}</p>
                  </div>
                  {index < benefits.length - 1 && (
                    <hr className="border-black" />
                  )}
                </li>
              ))}
            </ul>
            <div>
              <img src={botbanner} className="w-[600px]" alt="bot banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
