import TourCard from "./TourCard";

const ToursList = ({tours}) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
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
