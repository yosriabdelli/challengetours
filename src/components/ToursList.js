import TourCard from "./TourCard";

const ToursList = ({tours}) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)"}}>
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
          tour={tour}
        />
      ))}
    </div>
  );
};
export default ToursList;