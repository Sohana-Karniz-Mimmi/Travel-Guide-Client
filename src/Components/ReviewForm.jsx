import { useState } from "react";
import useAuth from "../Hook/useAuth";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const {user} = useAuth()
  const username = user?.displayName
    // console.log(username);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if user is logged in
    const isLoggedIn = true; // Replace with actual login check
    if (!isLoggedIn) {
      alert('You must be logged in to submit a review.');
      return;
    }
    // Submit review (send to server or display locally)
    console.log(`Rating: ${rating}, Comment: ${comment}`);
    // Display the new review
    displayReview(username, rating, comment);
    // Reset form
    setRating(0);
    setComment('');
  };

  const displayReview = (username, rating, comment) => {
    const reviewContainer = document.getElementById('existing-reviews');
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('bg-gray-100', 'p-4', 'border', 'border-gray-300', 'rounded', 'mb-2');
    reviewDiv.innerHTML = `<p><strong>${username}:</strong> ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)} - ${comment}</p>`;
    reviewContainer.appendChild(reviewDiv);
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold mt-8 mb-3">White a Review</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Rating:</label>
          <div className="rating flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <input
                key={star}
                type="radio"
                name="rating"
                className={`mask mask-star-2 ${rating >= star ? 'bg-yellow-400' : ''}`}
                checked={rating === star}
                onChange={() => setRating(star)}
              />
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="comment" className="block mb-2">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="md:w-[800px] w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-[#FD4C5C] text-white rounded hover:bg-[#FF0143]"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
