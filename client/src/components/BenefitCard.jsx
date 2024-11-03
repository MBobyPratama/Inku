import help from "../assets/help.png";
import history from "../assets/history_edu.png";
import explore from "../assets/explore.png";
import botbanner from "../assets/botbanner.png";

export default function BenefitCard() {
  const benefits = [
    { icon: help, text: "Helping to develop your ideas" },
    { icon: history, text: "Helping to develop your ideas" },
    { icon: explore, text: "Helping to develop your ideas" },
  ];

  return (
    <section className="mt-10">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col bg-primary rounded-xl gap-2 p-4">
          <h3 className="text-center text-3xl font-bold text-text">
            With Inku
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <div className="flex items-center gap-2">
                    <img
                      src={benefit.icon}
                      className="h-[25px] w-[25px]"
                      alt="benefit icon"
                    />
                    <p>{benefit.text}</p>
                  </div>
                  {index < benefits.length - 1 && <hr className="mt-2" />}
                </li>
              ))}
            </ul>
            <div>
              <img
                src={botbanner}
                className="w-[240px] h-[160px]"
                alt="bot banner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
