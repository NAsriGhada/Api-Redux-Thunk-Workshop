import { useDispatch, useSelector } from "react-redux";
import { fetchDogImages } from "../redux/dogSlice";
import { useEffect } from "react";

const DogImages = ({ breed = 'hound' }) => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.dog.images);
  const status = useSelector((state) => state.dog.status);
  const error = useSelector((state) => state.dog.error);

  useEffect(() => {
    dispatch(fetchDogImages(breed));
  }, [breed, dispatch]);

  if (status === "loading") {
    return (
      <div className="spinner-border text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div>
      {images.map((image) => (
        <img src={image} className="img-thumbnail" alt="Dog" key={image} />
      ))}
      {/* <img src={images} alt="" /> */}
    </div>
  );
};

export default DogImages;
