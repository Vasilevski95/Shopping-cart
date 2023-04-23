import { useState } from "react";
import { Button } from "react-bootstrap";

type Testimonial = {
  id: number;
  name: string;
  text: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    text: "I recently purchased a product from this store and was blown away by the quality and customer service. I would highly recommend this store to anyone looking for top-notch products and excellent service.",
    image:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: 2,
    name: "Jane Doe",
    text: "I've been a loyal customer of this store for years and have never been disappointed. The selection of products is great, the prices are fair, and the customer service is outstanding. I recommend this store to all of my friends and family.",
    image:
      "https://images.unsplash.com/photo-1594583388237-911c593badee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
  {
    id: 3,
    name: "Mike Johnson",
    text: "I was hesitant to try this store at first, but I'm so glad I did! The product I purchased exceeded my expectations and the customer service was exceptional. I will definitely be a repeat customer and recommend this store to others.",
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonials ">
      <h2>Testimonials</h2>
      <div className="testimonials-content">
        <div className="testimonial-image">
          <img
            height="200px"
            style={{ objectFit: "cover" }}
            src={testimonials[activeIndex].image}
            alt={testimonials[activeIndex].name}
          />
        </div>
        <div className="testimonial-text">
          <h3>{testimonials[activeIndex].name}</h3>
          <p>{testimonials[activeIndex].text}</p>
        </div>
        <div className="testimonial-controls">
          <Button variant="light" onClick={handlePrevClick}>
            &lt;
          </Button>
          <Button variant="light" onClick={handleNextClick}>
            &gt;
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
