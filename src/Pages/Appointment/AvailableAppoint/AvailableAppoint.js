import React, { useState } from "react";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import AppointCards from "./AppointCards";
import Modal from "../Modal/Modal";
import Loading from "../../Shared/Loading/Loading";

const AvailableAppoint = ({ date }) => {
  const [treatment, setTreatment] = useState(null);

  const selectDate = format(date, "PP");

  const {
    data = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", selectDate],
    queryFn: () =>
      fetch(
        `  http://localhost:5000/appointmentOptions?date=${selectDate}`
      ).then((res) => {
        const result = res.json();
        return result;
      }),
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section>
      <p className="text-center text-xl text-primary font-bold">
        Your appointment on {format(date, "PP")}.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-14">
        {data.data?.map((option) => (
          <AppointCards
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointCards>
        ))}
      </div>
      {treatment && (
        <Modal
          setTreatment={setTreatment}
          treatment={treatment}
          refetch={refetch}
          date={date}
        ></Modal>
      )}
    </section>
  );
};

export default AvailableAppoint;
