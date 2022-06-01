type DonationLink = {
  amount: number;
  link: string;
  type: "one-time" | "recurring";
};

const donationLinks: DonationLink[] = [
  {
    amount: 2,
    link: "https://buy.stripe.com/7sIeW543adVtdri7sv",
    type: "one-time",
  },
  {
    amount: 10,
    link: "https://buy.stripe.com/28oeW5bvC04Ddri7sw",
    type: "one-time",
  },
  {
    amount: 20,
    link: "https://buy.stripe.com/aEUcNXeHO6t12MEeUZ",
    type: "one-time",
  },
  {
    amount: 50,
    link: "https://buy.stripe.com/9AQ5lv6bi04D2ME14a",
    type: "one-time",
  },
  {
    amount: 100,
    link: "https://buy.stripe.com/aEU9BL8jqdVt9b2007",
    type: "one-time",
  },
  {
    amount: 500,
    link: "https://buy.stripe.com/aEU9BL8jqdVt9b2007",
    type: "one-time",
  },
  {
    amount: 10,
    link: "https://buy.stripe.com/14k9BL9nu04D9b25km",
    type: "recurring",
  },
];

export default function DonationGrid() {
  return (
    <div className="py-5">
      <h1 className="text-center text-2xl sm:text-4xl font-bold font-display">
        One-Time Donations
      </h1>
      <div className="flex sm:flex-row flex-col justify-center gap-3 overflow-hidden items-center px-2 w-full py-5 max-w-[100rem] sm:px-6 lg:px-6 mx-auto">
        {donationLinks
          .filter((l) => l.type === "one-time")
          .map((l) => (
            <a
              className="text-black px-7 py-6 bg-dark hover:bg-opacity-100 text-3xl sm:text-4xl rounded-lg bg-opacity-80 sm:hover:rounded-xl sm:hover:-translate-y-2 sm:transition-all sm:duration-300 shadow-lg w-full h-full sm:h-36 flex flex-col justify-center items-center"
              href={l.link}
              key={l.amount}
              target="_blank"
              rel="noreferrer noopener"
            >
              ${l.amount}
            </a>
          ))}
      </div>
      <h1 className="text-center text-2xl sm:text-4xl font-bold font-display">
        Recurring Donations
      </h1>
      <div className="flex sm:flex-row flex-col justify-center gap-3 overflow-hidden items-center px-2 w-full py-5 max-w-[100rem] sm:px-6 lg:px-6 mx-auto">
        {donationLinks
          .filter((l) => l.type === "recurring")
          .map((l) => (
            <a
              className="text-black px-7 py-6 bg-dark hover:bg-opacity-100 text-3xl sm:text-4xl rounded-lg bg-opacity-80 sm:hover:rounded-xl sm:hover:-translate-y-2 sm:transition-all sm:duration-300 shadow-lg w-full h-full sm:h-36 flex flex-col justify-center items-center"
              key={l.amount}
              href={l.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              ${l.amount} Monthly
            </a>
          ))}
      </div>
    </div>
  );
}
