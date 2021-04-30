import TourCard from "./TourCard";

const ToursList = ({tours, deleteTour}) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)"}}>
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
          tour={tour}
          deleteTour= {deleteTour}
        />
      ))}
    </div>
  );
};
export default ToursList;