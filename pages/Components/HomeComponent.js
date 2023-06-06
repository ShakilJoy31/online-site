import { useRouter } from "next/router";
import FoodProductStyle from "../CSSfile/FoodProductStyle.module.css";
import { BsArrowRightShort } from 'react-icons/bs';

const HomeComponent = () => {
  const router = useRouter(); 
  return (
    <div>
      {/* First one */}
      <div className="mb-4 lg:mb-8 md:mb-6">
        <div className="flex-col hero-content lg:flex-row">
          
          <div className="">
            <h1 className="font-serif text-2xl font-bold text-black lg:text-4xl md:text-3xl">
              What is the Trade Sent System
            </h1>
            <p className={`py-6 font-mono ${FoodProductStyle.para}`}>
              The TRADE SENT is a venture procedure wherein a financial backer
              at the same time trades a resource in various business sectors to
              exploit a cost distinction and produce a benefit. When multiplied
              by a large volume, the returns can be impressive despite the
              typically modest price differences when multiplied by a large
              volume.
            </p>
            <div>
              <div>
                <label onClick={()=>router.push('/signup')}
                  style={{
                    backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                  }}
                  className={`normal-case btn ${FoodProductStyle.moreFoodButton} border-0 text-xl text-black btn-sm`}
                >
                  Sign up <span className="text-2xl"><BsArrowRightShort></BsArrowRightShort></span>
                </label>

                <label  onClick={()=>router.push('/login')}
                  style={{
                    backgroundImage: "linear-gradient(45deg ,green ,white)",
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                  }}
                  className={`normal-case btn ${FoodProductStyle.moreFoodButton} lg:ml-5 md:ml-3 ml-2 border-0 text-xl text-black btn-sm`}
                >
                  Log in <span className="text-2xl"><BsArrowRightShort></BsArrowRightShort></span>
                </label>
              </div>
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-photo/closeup-shot-pile-shiny-gold-coins-bars_181624-60854.jpg?size=626&ext=jpg&ga=GA1.2.190334821.1684960559&semt=ais"
            className={`max-w-sm rounded-lg shadow-2xl lg:max-w-md md:max-w-md ${FoodProductStyle.homePIcture}`}
          />
        </div>
      </div>

      {/* Second One */}
      <div className="">
        <div className="flex-col hero-content lg:flex-row-reverse">
          
          <div className="">
          <div>
            <h1 className="font-serif text-2xl font-bold text-black lg:text-4xl md:text-3xl">
              Acquire hugely with these Tarde sent
            </h1>
            <p className={`pt-4 mr-2 font-mono ${FoodProductStyle.para}`}>
              <span className="text-black cursor-pointer hover:underline">
               Trade Sent
              </span>{" "}
              <br /> Exchange sent Produces Benefit Going FROM 1.5% TO 2% FROM
              Exchanging GOLD, STOCKS, AND CFDS. Withdrawal fees are not charged
              by the Universal Arbitration Trading System. With minimal human
              intervention, all transactions are fully automated.
            </p>
          </div>
          <div>
            <p className={`py-4 mr-2 font-mono ${FoodProductStyle.para}`}>
              <span className="text-black cursor-pointer hover:underline">
                Trade sent Alpha
              </span>{" "}
              <br /> This Trade Sent generates a daily 1.5% -2.% % profit from
              GOLD, STOCKS, AND CFDS. The system gives you room for your profit
              and capital. Available to accumulate profit after 24 Hours from
              depositing time, If your profit is 20 USDT profit. Minimum Trading
              capital: 100 usdt Maximum Usdt: 1,00,000 usdt. Your deposit
              capital will be fixed for 1 year. You can open one deposit and one
              e-account from one account. Every day your capital will be
              returned in the form of profit for 365 days.
            </p>
          </div>
          <div>
            <p className={`mr-2 font-mono ${FoodProductStyle.para}`}>
              <span className="text-black cursor-pointer hover:underline">
                Trade Sent Premium
              </span>{" "}
              <br /> This bot generates 1.5% -2% profit daily from GOLD, STOCKS,
              AND CFDS. Trading capital: 20 usdt Minimum Withdrawal: Maximum
              withdrawal: 10,000 Usdt
            </p>
          </div>
          </div>
          <img
            src="https://img.freepik.com/premium-photo/gold-bar-overlay-money-dollars-concept-poor-economy-investors-hold-dollar-gold_431724-6147.jpg?size=626&ext=jpg&ga=GA1.2.190334821.1684960559&semt=ais"
            className={`max-w-sm rounded-lg shadow-2xl lg:max-w-md md:max-w-md ${FoodProductStyle.homePIcture}`}
          />
        </div>
      </div>

      {/* Third one */}
      <div className="mb-4 lg:mb-8 md:mb-6">
        <div className="flex-col hero-content lg:flex-row">
          <div>
            <h1 className="font-serif text-2xl font-bold text-black lg:text-4xl md:text-3xl">
            Who We Are?
            </h1>
            <p className={`py-6 font-mono ${FoodProductStyle.para}`}>
               TRADE SENT was established in 2019 TARDE SENT SYSTEM was established in 2019 by two brothers. One brother is a successful GOLD TARDER  and  FX TARDER with more than ten years of experience, while the other brother is an IT specialist. With the mix of an effective GOLD MARKET, FOREX MARKET, CRYPTO MARKET, Worldwide Capital Market Technical Examination, crucial investigation subject matter expert and an IT expert you make certain to have a manageable, steady and solid framework certainly.
            </p>
          </div>

          <img
            src="https://t4.ftcdn.net/jpg/05/32/81/25/360_F_532812571_2Fzs20otX5pbSCqZG4jXEROYEiBExPQA.jpg"
            className={`max-w-sm rounded-lg shadow-2xl lg:max-w-md md:max-w-md ${FoodProductStyle.homePIcture}`}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
