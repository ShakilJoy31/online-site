import { useRouter } from "next/router";
import FoodProductStyle from "../pages/CSSfile/FoodProductStyle.module.css";
import { getUser, updateUserWithTrId } from "@/lib/healper";
import { useEffect, useState } from "react";
import Timer from "./Components/Timer";

const MyTrade = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const holyday = new Date().toString().slice(0, 3);
  const checkingToday = new Date().toString().slice(4,15); 
  const [getDay, setGetDay] = useState(0);

  const dailyMultiply = 365 - getDay;
  const dailyIncomeMultiplier = dailyMultiply;
  console.log(dailyIncomeMultiplier); 
 

  useEffect(() => {
    const localStorageSavedUser = JSON.parse(localStorage.getItem("savedUser"));
    getUser().then((res) => {
      if (localStorageSavedUser) {
        const specificUser = res?.find(
          (singleUser) => singleUser?.email == localStorageSavedUser?.email
        );
        setUser(specificUser);
      }
    });
  }, []);

  useEffect(() => {
    if (
      (holyday !== "Sat" && holyday !== "Fri") &&
      (user?.isVerified == true) &&
      checkingToday == user?.depositDate.slice(1, 12)
    ) {
      if (checkingToday != user?.lastUpdatedDate) {
        updateUserWithTrId(user?._id, {
          amountFromRefer: user?.amountFromRefer + user?.amount * (1.5 / 100), dailyIncome: dailyIncomeMultiplier * (user?.amount * (1.5 / 100))
        }).then((res) => {});
      } else {
        updateUserWithTrId(user?._id, {
          amountFromRefer: user?.amountFromRefer + user?.amount * (1.5 / 100),
          lastUpdatedDate: new Date().toString().slice(4, 15),
          verifiedDaysRemaining: user?.verifiedDaysRemaining
        }).then((res) => {
          console.log(res);
        });
      }
    }
  }, [user, checkingToday, holyday]);

  return (
    <div className="mx-2 mt-4 pb-36 lg:mx-12 md:mx-8 lg:mt-0 md:mt-0">
      <h1 className="my-6 text-3xl ">My Trade</h1>
      <div
        style={{
          borderRadius: "5px",
          backgroundImage: "linear-gradient(45deg, #643843, #B799FF)",
          backgroundSize: "100%",
          backgroundRepeat: "repeat",
        }}
        className="w-full p-2 mb-4 lg:p-6 md:p-4 lg:mb-0 md:mb-0"
      >
        <h1 className="mb-4 font-serif text-2xl">Trades</h1>
        <div
          style={{
            borderRadius: "5px",
            backgroundImage: "linear-gradient(45deg, #B799FF, #643843)",
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
          }}
          className="pb-2"
        >
          <p
            className={`pt-3 lg:block md:block flex justify-between px-2 ${FoodProductStyle.mytrade}`}
          >
            <span className="font-bold ">User Name:</span>{" "}
            <span>{user?.fullName}</span>
          </p>

          <p
            className={`px-2 lg:block md:block flex justify-between ${FoodProductStyle.mytrade}`}
          >
            <span className="font-bold ">Deposit Amount: </span>{" "}
            <span>{user?.amount}</span>
          </p>

          <p
            className={`px-2 lg:block md:block flex justify-between ${FoodProductStyle.mytrade}`}
          >
            <span className="font-bold ">Amount From Refer:</span>{" "}
            <span>
              {(parseInt(user?.amountFromRefer) || "") +
                (parseInt(user?.amountFromSecondRefer) || "") +
                (parseInt(user?.amountFromThirdRefer) || "")}
            </span>
          </p>

          <p
            className={`px-2 lg:block md:block flex justify-between ${FoodProductStyle.mytrade}`}
          >
            <span className="font-bold ">Status: </span>{" "}
            <span>{user?.isVerified == true ? "Active" : "Not Active"}</span>
          </p>

          <p
            className={`px-2 lg:block md:block flex justify-between ${FoodProductStyle.mytrade}`}
          >
            <span className="flex items-center"><span className="mr-2 font-bold">Remaining:</span> <div><Timer setGetDay={setGetDay}></Timer></div></span>
            
          </p>

          <p
            style={{ borderBottom: 0 }}
            className={`px-2 lg:block md:block flex justify-between ${FoodProductStyle.mytrade}`}
          >
            <span className="font-bold ">Daily Income: </span>
            {user?.isVerified == true && (
              <span>{dailyIncomeMultiplier * (user?.amount * (1.5 / 100))}</span>
            )}
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MyTrade;
