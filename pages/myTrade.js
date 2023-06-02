import { useRouter } from "next/router";
import FoodProductStyle from "../pages/CSSfile/FoodProductStyle.module.css";
import { getUser, updateUserWithTrId } from "@/lib/healper";
import { useEffect, useState } from "react";

const MyTrade = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const holyday = new Date().toString().slice(0, 3);
  const [remaining, setRemaining] = useState(365);
  // const [income, setIncome] = useState();
  useEffect(() => {
    const localStorageSavedUser = JSON.parse(localStorage.getItem("savedUser"));
    getUser().then((res) => {
      if (localStorageSavedUser) {
        const specificUser = res?.data?.find(
          (singleUser) => singleUser?.email == localStorageSavedUser?.email
        );
        setUser(specificUser);
      }
    });
    const localStorageRemainingDay = JSON.parse(
      localStorage.getItem("timeRemaining")
    );
    const checkingDate = new Date().toString().slice(3, 16);
    const checkDateFromLocalStorage = JSON.parse(
      localStorage.getItem("dailyIncomeCounter")
    );
    if (holyday !== "Sat" && holyday !== "Sun" && user?.isVerified == "true") {
      if (checkDateFromLocalStorage !== checkingDate) {
        updateUserWithTrId(user?._id, {
          amountFromRefer: user?.amountFromRefer + user?.amount * (1.5 / 100),
        }).then((res) => {});
      } else {
        localStorage.setItem(
          "dailyIncomeCounter",
          JSON.stringify(checkingDate)
        );
      }

      setInterval(function() {
          if(localStorageRemainingDay){
              localStorage.setItem('timeRemaining', JSON.stringify( localStorageRemainingDay - 1));
          }
          else{
              localStorage.setItem('timeRemaining', JSON.stringify(365));
          }
        }, 86400);
      setRemaining(localStorageRemainingDay)
    }

    if (holyday !== "Sat" && holyday !== "Sun") {
      setInterval(function () {
        updateUserWithTrId(user?._id, {
          amountFromRefer: user?.amountFromRefer + user?.amount * (1.5 / 100),
        }).then((res) => {});
      }, 3000);
    }
  }, []);
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
            <span>{user?.isVerified == "true" ? "Active" : "Not Active"}</span>
          </p>

          <p
            className={`px-2 lg:block md:block flex justify-between ${FoodProductStyle.mytrade}`}
          >
            <span className="font-bold ">Remaining: </span>
            <span>{remaining}</span>
          </p>

          <p
            style={{ borderBottom: 0 }}
            className={`px-2 lg:block md:block flex justify-between ${FoodProductStyle.mytrade}`}
          >
            <span className="font-bold ">Daily Income: </span>
            {user?.isVerified == "true" && (
              <span>{user?.amount * (1.5 / 100)}</span>
            )}
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MyTrade;
